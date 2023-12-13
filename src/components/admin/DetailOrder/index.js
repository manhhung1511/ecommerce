import React, { useState } from "react";
import styles from "./DetailOrder.module.scss";
import classNames from "classnames/bind";
import { Link, useParams } from "react-router-dom";
import orders from "../../../data/order.json";

const cx = classNames.bind(styles);

const DetailOrder = () => {

  const { orderId } = useParams();

  const order = orders.find((item) => item.id == orderId )

  return (
    <div className={cx("detail")}>
        <div className={cx("detail_summary")}>
            <div className={cx("detail_title")} >
                <h3>Chi tiết đơn hàng</h3>
            </div>

            <div>
               <button className={cx("detail_printf")}>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M14.1667 14.1667H15.8333C16.7538 14.1667 17.5 13.4205 17.5 12.5V9.16667C17.5 8.24619 16.7538 7.5 15.8333 7.5H4.16667C3.24619 7.5 2.5 8.24619 2.5 9.16667V12.5C2.5 13.4205 3.24619 14.1667 4.16667 14.1667H5.83333M7.5 17.5H12.5C13.4205 17.5 14.1667 16.7538 14.1667 15.8333V12.5C14.1667 11.5795 13.4205 10.8333 12.5 10.8333H7.5C6.57953 10.8333 5.83333 11.5795 5.83333 12.5V15.8333C5.83333 16.7538 6.57953 17.5 7.5 17.5ZM14.1667 7.5V4.16667C14.1667 3.24619 13.4205 2.5 12.5 2.5H7.5C6.57953 2.5 5.83333 3.24619 5.83333 4.16667V7.5H14.1667Z" stroke="#081C66" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                    <span>In</span>
               </button>

               <button className={cx("detail_review")}>
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M12.4983 9.99996C12.4983 11.3807 11.379 12.5 9.99833 12.5C8.61762 12.5 7.49833 11.3807 7.49833 9.99996C7.49833 8.61925 8.61762 7.49996 9.99833 7.49996C11.379 7.49996 12.4983 8.61925 12.4983 9.99996Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M2.04688 9.99993C3.10877 6.61902 6.26734 4.16663 9.9987 4.16663C13.7301 4.16663 16.8887 6.61905 17.9505 9.99999C16.8886 13.3809 13.7301 15.8333 9.99872 15.8333C6.26734 15.8333 3.10875 13.3809 2.04688 9.99993Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                    </span>
                    <span>Xem trước</span>
               </button>
            </div>
        </div>

        <div className={cx("detail_main")}>
            <div className={cx("row")}>
                <div className={cx("col-sm-8")}>
                  <div className={cx("detail_order")}>
                      <div className={cx("detail_order-left")}>
                          <img style={{width: "100px"}} src={order.img} alt=""/>
                          <div className={cx("detail_order-name")}>
                              <h4>{order.product}</h4>
                              <p>{order.product1}</p>
                              <p>{order.color}</p>
                          </div>
                      </div>
                      <div className={cx("detail_order-right")}>
                          <p><span>x {order.number}</span> {order.price} đ</p>
                      </div>
                  </div>
                  <div className={cx("detail_summary-child")}>
                      <div className={cx("detail_summary-item")}>
                          <p>Tiền hàng</p>
                          <p className={cx("detail_summary-money")}>{order.number * order.price}.000đ</p>
                      </div>
                      <div className={cx("detail_summary-item")}>
                          <p>Phí vận chuyển</p>
                          <p className={cx("detail_summary-money1")}>25.000đ</p>
                      </div>
                      <div className={cx("detail_summary-item")}>
                          <p className={cx("detail_bold")}>Tổng cộng</p>
                          <p className={cx("detail_summary-money2")}>{order.number * order.price + 25.000}.000đ</p>
                      </div>
                  </div>
                </div>
                <div className={cx("col-sm-4")}>
                   <div className={cx("customer")}>
                      <h4>Khách hàng</h4>
                      <div className={cx("customer_list")}>
                          <div className={cx("customer_item")}>
                            <h4>{order.name}</h4>
                          </div>
                          <div className={cx("customer_item-his")}>
                              <div className={cx("customer_item-history")}>
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M12 11.3334H4V10H12V11.3334ZM12 8.66671H4V7.33337H12V8.66671ZM12 6.00004H4V4.66671H12V6.00004ZM2 14.6667L3 13.6667L4 14.6667L5 13.6667L6 14.6667L7 13.6667L8 14.6667L9 13.6667L10 14.6667L11 13.6667L12 14.6667L13 13.6667L14 14.6667V1.33337L13 2.33337L12 1.33337L11 2.33337L10 1.33337L9 2.33337L8 1.33337L7 2.33337L6 1.33337L5 2.33337L4 1.33337L3 2.33337L2 1.33337V14.6667Z" fill="#20C9AC"/>
                        </svg></span>
                                <h4>Lịch sử đơn hàng</h4>
                              </div>
                            <button>
                              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                <path d="M9.05469 5L13.5706 9.41074C13.9038 9.73618 13.9038 10.2638 13.5706 10.5893L9.05469 15" stroke="#3C4242" strokeWidth="1.5" strokeLinecap="round"/>
                              </svg>
                            </button>
                          </div>
                          <div className={cx("customer_item")}>
                            <h4>Thông tin liên lạc</h4>
                              <p>
                                <span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M13.332 2.66663H2.66536C1.93203 2.66663 1.3387 3.26663 1.3387 3.99996L1.33203 12C1.33203 12.7333 1.93203 13.3333 2.66536 13.3333H13.332C14.0654 13.3333 14.6654 12.7333 14.6654 12V3.99996C14.6654 3.26663 14.0654 2.66663 13.332 2.66663ZM13.332 5.33329L7.9987 8.66663L2.66536 5.33329V3.99996L7.9987 7.33329L13.332 3.99996V5.33329Z" fill="#334155"/>
    </svg></span> huuvuno1@gmail.com
                              </p>
                              <p>
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M11.332 0.673293L4.66536 0.666626C3.93203 0.666626 3.33203 1.26663 3.33203 1.99996V14C3.33203 14.7333 3.93203 15.3333 4.66536 15.3333H11.332C12.0654 15.3333 12.6654 14.7333 12.6654 14V1.99996C12.6654 1.26663 12.0654 0.673293 11.332 0.673293ZM11.332 12.6666H4.66536V3.33329H11.332V12.6666Z" fill="#334155"/>
    </svg></span> 0336662001
                              </p>
                          </div>
                          <div className={cx("customer_item")}>
                            <h4>Địa chỉ giao hàng</h4>
                              <p>
                                <span> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10.0013 1.66663C6.7763 1.66663 4.16797 4.27496 4.16797 7.49996C4.16797 11.875 10.0013 18.3333 10.0013 18.3333C10.0013 18.3333 15.8346 11.875 15.8346 7.49996C15.8346 4.27496 13.2263 1.66663 10.0013 1.66663ZM10.0013 9.58329C8.8513 9.58329 7.91797 8.64996 7.91797 7.49996C7.91797 6.34996 8.8513 5.41663 10.0013 5.41663C11.1513 5.41663 12.0846 6.34996 12.0846 7.49996C12.0846 8.64996 11.1513 9.58329 10.0013 9.58329Z" fill="#64748B"/>
    </svg>
    458 Phố Minh Khai, Khu đô thị Times City, Vĩnh Tuy, Hai Bà Trưng, Hà Nội
    </span>
                              </p>
                          </div>
                      </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
};

export default DetailOrder;
