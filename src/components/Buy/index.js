import React, { useState } from "react";
import styles from "./Buy.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Product from "../ProductNew";
import Footer from "../Footer";

const cx = classNames.bind(styles);

const Buy = () => {
  return (
    <div className={cx("buy")}>
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
          <span>Mua hàng</span>
        </div>
      </div>

      <div className={cx("container")}>
          <div className={cx("buy_content")}>
            <h3>MUA HÀNG</h3>
            
            <div className={cx("row")}>
              <div className={cx("col-sm-8")}>
                    <div className={cx("buy_content-detail")}>
                        <h4 className={cx("buy_content-title")}>
                            Chi tiết hóa đơn
                        </h4>
                        <form>
                            <div className={cx("buy_content-username")}>
                                        <p>Họ và tên</p>
                                        <input 
                                        type="text" 
                                        placeholder="Họ và tên"
                                        name="username"
                                        />  
                            </div>
                            <div className={cx("row")}>
                                 <div className={cx("col-sm-6")}>
                                    <div className={cx("buy_content-email")}>
                                        <p>Email</p>
                                        <input 
                                            type="email" 
                                            placeholder="Email"
                                            name="email"
                                        />  
                                        </div>
                                      
                                 </div>
                                 <div className={cx("col-sm-6")}>
                                    <div className={cx("buy_content-number")}>
                                        <p>Số điện thoại</p>
                                        <input 
                                            type="tel" 
                                            placeholder="Số điện thoại"
                                            name="number"
                                            pattern="[0-9]"
                                        />  
                                    </div>
                                 </div>
                            </div>

                            <div className={cx("row")}>
                                 <div className={cx("col-sm-6")}>
                                 <div className={cx("buy_content-province")}>
                                    <p>Tỉnh/TP</p>
                                    <input 
                                        type="text" 
                                        placeholder="Tỉnh/TP"
                                        name="province"
                                    />  
                                    </div> 
                                 </div>
                                 <div className={cx("col-sm-6")}>
                                    <div className={cx("buy_content-district")}>
                                        <p>Quận/Huyện</p>
                                        <input 
                                            type="text" 
                                            placeholder="Quận/Huyện"
                                            name="district"
                                        />  
                                    </div>
                                 </div>
                            </div>
                            <div className={cx("buy_content-detail")}>
                                        <p>Địa chỉ cụ thể</p>
                                        <input 
                                        type="text" 
                                        placeholder="Địa chỉ cụ thể"
                                        name="address_detail"
                                        />  
                            </div>
                            <button className={cx("buy_submit")}>Tiếp tục thanh toán</button>
                            <div className={cx("buy_note")} >
                                <input type="checkbox" id="infor" name="vehicle1" value="note"/>
                                <label for="vehicle1">Lưu thông tin cho lần mua tiếp theo</label>
                            </div>
                        </form>
                    </div>
              </div>
              <div className={cx("col-sm-4")}>
                  <div className={cx("summary")}>
                     <div className={cx("summary_title")}>
                        <h4>
                        Tóm tắt đơn hàng
                        </h4>
                    </div>
                    {/* <form>
                        <div className={cx("summary_voucher")}>
                                    <p>Voucher</p>
                                    <input 
                                    type="text" 
                                    placeholder="Nhập mã"
                                    name="voucher"
                                    />  
                        </div>
                        <div className={cx("summary_price")}>
                            <p>
                                Giá
                            </p>
                            <div className={cx("summary_price-text")}>
                            270.000đ
                            </div>
                        </div>
                        <div className={cx("summary_price")}>
                            <p>
                            Khuyến mãi
                            </p>
                            <div className={cx("summary_price-text")}>
                            -50.000đ
                            </div>
                        </div>
                        <div className={cx("summary_price")}>
                            <p>
                            Tổng tiền
                            </p>
                            <div className={cx("summary_price-text")}>
                            220.000đ
                            </div>
                        </div>
                        <div className={cx("summary_comment")}>
                                    <p>Ghi chú</p>
                                    <textarea rows="4" cols="50" placeholder="Ghi chú">
                                    </textarea>      
                        </div>
                        <button className={cx("summary_submit")}>Gửi</button>
                    </form> */}
                  </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
  );
};

export default Buy;
