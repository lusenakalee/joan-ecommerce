import Head from "next/head";
import Header from "../components/Header.js";
import Banner from "../components/Banner.js";
import ProductFeed from "../components/ProductFeed.js";
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>ELEGANT</title>
      </Head>
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <ProductFeed products={products} />

      </main>


    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://elegancetest.onrender.com/cat")
    .then(res => res.json())

    console.log("Fetched products:", products);


  return {
    props: {
      products
    }
  }
}
