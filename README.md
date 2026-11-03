# CVC de Occidente - Políticas y Objetivos Organizacionales 2026

Aplicación Web Single-Page Application (SPA) en Vanilla JS y CSS3 moderno (estilo iOS / Glassmorphism) para la revisión anual de Políticas y Objetivos Organizacionales 2026 de **Centro de Validaciones y Calibraciones de Occidente, S.A. de C.V.**
Desarrollado en CVC de Occidente por Elías Sánchez.

## Estructura de Archivos (Live Server / GitHub Pages)

```text
├── index.html       # Archivo raíz para abrir con Live Server en VS Code
├── css/
│   ├── main.css
│   ├── layout.css
│   └── components.css
└── js/
    ├── app.js       # Enrutador SPA y función principal main()
    ├── data.js      # Contenido oficial y escenarios técnicos
    ├── ui.js        # Manipulación del DOM y vistas
    └── game.js      # Lógica de turnos, reserva, desempates y Web Audio API
```

## Cómo ejecutar en Visual Studio Code (Live Server)

1. Descomprime el archivo `.zip` y abre la carpeta raíz en **VS Code**.
2. La función de arranque `main()` se encuentra al final de **`js/app.js`** (`document.addEventListener("DOMContentLoaded", main)`), y es cargada automáticamente por **`index.html`**.
3. Haz clic derecho sobre **`index.html`** en el explorador de archivos de VS Code y selecciona **"Open with Live Server"** (o haz clic en el botón **Go Live** en la esquina inferior derecha de VS Code).
