const applyFont = () => {
  const style = document.createElement("style");
  style.textContent = `
    html, body, *, *::before, *::after {
      font-family: Tahoma, sans-serif !important;
      font-size: max(16px, 1em) !important;
    }
  `;
  document.head.appendChild(style);
};

applyFont();
