import React from "react";
import { withStyle } from "styletron-react";
import { StyledBaseButton } from "baseui/button";
import {
  H1,
  H2,
  Label1,
  Label2,
  Label3,
  Label4,
  Paragraph1,
  Paragraph2,
  Paragraph3,
  Paragraph4,
  Caption1,
  Caption2,
} from "baseui/typography";
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
    <div className="content">
      <Appbar />
      <main role="main" id="main">
        <section id="skateboards-intro">
          <H1>Skateboards</H1>
          <Paragraph1>
            The skateboard is the way cool kids get around!
          </Paragraph1>
        </section>

        <section id="skateboards-history">
          <H2>History of Skateboards</H2>
          <Paragraph2>
            Skateboarding was born in the late 1940 or early 1950s
          </Paragraph2>

          <aside id="timeline">
            <Label1>1940s: Lorem</Label1>
            <Label2>1950s: Lorem</Label2>
            <Label3>1960s: Lorem</Label3>
            <Label4>1970s: Lorem</Label4>
          </aside>
        </section>

        <article class="blog-posts">
          <header>
            <H2>Why I Love Skateboarding</H2>
            <p>By Vamshi Maddur</p>
          </header>
          <Paragraph3>
            Skateboarding is the best! I love doing gnarly tricks{" "}
            <span role="img" aria-labelledby="yoo">
              🤘
            </span>
          </Paragraph3>
          <Paragraph4>
            "Skateboarding is my life. Everything else is secondary."
          </Paragraph4>
        </article>

        <Caption1>
          "Skateboarding is my life. Everything else is secondary."
        </Caption1>
        <Caption2>- Dude Ripper</Caption2>

        <div className="actions">
          <Button>Hello</Button>
        </div>
      </main>
    </div>
  );
}

export default App;
