import { julgeBodyBold } from "../types/text";
import styled from "@emotion/styled";

interface ButtonProps {
  name?: string;
  id?: string;
  handleClickButton: (pathname?: string) => void;
}

export default function UiButton({ name, id, handleClickButton }: ButtonProps) {
  const Button = styled.button`
    height: 20px;
    background-color: transparent;
    line-height: 20px;
    ${julgeBodyBold};
  `;

  const handleClickMovePage = () => {
    handleClickButton(id as string);
  };

  return (
    <Button type="button" onClick={handleClickMovePage}>
      {name}
    </Button>
  );
}
