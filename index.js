const applyTheme = () => {
  const ogBG = window.getComputedStyle(document.body).backgroundColor;

  const isVeryLight = (color) => {
    const match = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
    if (!match) return false;
    const [r, g, b] = match.slice(1).map(Number);
    return r > 245 && g > 245 && b > 245;
  };

  if (isVeryLight(ogBG)) {
    const bgStyle = document.createElement("style");
    bgStyle.textContent = `
      :root {
        --border: #e9e9e9;
      }

      html, body, * {
        background-color: var(--white) !important;
      }
    `;
    document.head.appendChild(bgStyle);

    const textStyle = document.createElement("style");
    textStyle.textContent = `
      *:not(pre):not(code):not(pre *):not(code *):not(svg) {
        color: var(--black) !important;
      }

      a, a:link {
        color: var(--navy) !important;
      }

      a:hover {
        color: var(--navy) !important;
      }

      a:visited, a:visited:link {
        color: var(--purple) !important;
      }

      a:visited:hover {
        color: var(--purple) !important;
      }

      svg, svg * {
        fill: var(--black) !important;
        stroke: var(--black) !important;
      }

      [class*="!bg-"] {
        background-color: var(--white) !important;
      }
    `;
    document.head.appendChild(textStyle);
  }
};

applyTheme();

const applyFont = () => {
  const style = document.createElement("style");
  style.textContent = `
    html, body, *, *::before, *::after {
      font-family: Tahoma, sans-serif !important;
    }
  `;
  document.head.appendChild(style);
};

applyFont();
