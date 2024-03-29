import { useEffect, useState, useCallback } from "react";
import { Typography } from "@mui/material";
import type { NextPage } from "next";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import { Dispatch } from "redux";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import Layout from "./layout";
import Banner from "../components/Banner/Banner";
import Clientapi from "./api/client";
import AvailableServices from "../components/AvailableServices";
import Testing from "./testing";
import LatestServices from "../components/LatestServices";
import TopCategories from "../components/TopCategories/TopCategories";
import Featured from "../components/Featured/Featured";

const Home: NextPage = () => {
  const [categories, setCategories] = useState([]);
  const articles: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    if (categories.length === 0) {
      Clientapi.get("api/Categories").then((response) => {
        setCategories(response.data);
      });
      console.log("the lenght wasnt fetched");
    }
  }, [categories]);
  console.log("checking via the index", categories);
  return (
    <Layout>
      {" "}
      <div>
        <Banner />
        <TopCategories />
        <Featured />
        <AvailableServices services={categories} />
        <LatestServices />
      </div>{" "}
    </Layout>
  );
};

export default Home;
