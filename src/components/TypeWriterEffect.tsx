import React, { useState, useEffect, useRef } from "react";
import { CSSProperties } from "react";

interface ITypingSpeedMap {
  [key: string]: number;
}

type TBlinkDuration = `${number}${"s" | "ms"}`;
type TTypingSpeed = "fastest" | "fast" | "normal" | "slow" | "slowest";

interface ITypeWriterEffectProps {
  blinkDuration?: TBlinkDuration;
  cursorColor?: string;
  fontFamily?: string;
  fontSize?: string;
  highlightColor?: string;
  text: string;
  textColor?: string;
  textWrapperElementType?: string;
  typingSpeed?: TTypingSpeed;
}

const TypingEffect: React.FC<ITypeWriterEffectProps> = ({
  blinkDuration = "1s",
  cursorColor = "black",
  fontFamily = "Roboto, Arial, sans-serif",
  fontSize = "16px",
  highlightColor = "transparent",
  text,
  textColor = "black",
  textWrapperElementType = "code",
  typingSpeed = "normal" as TTypingSpeed,
}) => {
  const [typeLine, setTypeLine] = useState("");
  const [isAnimationInProgress, setIsAnimationInProgress] = useState(false);
  const [animationRepeatCount, setAnimationRepeatCount] = useState<number | string>(0);

  const typingSpeedMap: ITypingSpeedMap = {
    fastest: 40,
    fast: 25,
    normal: 10,
    slow: 5,
    slowest: 3,
  };

  const computedStyle: CSSProperties = {
    backgroundColor: highlightColor,
    color: textColor,
    fontFamily,
    fontSize,
  };

  const typingEffectTimeOut = useRef(() => {
    const speed: TTypingSpeed = typingSpeed ?? "normal";
    return 1000 / typingSpeedMap[speed];
  });

  useEffect(() => {
    const typeEffect = () => {
      const isTyping = typeLine.length < text.length;

      if (!isTyping) {
        return;
      }

      setTypeLine(
        (prevTypeLine) => prevTypeLine + text.charAt(prevTypeLine.length)
      );
      setTimeout(typeEffect, typingEffectTimeOut.current());
    };

    typeEffect();
  }, [text]);

  useEffect(() => {
    setIsAnimationInProgress(typeLine.length < text.length);
  }, [typeLine.length, text.length]);

  useEffect(() => {
    setAnimationRepeatCount(isAnimationInProgress ? "infinite" : 0);
  }, [isAnimationInProgress]);

  const Component = textWrapperElementType as keyof JSX.IntrinsicElements;

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
            0%,
            20% {
              border-color: transparent;
            }
         
            50%,
            100% {
              border-color: ${cursorColor};
            }
          }
        `}
      </style>
    </div>
  );
};

export default TypingEffect;