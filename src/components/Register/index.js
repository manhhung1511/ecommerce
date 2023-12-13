import React, { useState } from "react";
import styles from "./Register.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Register = ({onClose, onLogin}) => {

    const [formData, setFormData] = useState({
        username:'',
        email:'',
        password: '',
        passwordVerify: ''
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let newErrors = { };
        if (formData.username.trim() === '') {
            newErrors.username = 'Họ và tên không được để trống';
          }
        if (formData.email.trim() === '') {
          newErrors.email = 'Email không được để trống';
        }
        if (formData.password.trim() === '') {
          newErrors.password = 'Mật khẩu không được để trống';
        }
        if (formData.passwordVerify.trim() === '') {
            newErrors.passwordVerify = 'Mật khẩu xác nhận không được để trống';
          }
        if (formData.passwordVerify !== formData.password) {
            newErrors.passwordVerify = 'Mật khẩu không khớp';
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
            onClose()
        } 
    }

    return (
        <>
        <div className={cx("wrapper")}>
            <div className={cx("register")}>
                <div className={cx("register_content")}>
                    <h3>Đăng ký tài khoản</h3>
                    <p>Đăng ký để thanh toán nhanh hơn, theo dõi trạng thái đơn hàng của bạn và hơn thế nữa</p>
                    <form onSubmit={handleSubmit}>
                        <div className={cx("register_fullname")}>
                            <p>Họ và tên</p>
                            <input 
                            type="text" 
                            placeholder="Họ và tên"
                            name="username"
                            onChange={handleInputChange}
                            />
                             {errors.username && <div className="error_input">{errors.username}</div>}
                        </div>

                        <div className={cx("register_email")}>
                            <p>Email</p> 
                            <input 
                            type="email" 
                            placeholder="Nhập email"
                            name="email"
                            onChange={handleInputChange}
                            />
                             {errors.email && <div className="error_input">{errors.email}</div>}
                        </div>

                        <div className={cx("register_password")}>
                            <p>Mật khẩu</p>
                            <input 
                            type="password" 
                            placeholder="Nhập mật khẩu"
                            name="password"
                            onChange={handleInputChange}
                            />
                             {errors.password && <div className="error_input">{errors.password}</div>}
                        </div>

                        <div className={cx("register_password-verify")}>
                            <p>Nhập lại mật khẩu</p>
                            <input 
                            type="password" 
                            placeholder="Nhập lại mật khẩu"
                            name="passwordVerify"
                            onChange={handleInputChange}
                            />
                             {errors.passwordVerify && <div className="error_input">{errors.passwordVerify}</div>}
                        </div>
                        <button className={cx("register_button")}>Đăng ký</button>
                    </form>
                        <button className={cx("login_google")}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <g clipPath="url(#clip0_149_22321)">
                                <path d="M3.564 7.51C4.39601 5.85324 5.67237 4.46051 7.25043 3.48747C8.82849 2.51443 10.6461 1.99942 12.5 2C15.195 2 17.459 2.99 19.19 4.605L16.323 7.473C15.286 6.482 13.968 5.977 12.5 5.977C9.895 5.977 7.69 7.737 6.905 10.1C6.705 10.7 6.591 11.34 6.591 12C6.591 12.66 6.705 13.3 6.905 13.9C7.691 16.264 9.895 18.023 12.5 18.023C13.845 18.023 14.99 17.668 15.886 17.068C16.4054 16.726 16.8501 16.2822 17.1932 15.7635C17.5363 15.2448 17.7706 14.6619 17.882 14.05H12.5V10.182H21.918C22.036 10.836 22.1 11.518 22.1 12.227C22.1 15.273 21.01 17.837 19.118 19.577C17.464 21.105 15.2 22 12.5 22C11.1866 22.0005 9.88604 21.7422 8.67254 21.2399C7.45905 20.7375 6.35645 20.0009 5.42776 19.0722C4.49907 18.1436 3.7625 17.041 3.26013 15.8275C2.75777 14.614 2.49948 13.3134 2.5 12C2.5 10.386 2.886 8.86 3.564 7.51Z" fill="#E54335"/>
                                <path d="M6.591 12C6.591 11.34 6.705 10.7 6.905 10.1L3.564 7.51001C2.886 8.86001 2.5 10.386 2.5 12C2.49948 13.3134 2.75777 14.614 3.26013 15.8275C3.7625 17.041 4.49907 18.1436 5.42776 19.0723C6.35645 20.0009 7.45905 20.7375 8.67254 21.2399C9.88604 21.7422 11.1866 22.0005 12.5 22C15.2 22 17.464 21.105 19.118 19.577C21.01 17.837 22.1 15.273 22.1 12.227C22.1 11.518 22.036 10.836 21.918 10.182H12.5V14.05H17.882C17.7706 14.6619 17.5363 15.2448 17.1932 15.7635C16.8501 16.2822 16.4054 16.726 15.886 17.068C14.99 17.668 13.845 18.023 12.5 18.023C9.895 18.023 7.691 16.264 6.905 13.9C6.705 13.3 6.591 12.66 6.591 12Z" fill="#F6B704"/>
                                <path d="M12.4996 18.0229C9.89463 18.0229 7.69063 16.2639 6.90463 13.8999L3.25977 15.8273C3.76213 17.0408 4.4987 18.1434 5.42739 19.0721C6.35608 20.0008 7.45868 20.7374 8.67218 21.2397C9.88567 21.7421 11.1863 22.0004 12.4996 21.9999C15.1996 21.9999 17.4636 21.1049 19.1176 19.5769C21.0096 17.8369 22.0996 15.2729 22.0996 12.2269C22.0996 11.5179 22.0356 10.8359 21.9176 10.1819H12.4996V14.0499H17.8816C17.7702 14.6617 17.5359 15.2446 17.1928 15.7634C16.8498 16.2821 16.4051 16.7259 15.8856 17.0679C14.9896 17.6679 13.8446 18.0229 12.4996 18.0229Z" fill="#34A353"/>
                                <path d="M17.1932 15.7635C16.8501 16.2822 16.4054 16.726 15.886 17.068L19.118 19.577C21.01 17.837 22.1 15.273 22.1 12.227C22.1 11.518 22.036 10.836 21.918 10.182H12.5V14.05H17.882C17.7706 14.6619 17.5363 15.2448 17.1932 15.7635Z" fill="#4280EF"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_149_22321">
                                <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
                                </clipPath>
                            </defs>
                            </svg>
                            <span>Google</span>
                        </button>
                        <p className={cx("not_account")}>
                            Bạn đã có tài khoản? <button className={cx("login")} onClick={onLogin}>Đăng nhập ngay</button>
                        </p>
                        <button className={cx("button_off")} onClick={onClose}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M4.16748 4.16663L15.8334 15.8325" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4.16676 15.8325L15.8326 4.16663" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                </div>    
             </div>
        </div>
        </>

    )
}

export default Register