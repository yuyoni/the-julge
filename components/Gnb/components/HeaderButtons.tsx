import styled from "@emotion/styled";
import UiButton from "./UiButton";
import NotiButton from "./NotiButton";
import { useRouter } from "next/router";
import deleteCookie from "../hook/useLogout";
import { julgeBodyBold } from "../styles/fonstStyle";

interface HeaderButtonsProps {
  userType: string;
  handleClickMovePage: (pathname?: string) => void;
}

export default function HeaderButtons({
  userType,
  handleClickMovePage,
}: HeaderButtonsProps) {
  const router = useRouter();

  return (
    <Buttons>
      {userType === "" && (
        <>
          <UiButton
            name="로그인"
            id="login"
            handleClickButton={() => handleClickMovePage("signin")}
          />
          <UiButton
            name="회원가입"
            id="signup"
            handleClickButton={() => handleClickMovePage("signup")}
          />
        </>
      )}
      {userType === "employer" && (
        <>
          <a href="/my-shop" className="uiButton">
            내 가게
          </a>

          <UiButton
            name="로그아웃"
            handleClickButton={() => deleteCookie(router)}
          />
        </>
      )}
      {userType === "employee" && (
        <>
          <UiButton
            name="내 프로필"
            handleClickButton={() => handleClickMovePage("my-profile")}
          />
          <UiButton
            name="로그아웃"
            handleClickButton={() => deleteCookie(router)}
          />
          <NotiButton />
        </>
      )}
    </Buttons>
  );
}

const Buttons = styled.div`
  grid-area: buttons;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  .uiButton {
    background-color: transparent;
    line-height: 20px;
    ${julgeBodyBold};
  }

  @media only screen and (max-width: 768px) {
    justify-content: flex-end;
  }
`;
