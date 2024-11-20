import defaultTheme from "tailwindcss/defaultTheme";

import colors from "tailwindcss/colors";
// import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    // rest of the code
    extend: {
      animation: {
        aurora: "aurora 60s linear infinite",
        scroll:
        "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};



import { PluginAPI } from "tailwindcss/types/config";

/**
 * Flattens a nested color object into a single-level object with keys in the format "prefix-color-shade".
 * @param colors - The nested color object.
 * @param prefix - The prefix for color keys (used for recursive calls).
 * @returns A flattened object with keys representing color names and shades.
 */
function flattenColors(
  colors: Record<string, any>, // The input object can contain strings or nested objects.
  prefix = ""
): Record<string, string> {
  const result: Record<string, string> = {};
  for (const [key, value] of Object.entries(colors)) {
    if (typeof value === "object" && value !== null) {
      Object.assign(result, flattenColors(value, `${prefix}${key}-`));
    } else {
      result[`${prefix}${key}`] = value as string;
    }
  }
  return result;
}

/**
 * TailwindCSS plugin to add CSS variables for colors in the theme to the `:root` selector.
 * @param addBase - Utility to add base CSS styles.
 * @param theme - Function to access the Tailwind theme.
 */
function addVariablesForColors({ addBase, theme }: PluginAPI) {
  const allColors = flattenColors(theme("colors") as Record<string, any>);
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, value]) => [`--${key}`, value])
  );

  addBase({
    ":root": newVars,
  });
}

export { flattenColors, addVariablesForColors };



// function addVariablesForColors({ addBase, theme }: any) {
//   let allColors = flattenColorPalette(theme("colors"));
//   let newVars = Object.fromEntries(
//     Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
//   );

//   addBase({
//     ":root": newVars,
//   });
// }
