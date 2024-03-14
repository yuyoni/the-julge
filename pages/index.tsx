import Post from "@/components/Post";
import { h2 } from "@/styles/fontsStyle";
import styled from "@emotion/styled";
import { useState } from "react";
import responseData from "../components/Post/response_mockupdata.json";
import Button from "@/components/Button/Button";
import Filter from "@/components/Filter/Filter";
import PostForm from "@/components/PostForm/PostForm";
import Layout from "@/components/Layout";

export const utilFormatDuration = (duration: string, workhour: number) => {
  const date = duration.slice(0, 10);
  const time = duration.slice(11, 13);
  const minutes = duration.slice(14, 16);

  const numTime = Number(time);
  const worktimeAdded = numTime + workhour;

  const newTime = `${worktimeAdded % 24}:${minutes}`;

  return `${date} ${time}:${minutes}~${newTime}`;
};

export default function Home() {
  const [user, setUser] = useState<
    "guest" | "employee" | "employer" | undefined
  >("guest");

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isPostFormVisible, setIsPostFormVisible] = useState(false);

  const { items } = responseData;
  const itemArray = items.map((item) => item.item);

  const itemDatas = itemArray.map((item) => ({
    noticeId: item.id,
    shopId: item.shop?.item.id,
    name: item.shop?.item.name,
    duration: utilFormatDuration(item.startsAt, item.workhour),
    workhour: item.workhour,
    address: item.shop?.item.address1,
    hourlyPay: item.hourlyPay,
    originalHourlyPay: item.shop?.item.originalHourlyPay,
    imageUrl: item.shop?.item.imageUrl,
    closed: item.closed,
  }));

  const handleToggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleTogglePostForm = () => {
    setIsPostFormVisible(!isPostFormVisible);
  };

  return (
    <Layout>
      {/* 회원에 따른 nav바 확인을 위해 임시로 추가한 영역 */}
      <div style={{ display: "flex", gap: "10px", width: "20%" }}>
        <Button
          text="비회원상태"
          color="white"
          handleClick={() => setUser("guest")}
        />
        <Button
          text="알바님"
          color="white"
          handleClick={() => setUser("employee")}
        />
        <Button
          text="사장님"
          color="white"
          handleClick={() => setUser("employer")}
        />
      </div>

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
        <Button
          text="상세 필터"
          color="colored"
          handleClick={handleToggleModal}
          width={80}
        />
        <Button
          text="공고 등록하기"
          color="colored"
          handleClick={handleTogglePostForm}
          width={312}
        />

        <Filter
          isModalVisible={isModalVisible}
          handleModalClose={handleToggleModal}
        />
        <PostForm
          isPostFormVisible={isPostFormVisible}
          handlePostFormClose={handleTogglePostForm}
        />
      </div>

      <CustomPostList>
        <CustomPostListHeader>
          <h1>맞춤 공고</h1>
        </CustomPostListHeader>
        <CustomPostContent>
          {itemDatas.map((item) => (
            <Post key={item.noticeId} item={item} />
          ))}
        </CustomPostContent>
      </CustomPostList>
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
