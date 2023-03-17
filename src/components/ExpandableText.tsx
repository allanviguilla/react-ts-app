import { useState } from "react";

interface Props {
  children: string;
  maxChars: number;
}

export default function ExpandableText({ children, maxChars }: Props) {
  const [expanded, setExpanded] = useState(false);

  const preview = children.substring(0, maxChars);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <p>{expanded ? children : preview + "..."}</p>
      <button onClick={() => handleClick()}>More</button>
    </>
  );
}
