import { FC } from "react";

interface ButtonProps {
  text: string;
  classes?: string;
}

export const Button: FC<ButtonProps> = ({ text, classes }) => {
  return (
    <button
      className={`${classes} text-white`}
    >
      {text}
    </button>
  );
};
