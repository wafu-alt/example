import Head from "next/head";

import Link from "next/link";

const About = () => {
  return (
    <div>
      <Head>
        <title>About page</title>
      </Head>
      <div>
        <Link href="/">Home </Link>
        <Link href="/about">
          <a>about</a>
        </Link>
      </div>
      <h2>여기는 about 페이지</h2>
    </div>
  );
};
export default About;
