import React from "react";
import NoPost from "@/components/NoPost";
import Post, { PostProps } from "@/components/Post";

export const renderPosts = (itemDatas: PostProps[], isRecommend: boolean) => {
  return isRecommend
    ? renderRecommendedPosts(itemDatas)
    : renderRegularPosts(itemDatas);
};

const renderRecommendedPosts = (itemDatas: PostProps[]) => {
  const filteredItemDatas = itemDatas
    .filter((item) => !item.closed)
    .slice(0, 3);
  return filteredItemDatas.length === 0 ? (
    <NoPost />
  ) : (
    renderPostList(filteredItemDatas)
  );
};

const renderRegularPosts = (itemDatas: PostProps[]) => {
  return itemDatas.length === 0 ? <NoPost /> : renderPostList(itemDatas);
};

export const renderPostList = (itemDatas: PostProps[]) => {
  return itemDatas.map((item: PostProps) => <Post key={item.id} item={item} />);
};
