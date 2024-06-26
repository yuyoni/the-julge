import { css } from "@emotion/react";

export const globalStyles = css`
  :root {
    height: 100%;

    /* gray */
    --The-julge-gray-00: #ffffff;
    --The-julge-gray-05: #fafafa;
    --The-julge-gray-10: #f2f2f3;
    --The-julge-gray-20: #e5e4e7;
    --The-julge-gray-30: #cbc9cf;
    --The-julge-gray-40: #a4a1aa;
    --The-julge-gray-50: #7d7986;
    --The-julge-black: #111322;

    /* green */
    --The-julge-green-00: #f0f4f2;
    --The-julge-green-05: #cedad5;
    --The-julge-green-10: #869b92;
    --The-julge-green-20: #416753;
    --The-julge-green-30: #2f6144;
    --The-julge-green-40: #224634;

    --The-julge-accepted: #80afca;
    --The-julge-rejected: #e27974;
    --The-julge-pending: #96bd81;
    --The-julge-canceled: #a4a1aa;

    /* kakao */
    --The-julge-kakao: #fee500;

    /* Font Size */
    --font-h1: 40px;
    --font-h2: 32px;
    --font-h3: 24px;

    --font-body1: 20px;
    --font-body2: 18px;
    --font-body3: 16px;

    --font-caption1: 14px;

    /* Font Weight */
    --weight-bold: 700;
    --weight-medium: 500;
    --weight-regular: 400;

    /* Box Shadow */
    --shadow-1pt: 0px 4px 25px 0px rgba(0, 0, 0, 0.1);
    --shadow-2pt: 0px 2px 8px 0px rgba(120, 116, 134, 0.25);

    /* overlay box */
    --The-julge-overlay-box: rgba(0, 0, 0, 0.7);

    @font-face {
      font-family: "Pretendard";
      src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
        format("woff");
      font-weight: 400;
      font-style: normal;
    }

    @font-face {
      font-family: "Pretendard-Bold";
      src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff")
        format("woff");
      font-weight: 700;
      font-style: normal;
    }
  }

  * {
    box-sizing: border-box;
    margin: 0;
    word-break: keep-all;
    font-family: Pretendard;
    font-style: normal;
  }

  html,
  body {
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  p {
    line-height: 100%;
  }

  input,
  textarea {
    border: none;
    transition:
      background-color 0.1s ease,
      border 0.1s ease;
  }

  input:focus,
  textarea:focus {
    outline: none;
    border: 1px solid var(--The-julge-green-30);
  }

  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    display: none;
  }

  button {
    border: none;
    padding: unset;
    background-color: unset;
    cursor: pointer;
  }
`;
