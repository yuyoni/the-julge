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
    </Head>
  );
}
