import React, { useEffect, useState } from "react";
import styles from "./Cart.module.scss";
import classNames from "classnames/bind";
import { Link } from 'react-router-dom';


const cx = classNames.bind(styles);

const Cart = ({onClose}) => {
    return (
        <div className={cx("cart")}>
            <div className={cx("cart_content")}>
                <div className={cx("cart_content-title")}>
                    <img src="./images/tick-circle.png" alt=""/>
                    <h4>Thêm vào giỏ hàng</h4>
                </div>
                <div className={cx("cart_content-bottom")}>
                    <img src="./images/Photo Product.png" alt=""/>
                  
               
                    <div className={cx("cart_content-right")}>
                        <p>Áo thể thao</p>
                        <h4>Áo thun thể thao</h4>
                         <div className={cx("cart_content-right-child")}>
                            <div className={cx("cart_content-right1")}>
                                <button type="button">-</button>
                                <button type="button">1</button>
                                <button type="button">+</button>
                            </div>
                            <div className={cx("cart_content-right2")}>
                                <p>130.000đ</p>
                            </div>
                        </div>
                    </div>
                 </div>
              
                <div className={cx("cart_content-bill")}>
                    <div className={cx("cart_content-bill1")}>
                        <p>Tạm tính</p>
                    </div>
                    <div className={cx("cart_content-bill2")}>
                        <p>130.000đ</p>
                    </div>
                </div>
                <p className={cx("cart_content-desc")}>Thuế và phí vận chuyển sẽ được tính khi thanh toán</p>

                <div className={cx("cart_content-button")}>
                    <button type="button">Xem giỏ hàng</button>
                    <button type="button">Mua ngay</button>
                </div>
            </div>
            <button className={cx("button_off")} onClick={onClose}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4.16748 4.16663L15.8334 15.8325" stroke="#334155" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.16676 15.8325L15.8326 4.16663" stroke="#334155" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                 </svg>
            </button>
        </div>              
    )
}

export default Cart;