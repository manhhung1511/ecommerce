import React, { useState } from "react";
import styles from "./Qrcode.module.scss";
import classNames from "classnames/bind";
import { Link } from 'react-router-dom';
import CountdownTimer from "../../coutdown";

const cx = classNames.bind(styles);

const Qrcode = ({onClose, onData}) => {
    const [formData, setFormData] = useState({
        email:'',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let newErrors = { };
        if (formData.email.trim() === '') {
          newErrors.email = 'Email không được để trống';
        }
        if (formData.password.trim() === '') {
          newErrors.password = 'Mật khẩu không được để trống';
        }
        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        setErrors({...errors, [e.target.name]: ""})
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            localStorage.setItem('user', JSON.stringify(formData)); 
            onClose();
        } 
    }

    return (
        <>
        <div className={cx("wrapper")}>
            <div className={cx("qrcode")}>
                <h3>Quét mã QR để thanh toán</h3>
                <p><CountdownTimer/></p>
                <div className={cx("qrcode_list")}>
                    <div className={cx("qrcode_img")}>
                        <img src="https://i.postimg.cc/nr7hFTWj/nh-ch-p-m-n-h-nh-2023-12-05-230126.png" alt="" />
                    </div>
                    <div className={cx("qrcode_infor")}>
                        <p>Ngân hàng: <span>Ngân Hàng TMCP Công Thương Việt Nam(VIETINBANK)</span></p>
                        <p>Số tài khoản: <span>1G2219968686868</span></p>
                        <p>Tên tài khoản: <span>Công ty TNHH INSIDEMEN</span></p>
                        <p>Nội dung: <span>Thanh toan cho don hang 235234</span></p>
                        <p>Số tiền: <span>{onData}</span></p>
                    </div>
                </div>
             </div>
        </div>
        </>

    )
}

export default Qrcode