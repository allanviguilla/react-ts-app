import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface LikeProps {
  size?: number;
  color?: "#ff6b81";
  onClick: () => void;
}

export default function Like({
  size = 50,
  color = "#ff6b81",
  onClick,
}: LikeProps) {
  const [liked, setLiked] = useState(false);

  const toggle = () => {
    setLiked(!liked);
    onClick();
  };

  if (liked) return <AiFillHeart color={color} size={size} onClick={toggle} />;
  return <AiOutlineHeart size={size} onClick={toggle} />;
}
