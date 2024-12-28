//need change later for prefill
import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import Card from "./Card.jsx";

import axios from "axios";

const Home = () => {
  const checkoutHandler = async (amount) => {
    const {
      data: { key },
      // } = await axios.get("http://localhost:4000/api/getkey");
    } = await axios.get("https://razorpay-server-kgew.onrender.com/api/getkey");

    const {
      data: { order },
      // } = await axios.post("http://localhost:4000/api/checkout", {
    } = await axios.post(
      "https://razorpay-server-kgew.onrender.com/api/checkout",
      {
        amount,
      }
    );

    const options = {
      key, // Enter the Key ID generated from the Dashboard
      amount: order.amount,
      currency: "INR",
      name: "ECOMMERCE",
      description: "Test Transaction",
      image:
        "https://static.vecteezy.com/system/resources/previews/016/471/452/original/abstract-modern-ecommerce-logo-ecommerce-logo-design-shop-logo-design-template-creative-ecommerce-logo-vector.jpg",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      // callback_url: "http://localhost:4000/api/paymentverification",
      callback_url:
        "https://razorpay-server-kgew.onrender.com/api/paymentverification",

      //add login user details
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#FF6347",
      },
    };

    const razor = new window.Razorpay(options);
    razor.open();
  };
  return (
    <Box>
      <Stack
        h={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
        direction={["column", "row"]}
      >
        <Card
          amount={5000}
          img={
            "https://i.pinimg.com/736x/e7/5d/db/e75ddbda351d44e24b6b8099fa200aad.jpg"
          }
          checkoutHandler={checkoutHandler}
        />
        <Card
          amount={3000}
          img={
            "https://images.pexels.com/photos/225157/pexels-photo-225157.jpeg?cs=srgb&dl=pexels-fox-58267-225157.jpg&fm=jpg"
          }
          checkoutHandler={checkoutHandler}
        />
        <Card
          amount={10000}
          img={
            "https://thumbs.dreamstime.com/b/camera-lens-photography-high-quality-photo-ai-326440592.jpg"
          }
          checkoutHandler={checkoutHandler}
        />
        <Card
          amount={1250000}
          img={
            "https://media.istockphoto.com/id/618066222/photo/camera-capturing-a-forest.jpg?s=612x612&w=0&k=20&c=Mqr3fFI2QPY09_bu3GyRYJvcdwBO2qeHPT88GFsLTS4="
          }
          checkoutHandler={checkoutHandler}
        />
      </Stack>
    </Box>
  );
};

export default Home;
