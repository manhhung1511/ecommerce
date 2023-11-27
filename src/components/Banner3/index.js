import React from "react";
import styles from "./Banner3.module.scss";
import classNames from "classnames/bind";
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);


const Banner3 = () => {
    return (
        <div className={cx("container")}>
            <div className={cx("banner3")}>
            <div className={cx("banner3_content")}>
                <img src="./images/banner3.png" alt=""/>
                <div className={cx("banner3_content-item")}>
                    <h1> CHÚNG TÔI LÀM THỜI TRANG HÀNG NGÀY CỦA BẠN TỐT HƠN! </h1>
                    <p>Trong hành trình cải thiện thời trang hàng ngày của chúng tôi, Insidemen giới thiệu dòng trang phục MỖI NGÀY - Thời trang thoải mái & giá cả phải chăng 24/7</p>
                    <button>Mua ngay</button>
                </div>
            </div>
            <img src="./images/banner33.png" alt="" />
        </div>
    </div>
    );
   
}

export default Banner3;