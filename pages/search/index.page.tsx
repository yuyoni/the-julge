import Layout from "@/components/Layout";
import AllNotice from "@/pages/search/components/AllNotice";
import { useRouter } from "next/router";

export default function Search() {
  const router = useRouter();
  const keyword = router.query.keyword as string;

  return (
    <Layout>
      <AllNotice keyword={keyword} />
    </Layout>
  );
}
