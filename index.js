const applyTheme = () => {
  const applyGeneralTheme = () => {
    const style = document.createElement("style");

    const elements = `
      html body,
      html body input,
      html body textarea,
      html body select,

      html body > *:not(a):not(button):not(input[type="button"]):not(input[type="submit"]):not(input[type="reset"]):not(select),

      html body > * > *:not(a):not(button):not(input[type="button"]):not(input[type="submit"]):not(input[type="reset"]):not(select),

      html body > div > *:not(a):not(button):not(input[type="button"]):not(input[type="submit"]):not(input[type="reset"]):not(select),

      html body *:not(a):not(button):not(input[type="button"]):not(input[type="submit"]):not(input[type="reset"]):not(select)
    `;

    const css = `{
      background-color: white !important;
      color: black !important;
    }`;

    style.textContent = elements + css;
    document.head.appendChild(style);
  };

  const applyLinkTheme = () => {
    const style = document.createElement("style");

    const links = `
      a, a * {
        color: #1A0EAB !important;
        text-decoration: none !important;
      }

      a:hover, a:hover * {
        color: #1A0EAB !important;
        text-decoration: underline !important;
      }

      a:visited, a:visited * {
        color: #9159C0 !important;
      }

      a:visited:hover, a:visited:hover * {
        color: #9159C0 !important;
        text-decoration: underline !important;
      }
    `;

    style.textContent = links;
    document.head.appendChild(style);
  };

  applyGeneralTheme();
  applyLinkTheme();
};

const applyFont = () => {
  const style = document.createElement("style");

  const elements = `
    html body, 
    html body > *, 
    html body > * > *, 
    html body > * > * > *,
    html body > * > * > * > *,
    html body > * > * > * > * > *
  `;

  const css = `{
    font-family: Tahoma, sans-serif !important;
  }`;

  style.textContent = elements + css;

  document.head.appendChild(style);
};

applyTheme();
applyFont();
