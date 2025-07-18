const applyFont = () => {
  const style = document.createElement("style");
  style.textContent = `
    html, body, *, *::before, *::after {
      font-family: Tahoma, sans-serif !important;
    }
  `;
  document.head.appendChild(style);

  const forceMinFont = (root = document.body) => {
    const all = root.querySelectorAll("*");
    all.forEach(el => {
      const size = parseFloat(getComputedStyle(el).fontSize);
      if (size && size < 16) {
        el.style.setProperty("font-size", "16px", "important");
      }
    });
  };

  forceMinFont();

  const observer = new MutationObserver(() => {
    forceMinFont();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
};

applyFont();
