import React, { CSSProperties, useEffect, useRef, useState } from "react";

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
  showCursorOnFinish?: boolean;
  loop?: boolean;
}

const typingSpeedMap: ITypingSpeedMap = {
  fastest: 40,
  fast: 25,
  normal: 10,
  slow: 5,
  slowest: 3,
};

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
  showCursorOnFinish = false,
  loop = false,
}) => {
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
    } else if (loop) {
      typingEffectTimeout.current = window.setTimeout(() => {
        setTypeLine("");
      }, 1500);
    }

    return () => {
      if (typingEffectTimeout.current) {
        clearTimeout(typingEffectTimeout.current);
      }
    };
  }, [typeLine, text, typingSpeed, loop]);

  useEffect(() => {
    setIsAnimationInProgress(typeLine.length < text.length);
  }, [typeLine.length, text.length]);

  useEffect(() => {
    const repeatCount =
      loop || showCursorOnFinish || isAnimationInProgress ? "infinite" : 0;
    setAnimationRepeatCount(repeatCount);
  }, [showCursorOnFinish, isAnimationInProgress, loop]);

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

export default TypingEffect;
