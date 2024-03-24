import Layout from "@/components/Layout";
import MetaHead from "@/components/MetaHead";
import AllNotice from "@/pages/search/components/AllNotice";
import { useRouter } from "next/router";

export default function Search() {
  const router = useRouter();
  const keyword = router.query.keyword as string;
  const page = parseInt(router.query.page as string, 10);

  return (
    <>
      <MetaHead
        title={`+HE JULGE | ${keyword} 검색 결과`}
        url={router.asPath}
      />
      <Layout>
        <AllNotice keyword={keyword} initialPage={page} />
      </Layout>
    </>
  );
}
