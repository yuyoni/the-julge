import { useEffect, useState } from "react";
import ApplyHistory, { ApplyHistoryProps } from "./ApplyHistory";
import Layout from "@/components/Layout";
import Profile from "./Profile";
import styled from "@emotion/styled";
import axios from "axios";
import useCookie from "@/hooks/useCookies";

type UserProfile = {
  name: string;
  phone: string;
  address: string;
  bio: string;
};

type Application = {
  id: string;
  name: string;
  date: string;
  hourlyPay: string;
  status: string;
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function MyProfile() {
  const { jwt, userType, id } = useCookie();
  const [profile, setProfile] = useState<UserProfile>({
    name: "",
    phone: "",
    address: "",
    bio: "",
  });
  const [applicationHistory, setApplicationHistory] = useState<Application[]>(
    [],
  );

  useEffect(() => {
    console.log("useEffect");
    const fetchData = async () => {
      try {
        const [{ data: userInfo }, { data: applicationHistory }] =
          await Promise.all([
            axios.get(`${BASE_URL}/users/${id}`),
            axios.get(`${BASE_URL}/users/${id}/applications`, {
              headers: {
                Authorization: jwt,
              },
            }),
          ]);
        const { name, phone, address, bio } = userInfo.item;
        setProfile((prev) => ({ ...prev, name, phone, address, bio }));

        const { count, limit, items } = applicationHistory;
        const history: Application[] = items.map(({ item }: any) => {
          const { id, notice, shop, status } = item;
          const { name } = shop.item;
          const { hourlyPay, startsAt, workhour } = notice.item;
          const date = `2023-01-12 10:00 ~ 12:00 (${workhour}시간)`;
          return {
            id,
            name,
            date,
            hourlyPay,
            status,
          };
        });
        setApplicationHistory(history);
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          const { message } = error.response.data;
          alert(message);
        }
      }
    };
    fetchData();
  }, [id]);
  console.log(profile);

  const tempResponse: ApplyHistoryProps = {
    type: "employee",
    limit: 5,
    count: applicationHistory.length,
    items: applicationHistory,
  };

  return (
    <Layout>
      <Profile />
      <Wrapper>
        <ApplyHistory {...tempResponse} />
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  background-color: var(--The-julge-gray-05);
`;
