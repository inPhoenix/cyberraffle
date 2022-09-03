// @ts-nocheck

import {
  ArwesThemeProvider,
  Button,
  Card,
  StylesBaseline,
  Text,
} from "@arwes/core";
import { BleepsProvider } from "@arwes/sounds";
import { AnimatorGeneralProvider } from "@arwes/animation";
import React from "react";

const FONT_FAMILY_ROOT = '"Titillium Web", sans-serif';
const IMAGE_URL = "/assets/images/wallpaper.jpg";
const SOUND_OBJECT_URL = "/assets/sounds/object.mp3";
const SOUND_ASSEMBLE_URL = "/assets/sounds/assemble.mp3";
const SOUND_TYPE_URL = "/assets/sounds/type.mp3";
const SOUND_CLICK_URL = "/assets/sounds/click.mp3";

const globalStyles = { body: { fontFamily: FONT_FAMILY_ROOT } };
const animatorGeneral = { duration: { enter: 200, exit: 200, stagger: 30 } };
const audioSettings = { common: { volume: 0.25 } };
const playersSettings = {
  object: { src: [SOUND_OBJECT_URL] },
  assemble: { src: [SOUND_ASSEMBLE_URL], loop: true },
  type: { src: [SOUND_TYPE_URL], loop: true },
  click: { src: [SOUND_CLICK_URL] },
};
const bleepsSettings = {
  object: { player: "object" },
  assemble: { player: "assemble" },
  type: { player: "type" },
  click: { player: "click" },
};

// @ts-ignore
const Cyber = () => {
  const [activate, setActivate] = React.useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(() => setActivate(!activate), 4000);
    return () => clearTimeout(timeout);
  }, [activate]);

  return (
    <ArwesThemeProvider>
      <StylesBaseline styles={globalStyles} />
      <BleepsProvider
        audioSettings={audioSettings}
        playersSettings={playersSettings}
        bleepsSettings={bleepsSettings}
      >
        <AnimatorGeneralProvider animator={animatorGeneral}>
          <Card
            animator={{ activate }}
            image={{
              src: IMAGE_URL,
              alt: "A nebula",
            }}
            title="Pizza"
            options={
              <Button palette="secondary">
                <Text>Learn More</Text>
              </Button>
            }
            landscape
            hover
            style={{ maxWidth: 800 }}
          >
            <Text>Hoje eh dia de pizza, a fome ta batendo.</Text>
          </Card>
        </AnimatorGeneralProvider>
      </BleepsProvider>
    </ArwesThemeProvider>
  );
};

export default Cyber;
