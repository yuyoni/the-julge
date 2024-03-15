import { UserType } from "../../types/types";
import styled from "@emotion/styled";
import TypeButton from "./TypeButton";

type UserTypeSelectProps = {
  type: UserType;
  setType: (type: UserType) => void;
};

export default function UserTypeSelect({ type, setType }: UserTypeSelectProps) {
  return (
    <Wrapper>
      회원 유형
      <ButtonContainer>
        <TypeButton
          isChecked={type === UserType.PART_TIME}
          onClick={() => setType(UserType.PART_TIME)}
          text="알바님"
        />
        <TypeButton
          isChecked={type === UserType.OWNER}
          onClick={() => setType(UserType.OWNER)}
          text="사장님"
        />
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
