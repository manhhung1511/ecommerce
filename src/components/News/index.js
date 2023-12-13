import React from "react";
import styles from "./News.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

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
                        <Link to="/">
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
                                        <path d="M4.16675 10H15.0001M10.8334 5L15.2442 9.41074C15.5696 9.73618 15.5696 10.2638 15.2442 10.5893L10.8334 15" stroke="#3C4242" strokeWidth="1.5" strokeLinecap="round"/>
                                    </svg>
                                </span>
                            </p>
                        </Link>
                        </div>  
                        <div className={cx("col-sm-4")}>
                        <Link to="/">

                            <div className={cx("news-item")}>
                                <img src="https://i.postimg.cc/tCmFChzq/Img34.png" alt=""/>
                            </div>
                            <p>20.04.2021 | 14:45</p>
                            <h3>99+ mẫu áo nhóm đi biển bắt trend và ĐỘC ĐÁO chơi hè 2023.</h3>
                            <p>
                            Để trở thành một nhóm đồng đều và nổi bật trên bãi biển, một bộ trang phục phù hợp là điều vô cùng...
                            </p>
                            <p>
                                Xem thêm 
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M4.16675 10H15.0001M10.8334 5L15.2442 9.41074C15.5696 9.73618 15.5696 10.2638 15.2442 10.5893L10.8334 15" stroke="#3C4242" strokeWidth="1.5" strokeLinecap="round"/>
                                    </svg>
                                </span>
                            </p>
                            </Link>
                        </div> 
                        <div className={cx("col-sm-4")}>
                        <Link to="/">

                            <div className={cx("news-item")}>
                                <img src="https://i.postimg.cc/ZnsvnSp7/Img56.png" alt=""/>
                            </div>
                            <p>20.04.2021 | 14:45</p>
                            <h3>Suspender là gì? Tìm hiểu từ A đến Z về phụ kiện Suspender.</h3>
                            <p>
                            Một trong những item thời trang không thể thiếu cho các quý ông lịch lãm, thanh lịch chính là...
                            </p>
                            <p>
                                Xem thêm 
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M4.16675 10H15.0001M10.8334 5L15.2442 9.41074C15.5696 9.73618 15.5696 10.2638 15.2442 10.5893L10.8334 15" stroke="#3C4242" strokeWidth="1.5" strokeLinecap="round"/>
                                    </svg>
                                </span>
                            </p>
                            </Link>

                        </div> 
                        
                    </div>
                </div>

            </div>
        </div>
    );
}

export default News