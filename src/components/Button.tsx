import styles from "./Button.module.css";

interface ButtonProps {
  children: string;
  color?: "primary" | "secondary" | "success";
  onClick: () => void;
}

export default function Button({
  children,
  color = "primary",
  onClick,
}: ButtonProps) {
  return (
    // <button className={`btn btn-${color}`} onClick={onClick}>
    <button
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
