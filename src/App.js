import React, { Fragment } from "react";
import { withStyle } from "styletron-react";
import { StyledBaseButton } from "baseui/button";
import "./App.scss";
import Appbar from "./components/Appbar";

const Button = withStyle(StyledBaseButton, ({ $theme }) => {
  return {
    background: $theme.colors.accent,
    color: $theme.colors.white,
  };
});

function App() {
  return (
    <Fragment>
      <Appbar />
      <header className="App-header">
        <Button>Hello</Button>
      </header>
    </Fragment>
  );
}

export default App;
