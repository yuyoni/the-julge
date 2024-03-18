import Layout from "@/components/Layout";
import RecommendNotice from "@/pages/search/components/RecommendNotice";
import AllNotice from "@/pages/search/components/AllNotice";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const keyword = router.query.keyword as string;
  const page = parseInt(router.query.page as string, 10);

  return (
    <Layout>
      <RecommendNotice />
      <AllNotice keyword={keyword} initialPage={page} />
    </Layout>
  );
}
