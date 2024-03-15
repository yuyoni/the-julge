import { useState } from "react";
import styled from "@emotion/styled";
import TypeButton from "./TypeButton";

export default function UserTypeSelect() {
  const [checked, setChecked] = useState<boolean>(true);

  const handleClick = () => setChecked(!checked);

  return (
    <Wrapper>
      회원 유형
      <ButtonContainer>
        <TypeButton isChecked={checked} onClick={handleClick} text="알바님" />
        <TypeButton isChecked={!checked} onClick={handleClick} text="사장님" />
      </ButtonContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  button {
    width: 167px;
  }
`;
