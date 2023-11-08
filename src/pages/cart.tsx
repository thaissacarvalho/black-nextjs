import Header from "@/Components/Header";
import { NextPage } from "next";
import { Container } from "reactstrap";
import CartTable from "@/Components/CartTable";
import Head from "next/head";
import CartTotal from "@/Components/CartTotal";

const Cart: NextPage = () => {
  return (
    <>
      <Head>
        <title>Carrinho</title>
        <meta name="description" content="Meu carrinho de compras" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />

      <main>
        <Container className="mb-5">
          <h1 className="my-5">
            Carrinho
          </h1>

          <CartTable />
          <CartTotal/>
        </Container>
      </main>
    </>
  )
}

export default Cart