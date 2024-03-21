import Button from "@/components/Button/Button";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { body1Regular, h1Regular } from "@/styles/fontsStyle";

type frame = "MY_SHOP" | "NOTICE";

interface IDetail {
  title: string;
  description: string;
  buttonText: string;
  onClick: () => void;
}

interface IInfo {
  MY_SHOP: IDetail;
  NOTICE: IDetail;
}

export default function CommonFrame({
  frameType,
  shopId,
}: {
  frameType: frame;
  shopId?: string;
}) {
  const router = useRouter();
  const information: IInfo = {
    MY_SHOP: {
      title: "내 가게",
      description: "내 가게를 소개하고 공고도 등록해 보세요",
      buttonText: "가게 등록하기",
      onClick: () => {
        return router.push("/my-shop/register");
      },
    },
    NOTICE: {
      title: "등록한 공고",
      description: "공고를 등록해 보세요",
      buttonText: "공고 등록하기",
      onClick: () => {
        return router.push(`/shops/${shopId}/notices`);
      },
    },
  };

  const dataType: IDetail = information[frameType];

  return (
    <Container frameType={frameType}>
      <StyledDiv>
        <h2>{dataType.title}</h2>
        <StyledDes>
          <p>{dataType.description}</p>
          <Button
            handleClick={dataType.onClick}
            text={dataType.buttonText}
            width={350}
          />
        </StyledDes>
      </StyledDiv>
    </Container>
  );
}

const Container = styled.div<{ frameType: frame }>`
  display: flex;
  padding: 60px 237px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  background: ${({ frameType }) =>
    frameType === "NOTICE"
      ? "var(--The-julge-gray-05)"
      : "var(--The-julge-white, #fff)"};
`;

const StyledDiv = styled.div`
  width: 965px;
  height: 276px;

  h2 {
    ${h1Regular};
  }

  p {
    ${body1Regular};
  }
`;

const StyledDes = styled.div`
  display: flex;
  width: 965px;
  padding: 60px 24px;
  margin-top: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border-radius: 12px;
  border: 1px solid var(--The-julge-gray-20);
`;
