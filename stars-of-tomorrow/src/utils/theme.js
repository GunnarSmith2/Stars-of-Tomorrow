// color design tokens export
export const colorTokens = {
  grey: {
    0: "#FFFFFF", // White
    10: "#F6F6F6", // Snow White
    50: "#F0F0F0", // Flash White
    100: "#E0E0E0", // Chinese White
    200: "#C2C2C2", // Silver Sand Grey
    300: "#A3A3A3", // Quick Silver
    400: "#858585", // Old Silver
    500: "#666666", // Granite Grey
    600: "#4D4D4D", // Dark Liver Grey
    700: "#333333", // Dark Charcoal
    800: "#1A1A1A", // Eerie Black
    900: "#0A0A0A", // Vampire Black
    1000: "#000000", // Black
  },
  primary: {
    50: "#E6FBFF", //Light White Blue
    100: "#CCF7FE", // Mint Blue
    200: "#99EEFD", // Light Blue
    300: "#66E6FC", // Blue
    400: "#33DDFB", // Ocean Blue
    500: "#f2cd00", // Stars Yellow
    600: "#00A0BC", // Dark Blue
    700: "#006B7D", // Deep Blue
    800: "#00353F", // Navy
    900: "#001519", // Black Blue
  },
};

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              dark: colorTokens.primary[200],
              main: colorTokens.primary[500],
              light: colorTokens.primary[800],
            },
            neutral: {
              dark: colorTokens.grey[100],
              main: colorTokens.grey[200],
              mediumMain: colorTokens.grey[300],
              medium: colorTokens.grey[400],
              light: colorTokens.grey[700],
            },
            background: {
              default: colorTokens.grey[900],
              alt: colorTokens.grey[800],
            },
          }
        : {
            // palette values for light mode
            primary: {
              dark: colorTokens.primary[700],
              main: colorTokens.primary[500],
              light: colorTokens.grey[1000],
            },
            neutral: {
              dark: colorTokens.grey[700],
              main: colorTokens.grey[500],
              mediumMain: colorTokens.grey[400],
              medium: colorTokens.grey[300],
              light: colorTokens.grey[50],
            },
            background: {
              default: colorTokens.grey[900],
              alt: colorTokens.grey[0],
              button: colorTokens.primary[500],
            },
          }),
    },
    typography: {
      fontFamily: ["Rubik", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
