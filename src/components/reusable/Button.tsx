interface IProps {
  title: string;
  type?: "submit" | "reset" | "button";
}

function Button({ title, type }: IProps) {
  return <button type={type ?? "button"}>{title}</button>;
}

export default Button;
