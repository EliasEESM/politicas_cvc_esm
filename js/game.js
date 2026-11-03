/* ==========================================================================
   CVC de Occidente 2026 - Lógica de la Dinámica y Sintetizador Web Audio API
   ========================================================================== */

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    return this.muted;
  }

  /* Sonido 'ding' cristalino para acierto */
  playDing(isFirstTry = true) {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc1.type = "sine";
    osc2.type = "triangle";

    if (isFirstTry) {
      osc1.frequency.setValueAtTime(587.33, now); // D5
      osc1.frequency.exponentialRampToValueAtTime(880, now + 0.12); // A5
      osc2.frequency.setValueAtTime(880, now);
      osc2.frequency.exponentialRampToValueAtTime(1174.66, now + 0.12); // D6
    } else {
      osc1.frequency.setValueAtTime(523.25, now); // C5
      osc1.frequency.exponentialRampToValueAtTime(659.25, now + 0.12); // E5
      osc2.frequency.setValueAtTime(659.25, now);
      osc2.frequency.exponentialRampToValueAtTime(783.99, now + 0.12); // G5
    }

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(0.24, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.55);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(this.ctx.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.56);
    osc2.stop(now + 0.56);
  }

  /* Sonido de error / vibración acústica */
  playError(isSecondFailure = false) {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sawtooth";
    if (isSecondFailure) {
      osc.frequency.setValueAtTime(195, now);
      osc.frequency.linearRampToValueAtTime(130, now + 0.34);
    } else {
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.linearRampToValueAtTime(165, now + 0.24);
    }

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(0.18, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + (isSecondFailure ? 0.36 : 0.26));

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + (isSecondFailure ? 0.38 : 0.28));
  }

  /* Fanfarria breve al concluir las 16 preguntas */
  playVictory() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((freq, idx) => {
      const now = this.ctx.currentTime + idx * 0.11;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.exponentialRampToValueAtTime(0.2, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.46);
    });
  }
}

class CVCGameManager {
  constructor(scenarios, avatars) {
    this.allScenarios = scenarios;
    this.avatars = avatars;
    this.sound = new SoundEngine();
    this.playerCount = 4;
    this.resetSetup();
  }

  resetSetup() {
    this.phase = "setup"; // 'setup' | 'playing' | 'finished'
    this.allPlayersPool = [
      { id: 1, name: "", avatarId: "Jugador 1", score: 0, firstHits: 0, secondHits: 0, sentToReserve: 0 },
      { id: 2, name: "", avatarId: "Jugador 2", score: 0, firstHits: 0, secondHits: 0, sentToReserve: 0 },
      { id: 3, name: "", avatarId: "Jugador 3", score: 0, firstHits: 0, secondHits: 0, sentToReserve: 0 },
      { id: 4, name: "", avatarId: "Jugador 4", score: 0, firstHits: 0, secondHits: 0, sentToReserve: 0 },
      { id: 5, name: "", avatarId: "Jugador 5", score: 0, firstHits: 0, secondHits: 0, sentToReserve: 0 }
    ];
    this.syncActivePlayers();
    this.currentPlayerIndex = 0;
    this.mainQueue = [];
    this.reserveQueue = [];
    this.currentQuestion = null;
    this.isCurrentFromReserve = false;
    this.attemptsOnCurrent = 0;
    this.disabledLetters = new Set();
    this.turnResolved = false;
    this.lastOutcome = null;
    this.resolvedCount = 0;
  }

  setPlayerCount(count) {
    const parsed = parseInt(count, 10);
    if (isNaN(parsed) || parsed < 1 || parsed > 5) return;
    this.playerCount = parsed;
    this.syncActivePlayers();
  }

  syncActivePlayers() {
    this.players = this.allPlayersPool.slice(0, this.playerCount);
  }

  updatePlayerSetup(index, field, value) {
    if (!this.allPlayersPool[index]) return;
    this.allPlayersPool[index][field] = value;
    this.syncActivePlayers();
  }

  canStartGame() {
    this.syncActivePlayers();
    return this.players.length >= 1 && this.players.every(p => p.name && p.name.trim().length > 0);
  }

  startGame() {
    if (!this.canStartGame()) return false;
    this.sound.init();
    this.players.forEach(p => {
      p.name = p.name.trim();
      p.score = 0;
      p.firstHits = 0;
      p.secondHits = 0;
      p.sentToReserve = 0;
    });
    this.currentPlayerIndex = 0;
    this.mainQueue = this.allScenarios.map(s => ({ ...s }));
    this.reserveQueue = [];
    this.resolvedCount = 0;
    this.phase = "playing";
    this.loadNextQuestion();
    return true;
  }

  loadNextQuestion() {
    this.attemptsOnCurrent = 0;
    this.disabledLetters = new Set();
    this.turnResolved = false;
    this.lastOutcome = null;

    if (this.mainQueue.length > 0) {
      this.currentQuestion = this.mainQueue.shift();
      this.isCurrentFromReserve = false;
    } else if (this.reserveQueue.length > 0) {
      this.currentQuestion = this.reserveQueue.shift();
      this.isCurrentFromReserve = true;
    } else {
      this.currentQuestion = null;
      this.phase = "finished";
      this.sound.playVictory();
    }
  }

  getCurrentPlayer() {
    return this.players[this.currentPlayerIndex];
  }

  submitAnswer(letter) {
    if (this.phase !== "playing" || !this.currentQuestion || this.turnResolved) {
      return null;
    }
    if (this.disabledLetters.has(letter)) {
      return null;
    }

    const player = this.getCurrentPlayer();
    const isCorrect = letter === this.currentQuestion.correctLetter;

    if (isCorrect) {
      this.turnResolved = true;
      this.resolvedCount += 1;
      if (this.attemptsOnCurrent === 0) {
        player.score += 2;
        player.firstHits += 1;
        this.sound.playDing(true);
        this.lastOutcome = {
          type: "correct-first",
          pointsAwarded: 2,
          selectedLetter: letter,
          message: `¡Excelente, ${player.name}! Acierto al primer intento (+2 puntos).`,
          justification: this.currentQuestion.justification
        };
      } else {
        player.score += 1;
        player.secondHits += 1;
        this.sound.playDing(false);
        this.lastOutcome = {
          type: "correct-second",
          pointsAwarded: 1,
          selectedLetter: letter,
          message: `¡Bien resuelto en la segunda oportunidad, ${player.name}! (+1 punto).`,
          justification: this.currentQuestion.justification
        };
      }
      return this.lastOutcome;
    } else {
      // Respuesta incorrecta
      this.attemptsOnCurrent += 1;
      this.disabledLetters.add(letter);

      if (this.attemptsOnCurrent === 1) {
        this.sound.playError(false);
        this.lastOutcome = {
          type: "wrong-first",
          pointsAwarded: 0,
          selectedLetter: letter,
          message: "Respuesta incorrecta. ¡Tienes una segunda oportunidad por +1 punto!"
        };
        return this.lastOutcome;
      } else {
        // Segunda falla (0 puntos): va a la reserva al final de la pila y pasa al siguiente jugador
        this.turnResolved = true;
        player.sentToReserve += 1;
        this.sound.playError(true);
        this.reserveQueue.push({ ...this.currentQuestion });
        const nextMsg =
          this.players.length > 1
            ? "Segunda falla (0 puntos). El escenario se envía a la Reserva para salir al final de la pila y el turno pasa al siguiente jugador."
            : "Segunda falla (0 puntos). El escenario se envía a la Reserva para volver a intentarse al final de la pila.";
        this.lastOutcome = {
          type: "wrong-second-reserve",
          pointsAwarded: 0,
          selectedLetter: letter,
          message: nextMsg
        };
        return this.lastOutcome;
      }
    }
  }

  advanceTurn() {
    if (this.phase !== "playing") return;
    // Turno secuencial entre los N jugadores registrados (1 .. N)
    this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
    this.loadNextQuestion();
  }

  /* Calcula la tabla de posiciones donde los empates comparten lugar (Dense Ranking) */
  getLeaderboard() {
    const sorted = [...this.players].sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return b.firstHits - a.firstHits;
    });

    let currentRank = 1;
    return sorted.map((player, idx) => {
      if (idx > 0 && player.score < sorted[idx - 1].score) {
        currentRank += 1;
      }
      const isTied = sorted.filter(p => p.score === player.score).length > 1;
      return {
        ...player,
        rank: currentRank,
        isTied
      };
    });
  }
}

window.CVCGameManager = CVCGameManager;
