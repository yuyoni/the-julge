import React from "react";
import NoPost from "@/components/NoPost";
import Post, { PostProps } from "@/components/Post";

export const renderPosts = (
  itemDatas: PostProps[],
  isRecommend: boolean,
  address?: string,
) => {
  return isRecommend
    ? renderRecommendedPosts(itemDatas, isRecommend, address)
    : renderRegularPosts(itemDatas, isRecommend);
};

const renderRecommendedPosts = (
  itemDatas: PostProps[],
  isRecommend: boolean,
  address?: string,
) => {
  const filteredItemDatas = itemDatas
    .filter((item) => !item.closed)
    .filter((item) => new Date(item.startsAt) > new Date())
    .slice(0, 3);

  return filteredItemDatas.length === 0 ? (
    <NoPost isRecommend={isRecommend} address={address} />
  ) : (
    renderPostList(filteredItemDatas)
  );
};

const renderRegularPosts = (itemDatas: PostProps[], isRecommend: boolean) => {
  return itemDatas.length === 0 ? (
    <NoPost isRecommend={isRecommend} />
  ) : (
    renderPostList(itemDatas)
  );
};

export const renderPostList = (itemDatas: PostProps[]) => {
  return itemDatas.map((item: PostProps) => <Post key={item.id} item={item} />);
};
