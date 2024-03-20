import { body1Regular, body2Regular } from "@/styles/fontsStyle";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Button from "@/components/Button/Button";
import { useEffect, useState } from "react";
import fetchData from "@/lib/apis/fetchData";
import useCookie from "@/hooks/useCookies";
import { useRouter } from "next/router";
import ModalContent from "@/pages/shops/[shopId]/notices/[noticeId]/components/ModalContent";

type OwnerTableBodyProps = {
  key?: string;
  applicationId?: string;
  name?: string;
  bio?: string;
  phone?: string;
  status?: string;
  handlePermitClick?: () => void;
  handleDenyClick?: () => void;
};

export default function OwnerTableRow({
  applicationId,
  name,
  bio,
  phone,
  status,
}: OwnerTableBodyProps) {
  const { jwt: token } = useCookie();
  const router = useRouter();
  const { shopId, noticeId } = router.query;
  const [isShowAcceptModal, setIsShowAcceptModal] = useState(false);
  const [isShowRejectModal, setIsShowRejectModal] = useState(false);

  const handleClickAccept = () => {
    setIsShowAcceptModal(true);
  };
  const handleClickReject = () => {
    setIsShowRejectModal(true);
  };

  const sendAcceptRequest = async () => {
    const response = await fetchData({
      param: `/shops/${shopId}/notices/${noticeId}/applications/${applicationId}`,
      method: "put",
      requestData: {
        status: "accepted",
      },
      token: token,
    });
    setIsShowAcceptModal(false);
    router.reload();
  };

  const sendRejectRequest = async () => {
    const response = await fetchData({
      param: `/shops/${shopId}/notices/${noticeId}/applications/${applicationId}`,
      method: "put",
      requestData: {
        status: "rejected",
      },
      token: token,
    });
    setIsShowRejectModal(false);
    router.reload();
  };

  return (
    <>
      <TableRow>
        <Cell>{name}</Cell>
        <Cell>
          <Wrapper>{bio}</Wrapper>
        </Cell>
        <Cell>{phone?.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")}</Cell>
        <Cell>
          {status === "pending" ? (
            <ButtonContainer>
              <ButtonWrapper>
                <Button
                  handleClick={handleClickAccept}
                  text="승인하기"
                  color="accept"
                />
              </ButtonWrapper>
              <ButtonWrapper>
                <Button
                  handleClick={handleClickReject}
                  text="거절하기"
                  color="reject"
                />
              </ButtonWrapper>
            </ButtonContainer>
          ) : (
            <Status status={status}>
              {status === "accepted" ? "승인 완료" : "거절"}
            </Status>
          )}
        </Cell>
      </TableRow>
      {isShowAcceptModal && (
        <ModalContent
          modalIcon="check"
          modalText="신청을 승인하시겠습니까?"
          handleYesClick={sendAcceptRequest}
          setModalState={setIsShowAcceptModal}
          yesButtonText="승인하기"
        />
      )}
      {isShowRejectModal && (
        <ModalContent
          modalIcon="check"
          modalText="신청을 거절하시겠습니까?"
          handleYesClick={sendRejectRequest}
          setModalState={setIsShowRejectModal}
          yesButtonText="거절하기"
        />
      )}
    </>
  );
}

const getStatusStyle = (status: string) => {
  switch (status) {
    case "accepted":
      return css`
        background: var(--The-julge-blue-10);
        color: var(--The-julge-blue-20);
      `;
    case "rejected":
      return css`
        background: var(--The-julge-red);
        color: var(--The-julge-gray-00);
      `;
    case "canceled":
      return css`
        background: var(--The-julge-gray-20);
        color: var(--The-julge-gray-00);
      `;
  }
};

const TableRow = styled.tr`
  border-bottom: 1px solid var(--The-julge-gray-20);
`;

const Cell = styled.td`
  background: var(--The-julge-gray-05);
  padding: 20px 12px;
  ${body1Regular}
`;

const Wrapper = styled.div`
  width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const ButtonWrapper = styled.div`
  width: 92px;
`;

const Status = styled.div<{ status?: string }>`
  width: fit-content;
  border-radius: 20px;
  padding: 6px 10px;
  ${body2Regular}

  ${({ status }) => getStatusStyle(status as string)}
`;
