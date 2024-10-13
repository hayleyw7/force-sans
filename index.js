const applyTheme = () => {
  const ogBG = window.getComputedStyle(document.body).backgroundColor;

  if (
    ogBG === "rgb(255, 255, 255)" ||
    ogBG === "white" ||
    ogBG === "#ffffff"
  ) {

    const bgStyle = document.createElement("style");
    bgStyle.textContent = `
      :root {
        --border: ##e9e9e9;
      }

      html body,
      * {
        background-color: white !important;
      }

      header,
      .header,
      nav,
      .nav {
        border-bottom: 2px solid var(--border) !important;
      }

      footer,
      .footer {
        border-top: 2px solid var(--border) !important;
      }
    `;

    document.head.appendChild(bgStyle);

    const textStyle = document.createElement("style");
    textStyle.textContent = `
      :root {
        --purple: #9159C0;
        --navy: #1A0EAB;
      }

      /* Apply text color to all elements except pre, code, svg */
      *:not(pre):not(code):not(pre *):not(code *):not(svg) {
        color: black !important;
      }

      a {
        color: var(--navy) !important;
      }

      a:hover {
        color: var(--navy) !important;
      }

      a:visited {
        color: var(--purple) !important;
      }

      a:visited:hover {
        color: var(--purple) !important;
      }
    `;
    document.head.appendChild(textStyle);
  }
};

// Apply the theme
applyTheme();

const applyFont = () => {
  const style = document.createElement("style");

  const css = `
    html body {
      font-family: Tahoma, sans-serif !important;
    }
  `;

  style.textContent = css;
  document.head.appendChild(style);
};

applyFont();
