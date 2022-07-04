import Head from "next/head";

import Link from "next/link";

const post1 = () => {
  return (
    <div>
      <Head>
        <title>post1</title>
      </Head>
      <div>
        <Link href="/">Home </Link>
        <Link href="/about">
          <a>about</a>
        </Link>
      </div>
      <h2>여기는 1을 위한 페이지</h2>
    </div>
  );
};
export default post1;
