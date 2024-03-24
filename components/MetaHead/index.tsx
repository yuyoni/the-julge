import Head from "next/head";

interface MetaHeadProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

export default function MetaHead({
  title,
  description,
  url,
  image,
}: MetaHeadProps) {
  return (
    <Head>
      <title>{title || "+HE JULGE"}</title>
      <meta
        name="description"
        content={
          description ||
          "급하게 일손이 필요한 자리에 더 많은 시급을 제공해서 아르바이트생을 구할 수 있는 서비스"
        }
      />
      <meta property="og:title" content={title || "+HE JULGE"} />
      <meta
        property="og:url"
        content={url || "https://soyeon-jjang.vercel.app/"}
      />
      <meta
        property="og:image"
        content={
          image ||
          "https://soyeon-jjang.vercel.app/_next/image?url=https%3A%2F%2Fbootcamp-project-api.s3.ap-northeast-2.amazonaws.com%2F3-3%2Fthe-julge%2F96dfea69-26fb-4324-9b56-61b863bad67e-the-julge.png&w=1080&q=75"
        }
      />
    </Head>
  );
}
