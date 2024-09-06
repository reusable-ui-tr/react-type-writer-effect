import React, { useState, useEffect, useRef, CSSProperties } from "react";

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

  const typingEffectTimeout = useRef<number | null>(null);

  useEffect(() => {
    const speed = typingSpeedMap[typingSpeed];

    const typeEffect = () => {
      if (typeLine.length < text.length) {
        setTypeLine(
          (prevTypeLine) => prevTypeLine + text.charAt(prevTypeLine.length)
        );
        typingEffectTimeout.current = window.setTimeout(
          typeEffect,
          1000 / speed
        );
      }
    };

    typeEffect();

    return () => {
      if (typingEffectTimeout.current) {
        clearTimeout(typingEffectTimeout.current);
      }
    };
  }, [text, typingSpeed, typingSpeedMap]);

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