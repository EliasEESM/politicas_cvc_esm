/* ==========================================================================
   CVC de Occidente 2026 - Manipulación del DOM y Renderizado Multiplataforma
   ========================================================================== */

window.CVC_UI = {
  currentCategory: "todas",
  searchQuery: "",
  expandedCardIndex: null,

  init(gameManager) {
    this.game = gameManager;
    this.cacheDOM();
    this.bindEvents();
    this.renderExposicion();
    this.renderGameView();
  },

  cacheDOM() {
    this.views = {
      home: document.getElementById("view-home"),
      exposicion: document.getElementById("view-exposicion"),
      dinamica: document.getElementById("view-dinamica")
    };
    this.masonryContainer = document.getElementById("exposicion-masonry");
    this.expandedOverlay = document.getElementById("flashcard-expanded-overlay");
    this.searchInput = document.getElementById("exposicion-search");
    this.filterButtons = document.querySelectorAll("[data-filter-cat]");
    this.gameContainer = document.getElementById("dinamica-stage-root");
    this.muteButtons = document.querySelectorAll(".js-toggle-sound");
  },

  bindEvents() {
    // Filtros de categoría en Exposición
    this.filterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        this.filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.currentCategory = btn.getAttribute("data-filter-cat");
        this.closeExpandedCard();
        this.renderExposicion();
      });
    });

    // Búsqueda en tiempo real en Exposición
    if (this.searchInput) {
      this.searchInput.addEventListener("input", e => {
        this.searchQuery = e.target.value.trim().toLowerCase();
        this.closeExpandedCard();
        this.renderExposicion();
      });
    }

    // Botones de Mute/Sonido
    this.muteButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const muted = this.game.sound.toggleMute();
        this.updateSoundButtons(muted);
      });
    });

    // Navegación por teclado cuando una flashcard está ampliada en pantalla
    document.addEventListener("keydown", e => {
      if (this.expandedCardIndex === null) return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        this.navigateExpandedCard(1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        this.navigateExpandedCard(-1);
      } else if (e.key === "Escape") {
        e.preventDefault();
        this.closeExpandedCard();
      }
    });
  },

  updateSoundButtons(muted) {
    this.muteButtons.forEach(btn => {
      btn.setAttribute("title", muted ? "Activar sonido" : "Silenciar sonido");
      btn.innerHTML = muted
        ? `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`
        : `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`;
    });
  },

  getCategoryIcon(cat) {
    if (cat === "calidad") {
      return `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`;
    }
    if (cat === "objetivos") {
      return `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`;
    }
    return `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`;
  },

  getCategoryBadgeClass(cat) {
    if (cat === "calidad") return "cat-calidad";
    if (cat === "objetivos") return "cat-objetivo";
    return "cat-complementaria";
  },

  getFilteredFlashcards() {
    return window.CVC_DATA.flashcards.filter(item => {
      const matchesCat = this.currentCategory === "todas" || item.category === this.currentCategory;
      const matchesSearch =
        !this.searchQuery ||
        item.title.toLowerCase().includes(this.searchQuery) ||
        item.officialText.toLowerCase().includes(this.searchQuery) ||
        item.interpretation.toLowerCase().includes(this.searchQuery);
      return matchesCat && matchesSearch;
    });
  },

  /* ==========================================================================
     RENDERIZADO DE VISTA 1: EXPOSICIÓN (MASONRY + AMPLIACIÓN EN PRIMERA INSTANCIA)
     ========================================================================== */
  renderExposicion() {
    if (!this.masonryContainer) return;

    const cards = this.getFilteredFlashcards();

    if (cards.length === 0) {
      this.masonryContainer.innerHTML = `
        <div style="grid-column: 1/-1; text-align:center; padding: 3rem; background: var(--surface-glass); border-radius: var(--radius-md);">
          <p style="font-weight:700; font-size:1.1rem; color: var(--text-main);">No se encontraron políticas u objetivos con ese filtro.</p>
          <p style="color: var(--text-muted); font-size:0.9rem; margin-top:0.4rem;">Prueba con otro término o selecciona "Todas".</p>
        </div>
      `;
      return;
    }

    // Todas las tarjetas en el grid permanecen en su tamaño inicial mostrando solo el título
    this.masonryContainer.innerHTML = cards
      .map((card, idx) => {
        const badgeClass = this.getCategoryBadgeClass(card.category);
        const iconSvg = this.getCategoryIcon(card.category);

        return `
          <article class="masonry-item">
            <div class="flashcard-scene" data-card-idx="${idx}" tabindex="0" role="button" aria-label="Tarjeta ${card.title}. Clic para girar y ampliar">
              <div class="flashcard-inner">
                <div class="flashcard-face flashcard-front">
                  <div style="width: 100%;">
                    <div class="card-top-meta">
                      <span class="card-cat-badge ${badgeClass}">${card.categoryLabel}</span>
                    </div>
                    <div class="card-front-icon">${iconSvg}</div>
                    <h3 class="card-front-title">${card.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          </article>
        `;
      })
      .join("");

    // Al hacer clic o tocar cualquier tarjeta, aparece en primera instancia en la pantalla visible
    this.masonryContainer.querySelectorAll(".flashcard-scene").forEach(cardEl => {
      const idx = parseInt(cardEl.getAttribute("data-card-idx"), 10);
      cardEl.addEventListener("click", () => {
        this.openExpandedCard(idx);
      });
      cardEl.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          this.openExpandedCard(idx);
        }
      });
    });
  },

  openExpandedCard(index) {
    const cards = this.getFilteredFlashcards();
    if (!cards.length || index < 0 || index >= cards.length) return;
    this.expandedCardIndex = index;
    document.body.classList.add("modal-open");
    this.renderExpandedOverlay();
  },

  closeExpandedCard() {
    this.expandedCardIndex = null;
    document.body.classList.remove("modal-open");
    if (this.expandedOverlay) {
      this.expandedOverlay.classList.remove("active");
      this.expandedOverlay.setAttribute("aria-hidden", "true");
      this.expandedOverlay.innerHTML = "";
    }
  },

  navigateExpandedCard(direction) {
    const cards = this.getFilteredFlashcards();
    if (!cards.length || this.expandedCardIndex === null) return;
    // Navegación circular: si está en la primera (0) y presiona "Anterior" (-1), va hasta el final (cards.length - 1)
    this.expandedCardIndex = (this.expandedCardIndex + direction + cards.length) % cards.length;
    this.renderExpandedOverlay();
  },

  renderExpandedOverlay() {
    if (!this.expandedOverlay || this.expandedCardIndex === null) return;
    const cards = this.getFilteredFlashcards();
    const card = cards[this.expandedCardIndex];
    if (!card) return;

    const badgeClass = this.getCategoryBadgeClass(card.category);

    this.expandedOverlay.classList.add("active");
    this.expandedOverlay.setAttribute("aria-hidden", "false");

    this.expandedOverlay.innerHTML = `
      <div class="expanded-stage-wrapper">
        <!-- Tarjeta girada y ampliada inmediatamente en la pantalla visible -->
        <div class="expanded-flashcard-body">
          <div>
            <div class="expanded-card-header">
              <span class="card-cat-badge ${badgeClass}">${card.categoryLabel}</span>
            </div>
            <h2 class="expanded-card-title">${card.title}</h2>
          </div>

          <div class="expanded-content-grid">
            <div class="official-text-block expanded-official-block">
              <div class="block-label">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                Fragmento oficial:
              </div>
              <p class="official-verbatim">${card.officialText}</p>
            </div>

            <div class="practical-interpretation-block expanded-paraphrase-block">
              <div class="block-label">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                Paráfrasis:
              </div>
              <p class="practical-text">${card.interpretation}</p>
            </div>
          </div>

          <div style="font-size: 0.8rem; color: var(--text-muted); text-align: right; padding-top: 0.75rem;">
            CVC de Occidente • Sistema de Gestión de la Calidad 2026
          </div>
        </div>

        <!-- 3 Botones pequeños a un costado y a la vista -->
        <aside class="expanded-side-controls" aria-label="Controles de tarjeta ampliada">
          <button type="button" id="btn-expanded-prev" class="expanded-side-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            <span>Anterior</span>
          </button>
          <button type="button" id="btn-expanded-next" class="expanded-side-btn">
            <span>Siguiente</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
          <button type="button" id="btn-expanded-flip" class="expanded-side-btn btn-voltear-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
            <span>Voltear</span>
          </button>
        </aside>
      </div>
    `;

    const prevBtn = document.getElementById("btn-expanded-prev");
    const nextBtn = document.getElementById("btn-expanded-next");
    const flipBtn = document.getElementById("btn-expanded-flip");

    if (prevBtn) {
      prevBtn.addEventListener("click", e => {
        e.stopPropagation();
        this.navigateExpandedCard(-1);
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", e => {
        e.stopPropagation();
        this.navigateExpandedCard(1);
      });
    }
    if (flipBtn) {
      flipBtn.addEventListener("click", e => {
        e.stopPropagation();
        this.closeExpandedCard();
      });
    }

    // Asegurar que el contenido interno de la tarjeta ampliada inicie desde arriba
    const cardBody = this.expandedOverlay.querySelector(".expanded-flashcard-body");
    if (cardBody) {
      cardBody.scrollTop = 0;

      // Soporte para gestos táctiles (swipe izquierda/derecha) en celular
      let touchStartX = 0;
      let touchStartY = 0;
      cardBody.addEventListener(
        "touchstart",
        e => {
          if (e.changedTouches && e.changedTouches[0]) {
            touchStartX = e.changedTouches[0].screenX;
            touchStartY = e.changedTouches[0].screenY;
          }
        },
        { passive: true }
      );

      cardBody.addEventListener(
        "touchend",
        e => {
          if (e.changedTouches && e.changedTouches[0]) {
            const dx = e.changedTouches[0].screenX - touchStartX;
            const dy = e.changedTouches[0].screenY - touchStartY;
            if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) {
              if (dx < 0) {
                this.navigateExpandedCard(1);
              } else {
                this.navigateExpandedCard(-1);
              }
            }
          }
        },
        { passive: true }
      );
    }

    // Permitir volver si el usuario toca el fondo desenfocado fuera de la tarjeta
    this.expandedOverlay.onclick = e => {
      if (e.target === this.expandedOverlay) {
        this.closeExpandedCard();
      }
    };
  },

  /* ==========================================================================
     RENDERIZADO DE VISTA 2: DINÁMICA (REGISTRO 1-5 JUGADORES, JUEGO Y POSICIONES)
     ========================================================================== */
  renderGameView() {
    if (!this.gameContainer) return;
    if (this.game.phase === "setup") {
      this.renderSetupStage();
    } else if (this.game.phase === "playing") {
      this.renderPlayingStage();
    } else {
      this.renderLeaderboardStage();
    }
  },

  getAvatarById(avatarId) {
    return (
      window.CVC_DATA.avatars.find(a => a.id === avatarId) || window.CVC_DATA.avatars[0]
    );
  },

  renderSetupStage() {
    const canPlay = this.game.canStartGame();
    const currentCount = this.game.playerCount;

    this.gameContainer.innerHTML = `
      <div class="game-registration-container">
        <div class="section-header" style="margin-bottom: 1.25rem;">
          <div>
            <span class="ios-pill-badge">Dinámica Anual 2026</span>
            <h2 style="font-size: 1.65rem; font-weight: 800; margin-top: 0.45rem;">Registro de Participantes</h2>
            <p class="text-muted" style="font-size: 0.92rem;">Ingresa los nombres de los participantes y da clic al botón de inicio.</p>
          </div>
        </div>

        <!-- Selector de Número de jugadores (1 a 5 personas) -->
        <div class="player-count-bar">
          <div class="player-count-label">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="var(--primary)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            <span>Número de jugadores</span>
          </div>
          <div class="player-count-options" role="radiogroup" aria-label="Número de jugadores">
            ${[1, 2, 3, 4, 5]
              .map(
                num => `
              <button
                type="button"
                class="player-count-btn js-player-count-btn ${currentCount === num ? "active" : ""}"
                data-count="${num}"
              >
                ${num}
              </button>
            `
              )
              .join("")}
          </div>
        </div>

        <div class="players-setup-grid">
          ${this.game.players
            .map(
              (p, idx) => `
            <div class="player-setup-card ${p.name.trim() ? "ready" : ""}" data-player-card="${idx}">
              <div class="player-setup-header">
                <span class="player-num-badge">Jugador ${idx + 1}</span>
              </div>
              <input
                type="text"
                class="player-name-input js-player-name"
                data-player-idx="${idx}"
                placeholder="Nombre del Jugador ${idx + 1}..."
                value="${p.name}"
                maxlength="28"
                autocomplete="off"
              />
              <span class="avatar-picker-label">Selecciona tu avatar de juego:</span>
              <div class="avatar-options-row">
                ${window.CVC_DATA.avatars
                  .map(
                    av => `
                  <button
                    type="button"
                    class="avatar-option-btn js-avatar-pick ${p.avatarId === av.id ? "selected" : ""}"
                    data-player-idx="${idx}"
                    data-avatar-id="${av.id}"
                    aria-label="Avatar ${av.id}"
                  >
                    ${av.svg}
                  </button>
                `
                  )
                  .join("")}
              </div>
            </div>
          `
            )
            .join("")}
        </div>

        <div style="text-align: center; background: var(--surface-glass-strong); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--border-glass); box-shadow: var(--shadow-sm);">
          <button type="button" id="btn-start-play" class="btn-ios btn-ios-primary" style="min-width: 260px; width: 100%; max-width: 340px; font-size: 1.1rem;" ${canPlay ? "" : "disabled"}>
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            <span>PLAY • Iniciar Dinámica</span>
          </button>
          <p id="setup-helper-msg" style="font-size: 0.84rem; color: var(--text-muted); margin-top: 0.65rem;">
            ${canPlay ? "¡Listo para comenzar la dinámica!" : "Completa los espacios de registro habilitados para iniciar."}
          </p>
        </div>
      </div>
    `;

    // Listeners para botones de Número de jugadores (1 a 5)
    this.gameContainer.querySelectorAll(".js-player-count-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const count = parseInt(btn.getAttribute("data-count"), 10);
        this.game.setPlayerCount(count);
        this.renderSetupStage();
      });
    });

    // Listeners para inputs de nombres
    const playBtn = document.getElementById("btn-start-play");
    const helperMsg = document.getElementById("setup-helper-msg");

    this.gameContainer.querySelectorAll(".js-player-name").forEach(input => {
      input.addEventListener("input", e => {
        const idx = parseInt(e.target.getAttribute("data-player-idx"), 10);
        this.game.updatePlayerSetup(idx, "name", e.target.value);
        const card = this.gameContainer.querySelector(`[data-player-card="${idx}"]`);
        if (card) card.classList.toggle("ready", e.target.value.trim().length > 0);

        const ready = this.game.canStartGame();
        if (playBtn) playBtn.disabled = !ready;
        if (helperMsg) {
          helperMsg.textContent = ready
            ? "¡Listo para comenzar la dinámica!"
            : "Completa los espacios de registro habilitados para iniciar.";
        }
      });
    });

    // Listeners para selección de avatares
    this.gameContainer.querySelectorAll(".js-avatar-pick").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.getAttribute("data-player-idx"), 10);
        const avatarId = btn.getAttribute("data-avatar-id");
        this.game.updatePlayerSetup(idx, "avatarId", avatarId);
        this.renderSetupStage();
      });
    });

    // Botón PLAY
    if (playBtn) {
      playBtn.addEventListener("click", () => {
        if (this.game.startGame()) {
          this.renderGameView();
        }
      });
    }
  },

  renderPlayingStage() {
    const q = this.game.currentQuestion;
    const activePlayer = this.game.getCurrentPlayer();
    const activeAvatar = this.getAvatarById(activePlayer.avatarId);
    const totalQuestions = this.game.allScenarios.length;
    const progressPct = Math.round((this.game.resolvedCount / totalQuestions) * 100);
    const reserveCount = this.game.reserveQueue.length;
    const outcome = this.game.lastOutcome;

    this.gameContainer.innerHTML = `
      <div class="game-arena-layout">
        <!-- SIDEBAR: JUGADORES, AVATARES Y PUNTAJE -->
        <aside class="game-sidebar">
          <div class="sidebar-title">
            <span>Jugadores en Turno</span>
          </div>

          <div class="sidebar-players-list">
            ${this.game.players
              .map((p, idx) => {
                const av = this.getAvatarById(p.avatarId);
                const isTurn = idx === this.game.currentPlayerIndex;
                return `
                  <div class="sidebar-player-item ${isTurn ? "active-turn" : ""}">
                    <div class="sidebar-player-left">
                      <div class="sidebar-avatar-circle">${av.svg}</div>
                      <div class="sidebar-player-info">
                        <div class="sidebar-player-name">${p.name}</div>
                      </div>
                    </div>
                    <div class="sidebar-score-box">
                      <div class="sidebar-score-val">${p.score}</div>
                      <div class="sidebar-score-lbl">PTS</div>
                    </div>
                  </div>
                `;
              })
              .join("")}
          </div>

          <div class="sidebar-progress-box">
            <div style="display:flex; justify-content:space-between; font-size:0.8rem; font-weight:700;">
              <span>Progreso</span>
              <span>${this.game.resolvedCount} / ${totalQuestions}</span>
            </div>
            <div class="progress-bar-track">
              <div class="progress-bar-fill" style="width: ${progressPct}%;"></div>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:0.65rem; font-size:0.78rem; color: var(--text-muted);">
              <span>En Reserva: <strong>${reserveCount}</strong></span>
              <span>Restantes: <strong>${this.game.mainQueue.length + reserveCount + (this.game.turnResolved ? 0 : 1)}</strong></span>
            </div>
          </div>

          <div style="margin-top: 1.15rem; padding-top: 1rem; border-top: 1px solid var(--border-subtle); display:flex; justify-content:space-between; gap: 0.5rem;">
            <button type="button" id="btn-reset-setup" class="btn-ios btn-ios-secondary btn-ios-sm" style="width:100%;">
              ↺ Reiniciar Partida
            </button>
          </div>
        </aside>

        <!-- CENTRO: TARJETA DEL ESCENARIO A RESOLVER -->
        <section class="game-main-stage">
          <div class="scenario-card" id="active-scenario-card">
            <div class="scenario-top-bar">
              <div style="display:flex; align-items:center; gap:0.65rem; flex-wrap:wrap;">
                <div class="active-turn-banner">
                  <span style="color: var(--primary); display:flex;">${activeAvatar.svg}</span>
                  <span style="font-size: 0.94rem; font-weight: 700; color: var(--primary-deeper);">
                    Turno de: ${activePlayer.name}
                  </span>
                </div>
                ${
                  this.game.isCurrentFromReserve
                    ? `<span class="reserve-badge">⚡ Pregunta de Reserva</span>`
                    : ""
                }
              </div>
              <span class="attempt-status-pill ${
                this.game.attemptsOnCurrent === 0 ? "attempt-first" : "attempt-second"
              }">
                ${
                  this.game.attemptsOnCurrent === 0
                    ? "1ª Oportunidad (+2 pts)"
                    : "2ª Oportunidad (+1 pto)"
                }
              </span>
            </div>

            <div class="scenario-context-box">${q.context}</div>
            <p class="scenario-question-prompt">${q.question}</p>

            <div class="options-list">
              ${q.options
                .map(opt => {
                  const isWrongDisabled = this.game.disabledLetters.has(opt.letter);
                  const isCorrectSelected =
                    this.game.turnResolved &&
                    (outcome?.type === "correct-first" || outcome?.type === "correct-second") &&
                    opt.letter === q.correctLetter;

                  let stateClass = "";
                  if (isWrongDisabled) stateClass = "wrong-disabled";
                  if (isCorrectSelected) stateClass = "correct-selected";

                  return `
                    <button
                      type="button"
                      class="option-btn js-option-btn ${stateClass}"
                      data-letter="${opt.letter}"
                      ${isWrongDisabled || this.game.turnResolved ? "disabled" : ""}
                    >
                      <span class="option-letter">${opt.letter}</span>
                      <span>${opt.text}</span>
                    </button>
                  `;
                })
                .join("")}
            </div>

            ${this.renderOutcomeBanner(outcome)}
          </div>
        </section>
      </div>
    `;

    // Eventos de opciones
    this.gameContainer.querySelectorAll(".js-option-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const letter = btn.getAttribute("data-letter");
        const result = this.game.submitAnswer(letter);
        this.renderPlayingStage();

        if (result && (result.type === "wrong-first" || result.type === "wrong-second-reserve")) {
          const cardEl = document.getElementById("active-scenario-card");
          if (cardEl) {
            cardEl.classList.remove("shake-error");
            void cardEl.offsetWidth;
            cardEl.classList.add("shake-error");
          }
        }
      });
    });

    // Botón siguiente turno
    const nextTurnBtn = document.getElementById("btn-next-turn");
    if (nextTurnBtn) {
      nextTurnBtn.addEventListener("click", () => {
        this.game.advanceTurn();
        this.renderGameView();
      });
    }

    // Botón reiniciar partida
    const resetBtn = document.getElementById("btn-reset-setup");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        this.game.resetSetup();
        this.renderGameView();
      });
    }
  },

  renderOutcomeBanner(outcome) {
    if (!outcome) return "";

    if (outcome.type === "wrong-first") {
      return `
        <div class="feedback-banner warning">
          <div class="feedback-header" style="color: #9A5B00;">
            <span>⚠️ Opción descartada • Segunda oportunidad activa</span>
            <span>Por +1 punto</span>
          </div>
          <p class="feedback-justification" style="margin-bottom:0;">
            ${outcome.message} Selecciona otra respuesta antes de pasar el turno.
          </p>
        </div>
      `;
    }

    if (outcome.type === "wrong-second-reserve") {
      return `
        <div class="feedback-banner danger">
          <div class="feedback-header" style="color: #B91C1C;">
            <span>🔄 Escenario enviado a la Reserva (0 puntos)</span>
          </div>
          <p class="feedback-justification">
            ${outcome.message}
          </p>
          <div style="text-align:right;">
            <button type="button" id="btn-next-turn" class="btn-ios btn-ios-primary btn-ios-sm">
              Siguiente Turno →
            </button>
          </div>
        </div>
      `;
    }

    // Acierto en primera o segunda oportunidad
    return `
      <div class="feedback-banner success">
        <div class="feedback-header" style="color: #005A53;">
          <span>✅ ${outcome.message}</span>
          <span>+${outcome.pointsAwarded} PTS</span>
        </div>
        <p class="feedback-justification">
          <strong>Justificación Normativa:</strong> ${outcome.justification}
        </p>
        <div style="text-align:right;">
          <button type="button" id="btn-next-turn" class="btn-ios btn-ios-primary btn-ios-sm">
            Siguiente Turno →
          </button>
        </div>
      </div>
    `;
  },

  renderLeaderboardStage() {
    const standings = this.game.getLeaderboard();

    this.gameContainer.innerHTML = `
      <div class="leaderboard-card">
        <div style="text-align:center;">
          <span class="ios-pill-badge">Dinámica Completada</span>
          <h2 style="font-size: 2rem; font-weight: 800; margin-top: 0.65rem;">Tabla de Posiciones Final</h2>
          <p class="text-muted" style="font-size: 0.95rem;">Revisión Anual de Políticas y Objetivos Organizacionales CVC de Occidente 2026 (Empates comparten lugar)</p>
        </div>

        <table class="leaderboard-table">
          <thead>
            <tr style="text-align:left; font-size:0.76rem; text-transform:uppercase; color:var(--text-muted); letter-spacing:0.05em;">
              <th style="padding: 0 1.15rem;">Lugar</th>
              <th style="padding: 0 1.15rem;">Participante</th>
              <th style="padding: 0 1.15rem;">Desglose de Aciertos</th>
              <th style="padding: 0 1.15rem; text-align:right;">Puntaje Total</th>
            </tr>
          </thead>
          <tbody>
            ${standings
              .map(p => {
                const av = this.getAvatarById(p.avatarId);
                const rankClass = `rank-badge-${Math.min(p.rank, 5)}`;
                return `
                  <tr class="leaderboard-row ${p.rank === 1 ? "rank-1" : ""}">
                    <td>
                      <span class="rank-badge ${rankClass}">
                        ${p.rank}° Lugar ${p.isTied ? "(Empate)" : ""}
                      </span>
                    </td>
                    <td>
                      <div style="display:flex; align-items:center; gap:0.75rem;">
                        <div class="sidebar-avatar-circle">${av.svg}</div>
                        <div>
                          <div style="font-weight:800; font-size:1.02rem;">${p.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span style="font-size:0.84rem; color:var(--text-secondary);">
                        <strong>${p.firstHits}</strong> a la 1ª (+2) • <strong>${p.secondHits}</strong> a la 2ª (+1)
                      </span>
                    </td>
                    <td>
                      <span style="font-size:1.45rem; font-weight:800; color:var(--primary-dark);">${p.score} pts</span>
                    </td>
                  </tr>
                `;
              })
              .join("")}
          </tbody>
        </table>

        <div style="display:flex; justify-content:center; gap:1rem; flex-wrap:wrap; margin-top: 1.75rem;">
          <button type="button" id="btn-play-again-same" class="btn-ios btn-ios-primary">
            ↻ Jugar de Nuevo (Mismos Jugadores)
          </button>
          <button type="button" id="btn-new-players" class="btn-ios btn-ios-secondary">
            👥 Cambiar Participantes
          </button>
        </div>
      </div>
    `;

    const againSameBtn = document.getElementById("btn-play-again-same");
    if (againSameBtn) {
      againSameBtn.addEventListener("click", () => {
        this.game.startGame();
        this.renderGameView();
      });
    }

    const newPlayersBtn = document.getElementById("btn-new-players");
    if (newPlayersBtn) {
      newPlayersBtn.addEventListener("click", () => {
        this.game.resetSetup();
        this.renderGameView();
      });
    }
  }
};
