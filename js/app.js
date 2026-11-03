/* ==========================================================================
   CVC de Occidente 2026 - Enrutador SPA y Punto de Entrada Principal (main)
   ========================================================================== */

class CVCRouter {
  constructor() {
    this.routes = ["home", "exposicion", "dinamica"];
    this.currentRoute = "home";
  }

  init() {
    // Escuchar clics en elementos con [data-route]
    document.querySelectorAll("[data-route]").forEach(el => {
      el.addEventListener("click", e => {
        e.preventDefault();
        const target = el.getAttribute("data-route");
        this.navigate(target);
      });
    });

    // Soporte para hash routing (#home, #exposicion, #dinamica)
    window.addEventListener("hashchange", () => {
      const hashRoute = window.location.hash.replace("#", "");
      if (this.routes.includes(hashRoute)) {
        this.activateView(hashRoute, false);
      }
    });

    const initialHash = window.location.hash.replace("#", "");
    if (this.routes.includes(initialHash)) {
      this.activateView(initialHash, false);
    } else {
      this.activateView("home", false);
    }
  }

  navigate(route) {
    if (!this.routes.includes(route)) return;
    try {
      window.location.hash = route;
    } catch (_) {}
    this.activateView(route, true);
  }

  activateView(route, scrollTop = true) {
    this.currentRoute = route;

    if (window.CVC_UI && typeof window.CVC_UI.closeExpandedCard === "function") {
      window.CVC_UI.closeExpandedCard();
    }

    // Mostrar vista activa
    document.querySelectorAll(".spa-view").forEach(view => {
      view.classList.toggle("active", view.id === `view-${route}`);
    });

    // Actualizar estado activo del menú flotante y navegación superior
    document.querySelectorAll("[data-route]").forEach(btn => {
      if (btn.classList.contains("dock-btn") || btn.classList.contains("nav-pill-btn")) {
        btn.classList.toggle("active", btn.getAttribute("data-route") === route);
      }
    });

    if (scrollTop) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
}

/* Función principal de arranque de la aplicación */
function main() {
  const gameManager = new window.CVCGameManager(
    window.CVC_DATA.scenarios,
    window.CVC_DATA.avatars
  );
  window.CVC_UI.init(gameManager);

  const router = new CVCRouter();
  router.init();
  window.CVC_ROUTER = router;
}

document.addEventListener("DOMContentLoaded", main);
