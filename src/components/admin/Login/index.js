import React, { useState } from "react";
import styles from "./Login.module.scss";
import classNames from "classnames/bind";
import { Link, useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (formData.email.trim() === "") {
      newErrors.email = "Email không được để trống";
    }
    if (formData.password.trim() === "") {
      newErrors.password = "Mật khẩu không được để trống";
    }
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    setErrors({ ...errors, [e.target.name]: "" });
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      navigate('/admin/dashboard')
    }
  };

  return (
    <div className={cx("login")}>
      <img className={cx("login_img")} src="../images/loginadmin.png" alt="" />
      <div className={cx("login_content")}>
            <div className={cx("login_content-logo")}>  
                <img src="https://i.postimg.cc/SKSbYFn0/Brand.png" alt=""/>
            </div>
            <div className={cx("login_content-title")}>  
                <h3>Xin chào!</h3>
            </div>
            <div className={cx("login_content-desc")}>  
                <>Chào mừng bạn đến với trang quản lý</>
            </div>
        <form onSubmit={handleSubmit}>
            <div className={cx("login_email")}>
            <p>Email</p>
            <input
                type="email"
                placeholder="Nhập email"
                name="email"
                onChange={handleInputChange}
            />
            {errors.email && <div className="error_input">{errors.email}</div>}
            </div>

            <div className={cx("login_password")}>
            <p>Mật khẩu</p>
            <input
                type="password"
                placeholder="Nhập mật khẩu"
                name="password"
                onChange={handleInputChange}
            />
            {errors.password && (
                <div className="error_input">{errors.password}</div>
            )}
            </div>
            <div className={cx("login_option")}>
            <p>
                <input className={cx("login_checkbox")} type="checkbox" name="" value="" /> <span>Nhớ mật khẩu</span>
            </p>
            <p>
                <Link to="/">Quên mật khẩu</Link>
            </p>
            </div>
            <button className={cx("login_button")}>Đăng nhập</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
