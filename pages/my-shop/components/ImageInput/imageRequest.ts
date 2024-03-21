import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function createPresinedURL(file: File) {
  axios
    .post(`${BASE_URL}/images`, {
      filename: file.name,
    })
    .then((response) => {
      const presignedUrl = response.data;
      console.log(presignedUrl);
      const url = new URL(presignedUrl);
      const urlWithoutQueryParams = url.origin + url.pathname;
      uploadImageToS3(urlWithoutQueryParams, file);
      console.log(urlWithoutQueryParams);
    })
    .catch((error) => console.error(error));
}

function uploadImageToS3(url: string, file: File) {
  axios
    .put(url, file)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.error(error));
}
