import React, { useState } from "react";
import styles from "./Dashboard.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import LineChart from "../LineChart.js";

const cx = classNames.bind(styles);

const Dashboard = () => {
  
  return (
    <div className={cx("dashboard")}>
      <h3 className={cx("dashboard_title")}>
        Chào mừng trở lại, Hung
      </h3>
      <div className={cx("row")}>
        <div className={cx("col-sm-3")}>
          <div className={cx("dashboard_sum")}>
              <p className={cx("dashboard_sum-title")}>
                Tổng bán
              </p>
              <p className={cx("dashboard_sum-price")}>
                  30.820.700 đ
              </p>
          </div>
        </div>
        <div className={cx("col-sm-3")}>
          <div className={cx("dashboard_order")}>
              <p className={cx("dashboard_order-title")}>
                Tổng đơn hàng
              </p>
              <p className={cx("dashboard_order-number")}>
                  550.012
              </p>
          </div>
        </div>
        <div className={cx("col-sm-3")}>
          <div className={cx("dashboard_order")}>
              <p className={cx("dashboard_order-title")}>
                Đơn hoàn thành
              </p>
              <p className={cx("dashboard_order-number")}>
                  549.000
              </p>
          </div>
        </div>
        <div className={cx("col-sm-3")}>
          <div className={cx("dashboard_order")}>
              <p className={cx("dashboard_order-title")}>
                Hoàn trả
              </p>
              <p className={cx("dashboard_order-number")}>
                  1.012
              </p>
          </div>
        </div>
      </div>
      <div className={cx("history_main")}>
      <div className={cx("row")}>
   
        <div className={cx("col-sm-3")}>
          <div className={cx("history")}>
              <p className={cx("history_title")}>
                  Đơn hàng mới nhất
              </p>
              <div className={cx("history_order")}>
                  <div className={cx("history_order-id")}>
                      235423
                      <p>05/12/2023</p>
                  </div>
                  <div className={cx("history_order-price")}>
                      <p>250.000 đ</p>
                      
                  </div>
              </div>
              <div className={cx("history_order")}>
                  <div className={cx("history_order-id")}>
                      235423
                      <p>05/12/2023</p>
                  </div>
                  <div className={cx("history_order-price")}>
                      <p>250.000 đ</p>
                      
                  </div>
              </div>
              <div className={cx("history_order")}>
                  <div className={cx("history_order-id")}>
                      235423
                      <p>05/12/2023</p>
                  </div>
                  <div className={cx("history_order-price")}>
                      <p>250.000 đ</p>
                      
                  </div>
              </div>
              <div className={cx("history_order")}>
                  <div className={cx("history_order-id")}>
                      235423
                      <p>05/12/2023</p>
                  </div>
                  <div className={cx("history_order-price")}>
                      <p>250.000 đ</p>
                      
                  </div>
              </div>
              <div className={cx("history_order-all")}>
                <Link to="/admin/order">
                    Xem tất cả đơn hàng  <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M8.0013 2.66675L7.0613 3.60675L10.7813 7.33341H2.66797V8.66675H10.7813L7.0613 12.3934L8.0013 13.3334L13.3346 8.00008L8.0013 2.66675Z" fill="#84818A"/>
</svg></span>
                </Link>
              </div>
          </div>
          
        </div>
        <div className={cx("col-sm-9")}>
            <LineChart />
        </div>
      </div>

    </div>
    </div>
  );
};

export default Dashboard;
