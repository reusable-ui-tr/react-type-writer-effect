import React, { useEffect, useState, CSSProperties, useRef } from "react";

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
  textWrapperElementType?: keyof JSX.IntrinsicElements;
  typingSpeed?: TTypingSpeed;
}

const typingSpeedMap: Record<TTypingSpeed, number> = {
  fastest: 40,
  fast: 25,
  normal: 10,
  slow: 5,
  slowest: 3,
};

const TypeWriterEffect: React.FC<ITypeWriterEffectProps> = ({
  blinkDuration = "1s",
  cursorColor = "black",
  fontFamily = "Roboto, Arial, sans-serif",
  fontSize = "16px",
  highlightColor = "transparent",
  text,
  textColor = "black",
  textWrapperElementType = "code",
  typingSpeed = "normal",
}) => {
  const [typeLine, setTypeLine] = useState<string>("");
  const [isAnimationInProgress, setIsAnimationInProgress] = useState<boolean>(false);
  const typingTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const typeEffect = () => {
      if (typeLine.length < text.length) {
        setTypeLine((prev) => prev + text.charAt(prev.length));
        typingTimeoutRef.current = window.setTimeout(
          typeEffect,
          1000 / typingSpeedMap[typingSpeed]
        );
      } else {
        setIsAnimationInProgress(false);
      }
    };

    setIsAnimationInProgress(true);
    typeEffect();

    return () => {
      if (typingTimeoutRef.current !== null) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, [text, typingSpeed]);

  const textWrapperStyle: CSSProperties = {
    backgroundColor: highlightColor,
    color: textColor,
    fontFamily,
    fontSize,
    borderRight: `2px solid ${isAnimationInProgress && typeLine.length < text.length
        ? cursorColor
        : "transparent"
      }`,
    animation: isAnimationInProgress ? `blink ${blinkDuration} step-start infinite` : "none",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        margin: "0 auto",
        width: "fit-content",
        height: "fit-content",
      }}
    >
      {React.createElement(
        textWrapperElementType,
        { style: textWrapperStyle },
        typeLine
      )}
    </div>
  );
};

export default TypeWriterEffect;