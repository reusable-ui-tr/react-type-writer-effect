import { TimeWithUnit } from "../../helpers/types";

export namespace TypeWriterEffectNs {
  export type TypingSpeed = "fastest" | "fast" | "normal" | "slow" | "slowest";

  export type Props = {
    blinkDuration?: TimeWithUnit;
    cursorColor?: string;
    fontFamily?: string;
    fontSize?: string;
    highlightColor?: string;
    loopInterval?: TimeWithUnit;
    showCursorOnFinish?: boolean;
    text: string;
    textColor?: string;
    textWrapper?: keyof JSX.IntrinsicElements;
    typingSpeed?: TypingSpeed;
  };
}
