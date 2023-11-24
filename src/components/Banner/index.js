import React, { useState } from "react";
import styles from "./Banner.module.scss";
import classNames from "classnames/bind";
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Banner = () => {
    return (
        <div className={cx("banner")}>
            <img alt="" src="./images/hero-banner.png" className={cx("banner_img")}/>
        </div>
    )
}

export default Banner;