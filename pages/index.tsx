import { h2 } from "@/styles/fontsStyle";
import styled from "@emotion/styled";
import { useState } from "react";
import responseData from "../components/Post/response_mockupdata.json";
import Button from "@/components/Button/Button";
import Filter from "@/components/Filter/Filter";
import Layout from "@/components/Layout";
import RecommendNotice from "./home/components/RecommendNotice";

export default function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleToggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <Layout>
      {/* 상세 필터 모달 및 공고 등록 UI 확인을 위해 임시로 추가한 영역 */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        <Filter
          isModalVisible={isModalVisible}
          handleModalClose={handleToggleModal}
        />
      </div>

      <RecommendNotice />

      <Button
        text="상세 필터"
        color="colored"
        handleClick={handleToggleModal}
        width={80}
      />
    </Layout>
  );
}

const CustomPostList = styled.section`
  padding: 60px 0;
  max-width: 968px;
  margin: 0 auto;
`;
const CustomPostListHeader = styled.div`
  margin-bottom: 30px;
  width: 100%;
  ${h2};
`;

const CustomPostContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 294px);
  gap: 31px 18px;
  margin: 0 auto;
  width: 100%;
`;
