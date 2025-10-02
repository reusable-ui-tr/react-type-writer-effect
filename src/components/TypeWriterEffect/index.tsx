import React from "react";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { typingSpeedMap } from "../../helpers/constants";
import { getTimeMs } from "../../utils/time.utils";
import { TypeWriterEffectNs } from "./index.type";

const TypeWriterEffect = ({
  blinkDuration = "1s",
  cursorColor = "black",
  fontFamily = "Roboto, Arial, sans-serif",
  fontSize = "16px",
  highlightColor = "transparent",
  // TODO: Change loopInterval variable name and think of effect looping options.
  loopInterval,
  showCursorOnFinish = false,
  text,
  textColor = "black",
  textWrapper = "code",
  typingSpeed = "normal",
}: TypeWriterEffectNs.Props) => {
  const [typeLine, setTypeLine] = useState("");
  const [isAnimationInProgress, setIsAnimationInProgress] = useState(false);
  const [animationRepeatCount, setAnimationRepeatCount] = useState<
    number | string
  >(0);

  const computedStyle: CSSProperties = {
    backgroundColor: highlightColor,
    color: textColor,
    fontFamily,
    fontSize,
  };

  const typingEffectTimeout = useRef<number | null>(null);

  useEffect(() => {
    const speed = typingSpeedMap[typingSpeed];

    if (typeLine.length < text.length) {
      typingEffectTimeout.current = window.setTimeout(() => {
        setTypeLine((prev) => prev + text.charAt(prev.length));
      }, 1000 / speed);
    } else if (loopInterval) {
      const intervalMs = getTimeMs(loopInterval);
      typingEffectTimeout.current = window.setTimeout(() => {
        setTypeLine("");
      }, intervalMs);
    }

    return () => {
      if (typingEffectTimeout.current) {
        clearTimeout(typingEffectTimeout.current);
      }
    };
  }, [typeLine, text, typingSpeed, loopInterval]);

  useEffect(() => {
    setIsAnimationInProgress(typeLine.length < text.length);
  }, [typeLine.length, text.length]);

  useEffect(() => {
    const repeatCount =
      showCursorOnFinish || isAnimationInProgress ? "infinite" : 0;
    setAnimationRepeatCount(repeatCount);
  }, [showCursorOnFinish, isAnimationInProgress]);

  // TODO: It seems like textWrapper is not working properly.
  const Component = textWrapper;

  return (
    <div className="typingEffect">
      <Component className="typingEffect__line" style={computedStyle}>
        {typeLine}
      </Component>
      <style>
        {`
          .typingEffect {
            display: flex;
            flex-direction: column;
            padding: 20px;
            margin: 0 auto;
            width: fit-content;
            height: fit-content;
          }

          .typingEffect__line {
            animation: blink ${blinkDuration} ${animationRepeatCount};
            padding: 0;
            border-right: 2px solid transparent;
          }

          @keyframes blink {
            0%, 20% {
              border-color: transparent;
            }
            50%, 100% {
              border-color: ${cursorColor};
            }
          }
        `}
      </style>
    </div>
  );
};

export default TypeWriterEffect;
export type { TypeWriterEffectNs };
