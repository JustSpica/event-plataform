import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input(props: InputProps) {
  return (
    <input
      className="bg-gray-900 rounded px-5 h-14"
      {...props}
    />
  )
}