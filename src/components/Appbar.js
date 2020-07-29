import React from "react";
import { useStyletron, withStyle } from "styletron-react";
import { StyledLink } from "baseui/link";
import { Layer } from "baseui/layer";
import { Unstable_AppNavBar as AppNavBar } from "baseui/app-nav-bar";
import { Button, SHAPE } from "baseui/button";
import { ChevronDown } from "baseui/icon";
import { Sun } from "@styled-icons/fa-regular/Sun";
import { Moon } from "@styled-icons/fa-regular/Moon";
import { ThemeContext, THEME } from "../utils/theme";

function renderItem(item) {
  return (
    <Button
      shape={SHAPE.round}
      overrides={{
        BaseButton: {
          style: ({ $theme }) => {
            return {
              color: $theme.colors.shineColor,
              backgroundColor: $theme.colors.shineBackground,
              ":hover": { backgroundColor: $theme.colors.shineBackground },
              ":visited": { backgroundColor: $theme.colors.shineBackground },
            };
          },
        },
      }}
    >
      {item.label === THEME.light ? (
        <Sun style={{ height: 20, width: 20 }} />
      ) : (
        <Moon style={{ height: 20, width: 20 }} />
      )}
    </Button>
  );
}

const MAIN_NAV = (theme, toggleTheme) => [
  {
    icon: ChevronDown,
    item: {
      label: theme === THEME.light ? THEME.light : THEME.dark,
    },
    mapItemToNode: renderItem,
    mapItemToString: renderItem,
    onClick: () => toggleTheme(),
  },
];

export default () => {
  const [css] = useStyletron();

  const containerStyles = css({
    boxSizing: "border-box",
    width: "100vw",
    position: "fixed",
    top: 0,
    left: 0,
  });

  const AppLink = withStyle(StyledLink, ({ $theme }) => {
    return {
      fontSize: $theme.typography.HeadingLarge.fontSize,
      fontWeight: 700,
      textDecoration: "none",
      color: $theme.colors.linkText,
      ":hover": { color: $theme.colors.linkText },
      ":visited": { color: $theme.colors.linkText },
    };
  });

  const appDisplayNameEl = (
    <AppLink $style={{ textDecoration: "none" }} href={"/"}>
      BaseWeb
    </AppLink>
  );

  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <Layer>
          <div className={containerStyles}>
            <AppNavBar
              appDisplayName={appDisplayNameEl}
              mainNav={MAIN_NAV(theme, toggleTheme)}
              onNavItemSelect={() => toggleTheme()}
            />
          </div>
        </Layer>
      )}
    </ThemeContext.Consumer>
  );
};
