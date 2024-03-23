import Layout from "@/components/Layout";
import RecommendNotice from "@/pages/search/components/RecommendNotice";
import AllNotice from "@/pages/search/components/AllNotice";
import { useRouter } from "next/router";
import useCookie from "@/hooks/useCookies";

export default function Home() {
  const router = useRouter();
  const keyword = router.query.keyword as string;
  const page = parseInt(router.query.page as string, 10);
  const { id, userType, isSuccess } = useCookie();

  return (
    isSuccess && (
      <Layout>
        {userType !== "employer" && <RecommendNotice id={id} />}
        <AllNotice keyword={keyword} initialPage={page} />
      </Layout>
    )
  );
}
