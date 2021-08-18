import Head from "next/head";

import Layout from "components/Layout";

// sections
import Showcase from "sections/Showcase";

export default function Home() {
  return (
    <>
      <Head>

      </Head>
      <Layout isHomepage>
        <Showcase />
      </Layout>
    </>
  );
}
