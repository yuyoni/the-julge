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

    /* purple */
    --The-julge-purple-10: #e9dcf4;
    --The-julge-purple-20: #d0aeeb;
    --The-julge-purple-30: #b182d5;
    --The-julge-purple-40: #905cb9;

    /* blue */
    --The-julge-blue-10: #cce6ff;
    --The-julge-blue-20: #0080ff;

    /* green */
    --The-julge-green-10: #d4f7d4;
    --The-julge-green-20: #20a81e;

    /* red */
    --The-julge-red: #ec5a46;

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
  }

  * {
    box-sizing: border-box;
    margin: 0;
    word-break: keep-all;
  }

  html,
  body {
    font-size: 62.5%;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  input {
    border: none;
  }

  input:focus {
    outline: none;
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
