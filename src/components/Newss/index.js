import React from "react";
import styles from "./Newss.module.scss";
import classNames from "classnames/bind";
import Footer from "../Footer";

const cx = classNames.bind(styles);

const Newss = () => {
    return (
        <div class={cx("newss")}>
            <div className={cx("container")}>
        <div className={cx("breadcrumb")}>
          <span>Home</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.13693 6.40004C7.82675 6.71207 7.82675 7.21601 8.13693 7.52804L10.9689 10.4L8.13693 13.232C7.82675 13.5441 7.82675 14.048 8.13693 14.36C8.28714 14.5115 8.49162 14.5967 8.70493 14.5967C8.91824 14.5967 9.12272 14.5115 9.27293 14.36L12.6649 10.968C12.8164 10.8178 12.9016 10.6134 12.9016 10.4C12.9016 10.1867 12.8164 9.98225 12.6649 9.83204L9.27293 6.40004C9.12272 6.24859 8.91824 6.1634 8.70493 6.1634C8.49162 6.1634 8.28714 6.24859 8.13693 6.40004Z"
                fill="#94A3B8"
              />
            </svg>
          </span>
          <span>Giỏ hàng</span>
        </div>
      </div>
       
        <div class={cx("container")}>
            <div className={cx("news")}>
                <div className={cx("news-title")}>
                    <p>TIN TỨC</p>
                </div>
        
                <div className={cx("news-content")}>
                    <div className="row">
                        <div className={cx("col-sm-6")}>
                            <div className={cx("news-item")}>
                                <img src="./images/image 43.png" alt=""/>
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
                        <div className={cx("col-sm-6")}>
                            <div className={cx("news_right")}>
                                <img src="./images/image 44.png" alt=""/>
                                <div className={cx("news_right-content")}>
                                    <p>20.04.2021 | 14:45</p>
                                <h3>Hướng dẫn cách chọn size áo khoác nam chuẩn nhất hiện nay</h3>
                                <p>
                                    Áo khoác nam không chỉ là một item thời trang giữ ấm cơ thể mà còn thể hiện phong cách...
                                </p>
                                </div>
                            </div>
                            <div className={cx("news_right")}>
                                <img src="./images/image 44.png" alt=""/>
                                <div className={cx("news_right-content")}>
                                    <p>20.04.2021 | 14:45</p>
                                <h3>Hướng dẫn cách chọn size áo khoác nam chuẩn nhất hiện nay</h3>
                                <p>
                                    Áo khoác nam không chỉ là một item thời trang giữ ấm cơ thể mà còn thể hiện phong cách...
                                </p>
                                </div>
                            </div>
                            <div className={cx("news_right")}>
                                <img src="./images/image 44.png" alt=""/>
                                <div className={cx("news_right-content")}>
                                    <p>20.04.2021 | 14:45</p>
                                <h3>Hướng dẫn cách chọn size áo khoác nam chuẩn nhất hiện nay</h3>
                                <p>
                                    Áo khoác nam không chỉ là một item thời trang giữ ấm cơ thể mà còn thể hiện phong cách...
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx("news-content")}>
                    <div className="row">
                        <div className={cx("col-sm-4")}>
                        <div className={cx("news-full")}>
                            <div className={cx("news-item")}>
                                <img src="./images/image 42.png" alt=""/>
                            </div>
                            <p>20.04.2021 | 14:45</p>
                            <h3>Hướng dẫn cách chọn size áo khoác nam chuẩn nhất hiện nay</h3>
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
                        <div className={cx("col-sm-4")}>
                        <div className={cx("news-full")}>
                            <div className={cx("news-item")}>
                                <img src="./images/image 42.png" alt=""/>
                            </div>
                            <p>20.04.2021 | 14:45</p>
                            <h3>Hướng dẫn cách chọn size áo khoác nam chuẩn nhất hiện nay</h3>
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
                        <div className={cx("col-sm-4")}>
                        <div className={cx("news-full")}>
                            <div className={cx("news-item")}>
                                <img src="./images/image 42.png" alt=""/>
                            </div>
                            <p>20.04.2021 | 14:45</p>
                            <h3>Hướng dẫn cách chọn size áo khoác nam chuẩn nhất hiện nay</h3>
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
                        <div className={cx("col-sm-4")}>
                        <div className={cx("news-full")}>
                            <div className={cx("news-item")}>
                                <img src="./images/image 422.png" alt=""/>
                            </div>
                            <p>20.04.2021 | 14:45</p>
                            <h3>Mẹo mix đồ tập gym nam vừa sành điệu vừa thoải mái cho chàngMẹo mix đồ tập gym nam vừa sành điệu vừa thoải mái cho chàng</h3>
            
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
                        <div className={cx("col-sm-4")}>
                        <div className={cx("news-full")}>
                            <div className={cx("news-item")}>
                                <img src="./images/image 42.png" alt=""/>
                            </div>
                            <p>20.04.2021 | 14:45</p>
                            <h3>Hướng dẫn cách chọn size áo khoác nam chuẩn nhất hiện nay</h3>
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
                        <div className={cx("col-sm-4")}>
                        <div className={cx("news-full")}>
                            <div className={cx("news-item")}>
                                <img src="./images/image 422.png" alt=""/>
                            </div>
                            <p>20.04.2021 | 14:45</p>
                            <h3>Hướng dẫn cách chọn size áo khoác nam chuẩn nhất hiện nay</h3>
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
        </div>
        <Footer/>
    </div>
    );
}

export default Newss