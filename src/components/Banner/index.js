import React, { useState } from "react";
import styles from "./Banner.module.scss";
import classNames from "classnames/bind";
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Banner = () => {
    return (
        <div className={cx("banner")}>
            <img alt="" src="./images/hero-banner.png" className={cx("banner_img")}/>
            <div className={cx("banner_content")}>
                <h2 className={cx("banner_content-title")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="2" viewBox="0 0 24 2" fill="none">
                        <path d="M0 1H24" stroke="#3C5094"/>
                    </svg>
                    <span>Welcome to INSIDEMEN</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="2" viewBox="0 0 24 2" fill="none">
                        <path d="M0 1H24" stroke="#3C5094"/>
                    </svg>
                </h2>
                <p>Định hướng</p>
                <p>Thời trang hiện đại</p>
                <button className={cx("banner_content-buy")}>Mua ngay</button>
            </div>
        </div>
    )
}

export default Banner;