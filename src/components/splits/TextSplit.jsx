import React from "react";

const TextSplit = ({ text, className }) => {
  const textCharacters = text.split("");

  return (
    <>
      {textCharacters.map((char, index) => (
        <span key={index} className={`${className} inline-block`}>
          {char === " " ? <span>&nbsp;</span> : char}
        </span>
      ))}
    </>
  );
};

export default TextSplit;
