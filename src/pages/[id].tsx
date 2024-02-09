import OrderDetail from "@/components/order/OrderDetail";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const Detail = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Boxful - Envíos en tiempo récord para empresas.</title>
        <link
          rel="icon"
          href="https://goboxful.com/wp-content/uploads/2023/11/cropped-1666-32x32.png"
        />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Boxful provee fulfillment ultra-rápido, gestión de envíos y una red de lockers inteligentes para habilitar entregas el mismo día o al día siguiente a marcas de e-commerce y online sellers en Latinoamérica."
        />
      </Head>
      <OrderDetail orderDetail={router.query || {}} />
    </>
  );
};

export default Detail;
