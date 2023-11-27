import React, { useState } from "react";
import styles from "./User.module.scss";
import classNames from "classnames/bind";
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const User = () => {
    const infor = JSON.parse(localStorage.getItem("user")) ?? "";
    const user = infor ? infor.username : "";
    const email = infor ? infor.email : "";
    const password = infor ? infor.password : "";

    return (
        <div className={cx("user")}>
            <div className={cx("container")}>
                  <h3>Thông tin cá nhân</h3>
                  <p>Chi tiết liên hệ</p>
                  <div className={cx("user_name")}>
                        <p>Họ và tên</p>
                        <input placeholder="Họ và tên" type="text" value={user}/>
                  </div>
                  <div className={cx("user_email")}>
                        <p>Email</p>
                        <input placeholder="Email" type="text" value={email}/>
                  </div>
                  <div className={cx("user_password")}>
                        <p>Mật khẩu</p>
                        <input placeholder="Mật khẩu" type="password" value={password}/>
                  </div>

                <p className={cx("address")}>Địa chỉ</p>
                <div className={cx("user_address")}>
                    <div className={cx("row")}>
                        <div className={cx("col-sm-6")}>
                            <div className={cx("user_address-infor")}>
                                <h4>{user}</h4>
                                <p>0963121582</p>
                                <p>6 Dinh Cong, Thanh Xuan, Ha Noi</p>
                                <button type="button">Nhà ở</button>
                                <button type="button">Địa chỉ mặc định</button>
                                <div className={cx("user_address-edit")}>
                                    <button type="button">Xóa</button>
                                    <button type="button">Chỉnh sửa</button>
                                </div>
                            </div>
                        </div>
                        <div className={cx("col-sm-6")}>
                            <div className={cx("user_address-infor")}>
                                <h4>{user}</h4>
                                <p>0963121582</p>
                                <p>6 Dinh Cong, Thanh Xuan, Ha Noi</p>
                                <button type="button">Công ty</button>
                                <div className={cx("user_address-edit")}>
                                    <button type="button">Xóa</button>
                                    <button type="button">Chỉnh sửa</button>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    );
}


export default User