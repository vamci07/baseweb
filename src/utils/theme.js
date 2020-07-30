import React, { createContext, useContext, useState, useMemo } from "react";
import { useMedia } from "react-recipes";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import {
  createLightTheme,
  createDarkTheme,
  styled,
  BaseProvider,
} from "baseui";

const engine = new Styletron();

const primitives = {
  primaryFontFamily: "Uber Move",
};
const lightThemeOverrides = {
  colors: {
    accent: "#264653",
    shineColor: "#fdcb6e",
    shineBackground: "#264653",
  },
};

const darkThemeOverrides = {
  colors: {
    accent: "#264653",
    shineColor: "#f3c4fb",
    shineBackground: "#264653",
  },
};

const LightTheme = createLightTheme(primitives, lightThemeOverrides);
const DarkTheme = createDarkTheme(primitives, darkThemeOverrides);

export const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export const THEME = {
  light: "light",
  dark: "dark",
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(THEME.light);

  const prefersDarkMode = useMedia(
    ["(prefers-color-scheme: dark)"],
    [true],
    false
  );

  const Wrapper = styled("div", ({ $theme }) => {
    return {
      background: $theme.colors.background,
      height: "100vh",
      width: "100vw",
    };
  });

  const toggleTheme = () => {
    setTheme(theme === THEME.light ? THEME.dark : THEME.light);
  };

  useMemo(() => {
    setTheme(prefersDarkMode ? THEME.dark : THEME.light);
  }, [prefersDarkMode]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyletronProvider value={engine}>
        <BaseProvider theme={theme === THEME.light ? LightTheme : DarkTheme}>
          <Wrapper>{children}</Wrapper>
        </BaseProvider>
      </StyletronProvider>
    </ThemeContext.Provider>
  );
};
