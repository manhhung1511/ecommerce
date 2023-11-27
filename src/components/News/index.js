import React from "react";
import styles from "./News.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const News = () => {
    return (
        <div class={cx("container")}>
            <div className={cx("news")}>
                <div className={cx("news-title")}>
                    <p>TIN TỨC</p>
                </div>
        
                <div className={cx("news-content")}>
                    <div className="row">
                        <div className={cx("col-sm-4")}>
                            <div className={cx("news-item")}>
                                <img src="./images/news1.png" alt=""/>
                            </div>
                            <p>20.04.2021 | 14:45</p>
                            <h3>Hướng dẫn cách chọn size áo khoác nam chuẩn nhất hiện nay</h3>
                            <p>
                                 Áo khoác nam không chỉ là một item thời trang giữ ấm cơ thể mà còn thể hiện phong cách...
                            </p>
                            <p>
                                Xem thêm 
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M4.16675 10H15.0001M10.8334 5L15.2442 9.41074C15.5696 9.73618 15.5696 10.2638 15.2442 10.5893L10.8334 15" stroke="#3C4242" stroke-width="1.5" stroke-linecap="round"/>
                                    </svg>
                                </span>
                            </p>
                        </div>  
                    </div>
                </div>

            </div>
        </div>
    );
}

export default News