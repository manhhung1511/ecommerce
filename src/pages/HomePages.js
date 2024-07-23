import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Banner2 from "../components/Banner2";
import Product from "../components/Product";
import Banner3 from "../components/Banner3";
import Category from "../components/Category";
import Branch from "../components/Branch";
import ProductNew from "../components/ProductNew";
import FeedBack from "../components/FeedBack";
import News from "../components/News";
import Footer from "../components/Footer";
import styles from "./HomePage.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <div className={cx("loading-container")}>
      <div className={cx("spinner")}></div>
    </div>
  ) : (
    <>
      <div className="hero-banner">
        <Banner />
      </div>
      <div className="banner2">
        <Banner2 />
      </div>
      <div className="product">
        <Product />
      </div>
      <Banner3 />
      <Category />
      <Branch />
      <ProductNew title={"SẢN PHẨM NỔI BẬT"} />
      <FeedBack />
      <News />
      <Footer />
    </>
  );
};
export default HomePage;
