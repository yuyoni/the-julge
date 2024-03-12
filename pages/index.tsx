import Button from "@/components/Button/Button";
import Filter from "@/components/Filter/Filter";
import Gnb from "@/components/Gnb";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState<
    "guest" | "employee" | "employer" | undefined
  >("guest");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleToggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <>
      <Gnb userType={user} />
      <button onClick={() => setUser("guest")}>로그인하지 않음</button>
      <button onClick={() => setUser("employee")}>알바님</button>
      <button onClick={() => setUser("employer")}>사장님</button>
      <ButtonWrapper>
        <Button
          text="상세 필터"
          color="colored"
          handleClick={() => setIsModalVisible(!isModalVisible)}
        />
      </ButtonWrapper>
      <Filter
        isModalVisible={isModalVisible}
        handleModalClose={handleToggleModal}
      />
    </>
  );
}

const ButtonWrapper = styled.div`
  width: 80px;
`;
