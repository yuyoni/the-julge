import closeIcon from "@/public/images/close_icon.svg";
import { body1Regular, h1 } from "@/styles/fontsStyle";
import styled from "@emotion/styled";
import Button from "../Button/Button";
import ImageButton from "../Button/ImageButton";
import FormContainer from "./FormContainer";
import { PostFormProps } from "./types/types";

export default function PostForm({
  isPostFormVisible,
  handlePostFormClose,
}: PostFormProps) {
  return (
    isPostFormVisible && (
      <Wrapper>
        <Header>
          <Title>공고 등록</Title>
          <ImageButton
            src={closeIcon}
            alt="close_icon"
            handleClick={handlePostFormClose}
          />
        </Header>
        <Content>
          <FormContainer
            label="시급*"
            gridArea="wage"
            inputProps={{ placeholder: "15,000", unit: "원" }}
          />
          <FormContainer
            label="시작 일시*"
            gridArea="start_at"
            inputProps={{ type: "date", placeholder: "2023-07-01 15:00" }}
          />
          <FormContainer
            label="업무 시간*"
            gridArea="work_time"
            inputProps={{ placeholder: "3", unit: "시간" }}
          />
          <FormContainer label="공고 설명" gridArea="description" />
        </Content>
        <Button text="등록하기" color="colored" width={312} />
      </Wrapper>
    )
  );
}

const Wrapper = styled.div`
  background: var(--The-julge-gray-05, #fafafa);
  width: 100%;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  padding: 60px 238px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 32px;
  z-index: 999;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Title = styled.span`
  ${h1}
`;

const Content = styled.div`
  display: grid;
  width: 100%;
  row-gap: 20px;
  column-gap: 24px;
  grid-template-areas: "wage start_at work_time" "wage_input start_at_input work_time_input" "description description description" "description_input description_input description_input";
  ${body1Regular}
`;
