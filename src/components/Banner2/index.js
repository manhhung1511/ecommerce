import React, { useState } from "react";
import styles from "./Banner2.module.scss";
import classNames from "classnames/bind";
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Banner2 = () => {
    return (
        <div className={cx("container")}>
            <div className={cx("banner2")}>
                <div className={cx("banner2_item1")}>
                    <img src="./images/Rectangle 77.png" alt=""/>
                    <div className={cx("banner2_item-content")}>
                        <p className={cx("banner2_item-title")}>
                            Urban
                            <p>Shirts</p>
                        </p>
                        <p className={cx("banner2_item-desc")}>
                            Live In Confort
                        </p>
                        <p className={cx("banner2_item-sale")}>
                            FLAT 60% OFF
                        </p>
                        <p className={cx("banner2_item-arrow")}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                <path d="M18 7.5L18 27M27 19.5L19.0607 27.4393C18.4749 28.0251 17.5251 28.0251 16.9393 27.4393L9 19.5" stroke="#3C4242" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                        </p>
                        <button className={cx("banner2_item-buy")}>
                            Mua ngay
                        </button>
                    </div>
                </div>
                <div className={cx("banner2_item2")}>
                    <img src="./images/Rectangle 78.png" alt=""/>
                    <div className={cx("banner2_item-content2")}>
                        <p className={cx("banner2_item-title")}>
                            Oversized
                            <p>T-shirts</p>
                        </p>
                        <p className={cx("banner2_item-desc")}>
                            Street Style Icon
                        </p>
                        <p className={cx("banner2_item-sale")}>
                            FLAT 60% OFF
                        </p>
                        <p className={cx("banner2_item-arrow")}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                <path d="M18 7.5L18 27M27 19.5L19.0607 27.4393C18.4749 28.0251 17.5251 28.0251 16.9393 27.4393L9 19.5" stroke="#3C4242" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                        </p>
                        <button className={cx("banner2_item-buy")}>
                            Mua ngay
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner2