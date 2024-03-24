import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
        <link
          href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
          rel="stylesheet"
          type="text/css"
        />
        <meta
          property="og:title"
          content="The More 시급, The More 알바, +HE JULGE"
        />
        <meta
          property="og:description"
          content="급하게 일손이 필요한 자리에 더 많은 시급을 제공해서 아르바이트생을 구할 수 있는 서비스"
        />
        <meta property="og:url" content="https://soyeon-jjang.vercel.app/" />
        <meta
          property="og:image"
          content="https://soyeon-jjang.vercel.app/_next/image?url=https%3A%2F%2Fbootcamp-project-api.s3.ap-northeast-2.amazonaws.com%2F3-3%2Fthe-julge%2F96dfea69-26fb-4324-9b56-61b863bad67e-the-julge.png&w=1080&q=75"
        />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
