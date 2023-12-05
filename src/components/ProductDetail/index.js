import React, { useEffect, useState }  from "react";
import styles from "./ProductDetail.module.scss";
import classNames from "classnames/bind";
import { Link, useParams } from 'react-router-dom';
import Product from "../ProductNew";
import Footer from "../Footer";
import Cart from "./Cart";
import Overlay from "../Overlay";
import products from "../../data/product.json";

const cx = classNames.bind(styles);

const ProductDetail = () => {
        const [isCart, setCart] = useState(false);
        const [cart, setToCart] = useState([]);

        const handleCart = () => {
            setCart(true);
        }
        const handleCloseCart = () => {
            setCart(false);
        }

        const { itemId } = useParams();

        useEffect(() => {
            const storedLikedProducts = JSON.parse(localStorage.getItem('addProducts'));
            setToCart(storedLikedProducts);
        },[])

        const handleAddToCart = (product) => {
            if(cart && cart.length > 0) {
                const check = cart.some(obj => obj.id == product.id);
                if (!check) {
                    const updatedProducts = [...cart, product];
                    setToCart(updatedProducts);
                     // Update the localStorage with the new liked products
                    localStorage.setItem('addProducts', JSON.stringify(updatedProducts));
                } else {
                    const newProduct = cart.filter(item => item !== product);
                    setToCart(newProduct);
                    localStorage.setItem('addProducts', JSON.stringify(newProduct));
                }
            } else {
                const updatedProducts = [product];
                setToCart(updatedProducts);
                 // Update the localStorage with the new liked products
                localStorage.setItem('addProducts', JSON.stringify(updatedProducts));
            }
            
        }

        const handleCartAndAddToCart = (item) => {
            handleAddToCart(item);
            handleCart();
        }
        
    return (
        <div className={cx("detail")}>
            <div className={cx("container")}>
                <div className={cx("breadcrumb")}>
                    <span>Home</span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.13693 6.40004C7.82675 6.71207 7.82675 7.21601 8.13693 7.52804L10.9689 10.4L8.13693 13.232C7.82675 13.5441 7.82675 14.048 8.13693 14.36C8.28714 14.5115 8.49162 14.5967 8.70493 14.5967C8.91824 14.5967 9.12272 14.5115 9.27293 14.36L12.6649 10.968C12.8164 10.8178 12.9016 10.6134 12.9016 10.4C12.9016 10.1867 12.8164 9.98225 12.6649 9.83204L9.27293 6.40004C9.12272 6.24859 8.91824 6.1634 8.70493 6.1634C8.49162 6.1634 8.28714 6.24859 8.13693 6.40004Z" fill="#94A3B8"/>
                        </svg>
                    </span>
                    <span>Sản phẩm</span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.13693 6.40004C7.82675 6.71207 7.82675 7.21601 8.13693 7.52804L10.9689 10.4L8.13693 13.232C7.82675 13.5441 7.82675 14.048 8.13693 14.36C8.28714 14.5115 8.49162 14.5967 8.70493 14.5967C8.91824 14.5967 9.12272 14.5115 9.27293 14.36L12.6649 10.968C12.8164 10.8178 12.9016 10.6134 12.9016 10.4C12.9016 10.1867 12.8164 9.98225 12.6649 9.83204L9.27293 6.40004C9.12272 6.24859 8.91824 6.1634 8.70493 6.1634C8.49162 6.1634 8.28714 6.24859 8.13693 6.40004Z" fill="#94A3B8"/>
                        </svg>
                    </span>
                    <span>Áo thun thể thao</span>
                </div>
            </div>
            <div className={cx("detail_content")}>
                <div className={cx("container")}>
                    <div className={cx("row")}>
                    {
                        products.map((item, index) => {
                            if(item.id == itemId) {
                                return (
                                    <>

                            <div className={cx("col-sm-1")}>
                            <div className={cx("detail_content-mockup")}>
                                <div>
                                     <img src={item.image1} alt=""/>
                                </div>
                                <div className={cx("detail_content-mockup-item")}>
                                    <img src={item.image2} alt=""/>
                                </div>
                                <div className={cx("detail_content-mockup-item")}>
                                     <img src={item.image3} alt=""/>
                                </div>
                                <div className={cx("detail_content-mockup-item")}>
                                    <img src={item.image4} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className={cx("col-sm-5")}>
                            <div className={cx("detail_content-image")}>
                                 <img style={{width: "100%", height:"100%"}} src={item.image5} alt=""/>
                            </div>
                        </div>
                        <div className={cx("col-sm-6")}>
                            <div className={cx("detail_content-right")}>
                                <h3>{item.name}</h3> 
                                <p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M7.52447 1.46352C7.67415 1.00287 8.32585 1.00287 8.47553 1.46353L9.68386 5.18237C9.75079 5.38838 9.94277 5.52786 10.1594 5.52786H14.0696C14.554 5.52786 14.7554 6.14767 14.3635 6.43237L11.2001 8.73075C11.0248 8.85807 10.9515 9.08375 11.0184 9.28976L12.2268 13.0086C12.3764 13.4693 11.8492 13.8523 11.4573 13.5676L8.29389 11.2693C8.11865 11.1419 7.88135 11.1419 7.70611 11.2693L4.54267 13.5676C4.15081 13.8523 3.62357 13.4693 3.77325 13.0086L4.98157 9.28976C5.04851 9.08375 4.97518 8.85807 4.79994 8.73075L1.6365 6.43237C1.24464 6.14767 1.44603 5.52786 1.93039 5.52786H5.84062C6.05723 5.52786 6.24921 5.38838 6.31614 5.18237L7.52447 1.46352Z" fill="#F1D02C"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M7.52447 1.46352C7.67415 1.00287 8.32585 1.00287 8.47553 1.46353L9.68386 5.18237C9.75079 5.38838 9.94277 5.52786 10.1594 5.52786H14.0696C14.554 5.52786 14.7554 6.14767 14.3635 6.43237L11.2001 8.73075C11.0248 8.85807 10.9515 9.08375 11.0184 9.28976L12.2268 13.0086C12.3764 13.4693 11.8492 13.8523 11.4573 13.5676L8.29389 11.2693C8.11865 11.1419 7.88135 11.1419 7.70611 11.2693L4.54267 13.5676C4.15081 13.8523 3.62357 13.4693 3.77325 13.0086L4.98157 9.28976C5.04851 9.08375 4.97518 8.85807 4.79994 8.73075L1.6365 6.43237C1.24464 6.14767 1.44603 5.52786 1.93039 5.52786H5.84062C6.05723 5.52786 6.24921 5.38838 6.31614 5.18237L7.52447 1.46352Z" fill="#F1D02C"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M7.52447 1.46352C7.67415 1.00287 8.32585 1.00287 8.47553 1.46353L9.68386 5.18237C9.75079 5.38838 9.94277 5.52786 10.1594 5.52786H14.0696C14.554 5.52786 14.7554 6.14767 14.3635 6.43237L11.2001 8.73075C11.0248 8.85807 10.9515 9.08375 11.0184 9.28976L12.2268 13.0086C12.3764 13.4693 11.8492 13.8523 11.4573 13.5676L8.29389 11.2693C8.11865 11.1419 7.88135 11.1419 7.70611 11.2693L4.54267 13.5676C4.15081 13.8523 3.62357 13.4693 3.77325 13.0086L4.98157 9.28976C5.04851 9.08375 4.97518 8.85807 4.79994 8.73075L1.6365 6.43237C1.24464 6.14767 1.44603 5.52786 1.93039 5.52786H5.84062C6.05723 5.52786 6.24921 5.38838 6.31614 5.18237L7.52447 1.46352Z" fill="#F1D02C"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M7.52447 1.46352C7.67415 1.00287 8.32585 1.00287 8.47553 1.46353L9.68386 5.18237C9.75079 5.38838 9.94277 5.52786 10.1594 5.52786H14.0696C14.554 5.52786 14.7554 6.14767 14.3635 6.43237L11.2001 8.73075C11.0248 8.85807 10.9515 9.08375 11.0184 9.28976L12.2268 13.0086C12.3764 13.4693 11.8492 13.8523 11.4573 13.5676L8.29389 11.2693C8.11865 11.1419 7.88135 11.1419 7.70611 11.2693L4.54267 13.5676C4.15081 13.8523 3.62357 13.4693 3.77325 13.0086L4.98157 9.28976C5.04851 9.08375 4.97518 8.85807 4.79994 8.73075L1.6365 6.43237C1.24464 6.14767 1.44603 5.52786 1.93039 5.52786H5.84062C6.05723 5.52786 6.24921 5.38838 6.31614 5.18237L7.52447 1.46352Z" fill="#F1D02C"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M7.52447 1.46352C7.67415 1.00287 8.32585 1.00287 8.47553 1.46353L9.68386 5.18237C9.75079 5.38838 9.94277 5.52786 10.1594 5.52786H14.0696C14.554 5.52786 14.7554 6.14767 14.3635 6.43237L11.2001 8.73075C11.0248 8.85807 10.9515 9.08375 11.0184 9.28976L12.2268 13.0086C12.3764 13.4693 11.8492 13.8523 11.4573 13.5676L8.29389 11.2693C8.11865 11.1419 7.88135 11.1419 7.70611 11.2693L4.54267 13.5676C4.15081 13.8523 3.62357 13.4693 3.77325 13.0086L4.98157 9.28976C5.04851 9.08375 4.97518 8.85807 4.79994 8.73075L1.6365 6.43237C1.24464 6.14767 1.44603 5.52786 1.93039 5.52786H5.84062C6.05723 5.52786 6.24921 5.38838 6.31614 5.18237L7.52447 1.46352Z" fill="#F1D02C"/>
                                    </svg>
                                    <span>520 reviews</span>
                                </p>
                                <div className={cx("detail_content-right-price")}>
                                    {item.price}
                                    <span> {item.price_sales} </span>
                                </div>
                                <div className={cx("detail_content-right-attr")}>
                                    Màu sắc:
                                    <span>Đen</span>
                                </div>
                                <div className={cx("detail_content-right-color")}>
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                        <rect x="0.520416" y="0.520416" width="34.9592" height="34.9592" rx="17.4796" fill="#FFF1DE" stroke="url(#paint0_linear_110_9601)" stroke-width="1.04083"/>
                                        <rect x="3.69766" y="3.69693" width="28.6062" height="28.6062" rx="14.3031" fill="#161414" stroke="#E0E0E0" stroke-width="1.04083"/>
                                        <defs>
                                            <linearGradient id="paint0_linear_110_9601" x1="-2.85" y1="-18.1287" x2="60.0071" y2="-17.3948" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#EE4343"/>
                                            <stop offset="1" stop-color="#A62A0F"/>
                                            </linearGradient>
                                        </defs>
                                     </svg>
                                    </span>
                                    <span>
                                         <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                        <rect x="0.520416" y="0.520416" width="34.9592" height="34.9592" rx="17.4796" fill="white" stroke="#E0E0E0" stroke-width="1.04083"/>
                                        <rect x="3.69669" y="3.69693" width="28.6062" height="28.6062" rx="14.3031" fill="#D3D3D3" stroke="#E0E0E0" stroke-width="1.04083"/>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                        <rect x="0.520416" y="0.520416" width="34.9592" height="34.9592" rx="17.4796" fill="white" stroke="#E0E0E0" stroke-width="1.04083"/>
                                        <rect x="3.69669" y="3.69693" width="28.6062" height="28.6062" rx="14.3031" fill="#81806C" stroke="#E0E0E0" stroke-width="1.04083"/>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                        <rect x="0.520416" y="0.520416" width="34.9592" height="34.9592" rx="17.4796" fill="white" stroke="#E0E0E0" stroke-width="1.04083"/>
                                        <rect x="3.69669" y="3.69693" width="28.6062" height="28.6062" rx="14.3031" fill="#3C7D6F" stroke="#E0E0E0" stroke-width="1.04083"/>
                                        </svg>
                                    </span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                        <rect x="0.520416" y="0.520416" width="34.9592" height="34.9592" rx="17.4796" fill="white" stroke="#E0E0E0" stroke-width="1.04083"/>
                                        <rect x="3.69669" y="3.69693" width="28.6062" height="28.6062" rx="14.3031" fill="#CFA4A5" stroke="#E0E0E0" stroke-width="1.04083"/>
                                        </svg>
                                    </span>
                                </div>
                                <div className={cx("detail_content-right-size1")}>
                                    <span>Kích cỡ: Xem bảng kích cỡ</span> 
                                </div>
                                <div className={cx("detail_content-right-size")}>
                                    <button type="button">XS</button>
                                    <button type="button">S</button>
                                    <button type="button">M</button>
                                    <button type="button">L</button>
                                    <button type="button">XL</button>
                                </div>
                                <div className={cx("detail_content-right-number")}>
                                    <div className={cx("detail_content-right-number-left")}>
                                        <button type="button" className={cx("detail_content-right-number-left-top1")}>
                                            -
                                        </button>
                                        <button type="button" className={cx("detail_content-right-number1")}>
                                            1
                                        </button>
                                        <button type="button" className={cx("detail_content-right-number-left-top1")}>
                                            +
                                        </button>
                                    </div>
                                    <div className={cx("detail_content-right-number-right")}>
                                        <button type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                            <path d="M18 17.5L13 12.5M14.6667 8.33333C14.6667 11.555 12.055 14.1667 8.83333 14.1667C5.61167 14.1667 3 11.555 3 8.33333C3 5.11167 5.61167 2.5 8.83333 2.5C12.055 2.5 14.6667 5.11167 14.6667 8.33333Z" stroke="#081C66" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M8.8335 5.83325V8.33325M8.8335 8.33325V10.8333M8.8335 8.33325H11.3335M8.8335 8.33325H6.3335" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            <span>
                                                Xem trước sản phẩm
                                            </span> 
                                        </button>
                                    </div>
                                </div>
                                    <div className={cx("detail_content-right-buy")}>
                                        <button type="button" className={cx("detail_content-right-buy-cart")} onClick={() => handleCartAndAddToCart(item)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M2.5 3.33325H3.00526C3.85578 3.33325 4.56986 3.97367 4.6621 4.81917L5.3379 11.014C5.43014 11.8595 6.14422 12.4999 6.99474 12.4999H14.205C14.9669 12.4999 15.6317 11.9833 15.82 11.2451L16.9699 6.73584C17.2387 5.68204 16.4425 4.65733 15.355 4.65733H5.5M5.52063 15.5207H6.14563M5.52063 16.1457H6.14563M14.6873 15.5207H15.3123M14.6873 16.1457H15.3123M6.66667 15.8333C6.66667 16.2935 6.29357 16.6666 5.83333 16.6666C5.3731 16.6666 5 16.2935 5 15.8333C5 15.373 5.3731 14.9999 5.83333 14.9999C6.29357 14.9999 6.66667 15.373 6.66667 15.8333ZM15.8333 15.8333C15.8333 16.2935 15.4602 16.6666 15 16.6666C14.5398 16.6666 14.1667 16.2935 14.1667 15.8333C14.1667 15.373 14.5398 14.9999 15 14.9999C15.4602 14.9999 15.8333 15.373 15.8333 15.8333Z" stroke="#081C66" stroke-width="1.5" stroke-linecap="round"/>
                                            </svg>
                                            <span>Thêm vào giỏ hàng</span>
                                        </button>

                                        <button type="button" className={cx("detail_content-right-buy-now")}>
                                            <span>Mua ngay</span>
                                        </button>
                                    </div>
                                    <div className={cx("detail_content-right-desc")}>
                                        <div className={cx("detail_content-right-desc1")}>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M2.5 6.25H17.5M5.5 13.75H8.5M11.5 13.75H14.5M4.9 17.5H15.1C15.9401 17.5 16.3601 17.5 16.681 17.2956C16.9632 17.1159 17.1927 16.829 17.3365 16.4762C17.5 16.0751 17.5 15.5501 17.5 14.5V5.5C17.5 4.4499 17.5 3.92485 17.3365 3.52377C17.1927 3.17096 16.9632 2.88413 16.681 2.70436C16.3601 2.5 15.9401 2.5 15.1 2.5H4.9C4.05992 2.5 3.63988 2.5 3.31901 2.70436C3.03677 2.88413 2.8073 3.17096 2.66349 3.52377C2.5 3.92485 2.5 4.4499 2.5 5.5V14.5C2.5 15.5501 2.5 16.0751 2.66349 16.4762C2.8073 16.829 3.03677 17.1159 3.31901 17.2956C3.63988 17.5 4.05992 17.5 4.9 17.5Z" stroke="#3C4242" stroke-width="1.5" stroke-linecap="round"/>
                                                </svg>
                                                <span>Thanh toán an toàn</span>
                                            </div>
                                            <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                        <path d="M13.0293 16.6666H6.97104C6.13457 16.6666 5.45648 16.0005 5.45648 15.1788V9.64962C5.45648 9.21944 4.927 9.004 4.61734 9.30818C4.33462 9.5859 3.85062 9.43353 3.78489 9.04613L3.35417 6.50754C3.25188 5.90466 3.53535 5.30166 4.06889 4.9872L6.8306 3.3595C6.91103 3.31209 7.01476 3.3304 7.07336 3.40235C8.57383 5.24476 11.4265 5.24476 12.927 3.40235C12.9856 3.3304 13.0893 3.31209 13.1697 3.3595L15.9314 4.9872C16.465 5.30166 16.7484 5.90466 16.6462 6.50754L16.2154 9.04613C16.1497 9.43353 15.6657 9.5859 15.383 9.30818C15.0733 9.004 14.5438 9.21944 14.5438 9.64962V15.1788C14.5438 16.0005 13.8658 16.6666 13.0293 16.6666Z" stroke="#3C4242" stroke-width="1.5"/>
                                                    </svg>
                                                <span>Kích thước vừa vặn</span>
                                            </div>
                                        </div>
                                        <div className={cx("detail_content-right-desc2")}>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M11.5 13.889V4.55564C11.5 4.34086 11.3321 4.16675 11.125 4.16675H2.875C2.66789 4.16675 2.5 4.34086 2.5 4.55564V13.889C2.5 14.1037 2.66789 14.2779 2.875 14.2779H4M11.5 13.889C11.5 14.1037 11.3321 14.2779 11.125 14.2779H7M11.5 13.889V6.88897C11.5 6.67419 11.6679 6.50008 11.875 6.50008H14.3447C14.4441 6.50008 14.5395 6.54105 14.6098 6.61398L17.3902 9.49729C17.4605 9.57022 17.5 9.66914 17.5 9.77228V13.889C17.5 14.1037 17.3321 14.2779 17.125 14.2779H16M11.5 13.889C11.5 14.1037 11.6679 14.2779 11.875 14.2779H13M4 14.2779C4 15.137 4.67157 15.8334 5.5 15.8334C6.32843 15.8334 7 15.137 7 14.2779M4 14.2779C4 13.4187 4.67157 12.7223 5.5 12.7223C6.32843 12.7223 7 13.4187 7 14.2779M13 14.2779C13 15.137 13.6716 15.8334 14.5 15.8334C15.3284 15.8334 16 15.137 16 14.2779M13 14.2779C13 13.4187 13.6716 12.7223 14.5 12.7223C15.3284 12.7223 16 13.4187 16 14.2779" stroke="#3C4242" stroke-width="1.5"/>
                                                </svg>
                                                <span>Miễn phí vận chuyển</span>
                                            </div>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M7.0372 15.1851C7.0372 16.0033 6.37392 16.6666 5.55572 16.6666C4.73752 16.6666 4.07424 16.0033 4.07424 15.1851C4.07424 14.3669 4.73752 13.7036 5.55572 13.7036C6.37392 13.7036 7.0372 14.3669 7.0372 15.1851ZM7.0372 15.1851H12.9631C13.7813 15.1851 14.4446 14.5218 14.4446 13.7036V10.7407M12.9631 4.81473C12.9631 5.63293 13.6264 6.29621 14.4446 6.29621C15.2628 6.29621 15.9261 5.63293 15.9261 4.81473C15.9261 3.99653 15.2628 3.33325 14.4446 3.33325C13.6264 3.33325 12.9631 3.99653 12.9631 4.81473ZM12.9631 4.81473H7.0372C6.219 4.81473 5.55572 5.47802 5.55572 6.29621V9.25918M16.6668 12.2221L14.7065 10.1164C14.5619 9.96108 14.3274 9.96108 14.1827 10.1164L12.2224 12.2221M7.77794 7.7777L5.81761 9.88339C5.67297 10.0388 5.43847 10.0388 5.29383 9.88339L3.3335 7.7777" stroke="#3C4242" stroke-width="1.5" stroke-linecap="round"/>
                                                </svg>
                                                <span>Sản phẩm chất lượng</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div> 
                            </>
                                )
                            }
                    })
                    }
                       
                    </div>
                </div>
            </div>
            <div className={cx("container")}>
                <div className={cx("detail_bottom")}>
                    <div className={cx("detail_bottom-title")}>
                        <h3>CHI TIẾT SẢN PHẨM</h3>
                        <h3>CHÍNH SÁCH VẬN CHUYỂN</h3>
                    </div>  
                    <div className={cx("detail_bottom-content")}>
                        <div className={cx("row")}>
                            <div className={cx("col-sm-7")}>
                                <h4>MÔ TẢ</h4>
                                {
                                    products.map((item, index) => {
                                    if(item.id == itemId) {
                                        return (
                                            <>
                                                <p>{item.description}</p>
                                            </>
                                        )
                                    }
                                    })
                                }
                            </div> 
                            <div className={cx("col-sm-5")}>
                                <h4>TÍNH NĂNG</h4>
                                <p>1. Sản xuất 100% cotton</p>                      
                                <p>2. Mềm mại và thoải mái</p>
                                <p>3. Hoàn hảo cho trang phục hàng ngày</p>
                                <p>4. Sản xuất 100% cotton</p>
                                <p>5. Một chiếc áo phông đen trơn có thể phù hợp với mọi vóc dáng và phong cách. Nó có thể kết hợp với nhiều loại trang phục khác nhau, từ quần jean, áo khoác</p>
                            </div> 
                        </div>
                    </div>
                </div>  
                <div className={cx("detail_feedback")}>
                    <div className={cx("row")}>
                        <div className={cx("col-sm-4")}>
                            <h4>ĐÁNH GIÁ</h4>
                            <p>Đánh giá cùng chúng tôi</p>

                            <form>
                                <div className={cx("detail_feedback-username")}>
                                <p>Tên của bạn</p>
                                <input 
                                type="text" 
                                placeholder="Nhập tên của bạn"
                                name="username"
                                />  
                                </div>
                                <div className={cx("detail_feedback-email")}>
                                <p>Email</p>
                                <input 
                                type="text" 
                                placeholder="Nhập email"
                                name="email"
                                />  
                                </div>
                                <div className={cx("detail_feedback-star")}>
                                    <p>Đánh giá</p>
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M9.52447 1.46353C9.67415 1.00287 10.3259 1.00287 10.4755 1.46353L12.1329 6.56434C12.1998 6.77035 12.3918 6.90983 12.6084 6.90983H17.9717C18.4561 6.90983 18.6575 7.52964 18.2656 7.81434L13.9266 10.9668C13.7514 11.0941 13.678 11.3198 13.745 11.5258L15.4023 16.6266C15.552 17.0873 15.0248 17.4704 14.6329 17.1857L10.2939 14.0332C10.1186 13.9059 9.88135 13.9059 9.70611 14.0332L5.3671 17.1857C4.97524 17.4704 4.448 17.0873 4.59768 16.6266L6.25503 11.5258C6.32197 11.3198 6.24864 11.0941 6.07339 10.9668L1.73438 7.81434C1.34253 7.52964 1.54392 6.90983 2.02828 6.90983H7.39159C7.6082 6.90983 7.80018 6.77035 7.86712 6.56434L9.52447 1.46353Z" fill="#CBD5E1"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M9.52447 1.46353C9.67415 1.00287 10.3259 1.00287 10.4755 1.46353L12.1329 6.56434C12.1998 6.77035 12.3918 6.90983 12.6084 6.90983H17.9717C18.4561 6.90983 18.6575 7.52964 18.2656 7.81434L13.9266 10.9668C13.7514 11.0941 13.678 11.3198 13.745 11.5258L15.4023 16.6266C15.552 17.0873 15.0248 17.4704 14.6329 17.1857L10.2939 14.0332C10.1186 13.9059 9.88135 13.9059 9.70611 14.0332L5.3671 17.1857C4.97524 17.4704 4.448 17.0873 4.59768 16.6266L6.25503 11.5258C6.32197 11.3198 6.24864 11.0941 6.07339 10.9668L1.73438 7.81434C1.34253 7.52964 1.54392 6.90983 2.02828 6.90983H7.39159C7.6082 6.90983 7.80018 6.77035 7.86712 6.56434L9.52447 1.46353Z" fill="#CBD5E1"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M9.52447 1.46353C9.67415 1.00287 10.3259 1.00287 10.4755 1.46353L12.1329 6.56434C12.1998 6.77035 12.3918 6.90983 12.6084 6.90983H17.9717C18.4561 6.90983 18.6575 7.52964 18.2656 7.81434L13.9266 10.9668C13.7514 11.0941 13.678 11.3198 13.745 11.5258L15.4023 16.6266C15.552 17.0873 15.0248 17.4704 14.6329 17.1857L10.2939 14.0332C10.1186 13.9059 9.88135 13.9059 9.70611 14.0332L5.3671 17.1857C4.97524 17.4704 4.448 17.0873 4.59768 16.6266L6.25503 11.5258C6.32197 11.3198 6.24864 11.0941 6.07339 10.9668L1.73438 7.81434C1.34253 7.52964 1.54392 6.90983 2.02828 6.90983H7.39159C7.6082 6.90983 7.80018 6.77035 7.86712 6.56434L9.52447 1.46353Z" fill="#CBD5E1"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M9.52447 1.46353C9.67415 1.00287 10.3259 1.00287 10.4755 1.46353L12.1329 6.56434C12.1998 6.77035 12.3918 6.90983 12.6084 6.90983H17.9717C18.4561 6.90983 18.6575 7.52964 18.2656 7.81434L13.9266 10.9668C13.7514 11.0941 13.678 11.3198 13.745 11.5258L15.4023 16.6266C15.552 17.0873 15.0248 17.4704 14.6329 17.1857L10.2939 14.0332C10.1186 13.9059 9.88135 13.9059 9.70611 14.0332L5.3671 17.1857C4.97524 17.4704 4.448 17.0873 4.59768 16.6266L6.25503 11.5258C6.32197 11.3198 6.24864 11.0941 6.07339 10.9668L1.73438 7.81434C1.34253 7.52964 1.54392 6.90983 2.02828 6.90983H7.39159C7.6082 6.90983 7.80018 6.77035 7.86712 6.56434L9.52447 1.46353Z" fill="#CBD5E1"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M9.52447 1.46353C9.67415 1.00287 10.3259 1.00287 10.4755 1.46353L12.1329 6.56434C12.1998 6.77035 12.3918 6.90983 12.6084 6.90983H17.9717C18.4561 6.90983 18.6575 7.52964 18.2656 7.81434L13.9266 10.9668C13.7514 11.0941 13.678 11.3198 13.745 11.5258L15.4023 16.6266C15.552 17.0873 15.0248 17.4704 14.6329 17.1857L10.2939 14.0332C10.1186 13.9059 9.88135 13.9059 9.70611 14.0332L5.3671 17.1857C4.97524 17.4704 4.448 17.0873 4.59768 16.6266L6.25503 11.5258C6.32197 11.3198 6.24864 11.0941 6.07339 10.9668L1.73438 7.81434C1.34253 7.52964 1.54392 6.90983 2.02828 6.90983H7.39159C7.6082 6.90983 7.80018 6.77035 7.86712 6.56434L9.52447 1.46353Z" fill="#CBD5E1"/>
                                        </svg>
                                    </p>
                                </div>
                                <div className={cx("detail_feedback-comment")}>
                                    <p>Bình luận</p>
                                    <textarea rows="4" cols="50">
                                        Bình luận
                                    </textarea>      
                                </div>
                                <button className={cx("detail_feedback-button")}>Gửi</button>
                            </form>
                        </div>
                        <div className={cx("col-sm-8")}>
                            <div className={cx("detail_comment")}>
                                <div className={cx("detail_comment-top")}>
                                    <div className={cx("detail_comment-top-name")}>
                                        <img src="./images/comment.png" alt=""/>
                                        <div className={cx("detail_comment-top-infor")}>
                                            <p>Mạnh Hùng</p>
                                            <p>15/11/2023</p>
                                        </div>
                                    </div>
                                    <div className={cx("detail_comment-top-star")}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.52447 1.46353C9.67415 1.00287 10.3259 1.00287 10.4755 1.46353L12.1329 6.56434C12.1998 6.77035 12.3918 6.90983 12.6084 6.90983H17.9717C18.4561 6.90983 18.6575 7.52964 18.2656 7.81434L13.9266 10.9668C13.7514 11.0941 13.678 11.3198 13.745 11.5258L15.4023 16.6266C15.552 17.0873 15.0248 17.4704 14.6329 17.1857L10.2939 14.0332C10.1186 13.9059 9.88135 13.9059 9.70611 14.0332L5.3671 17.1857C4.97524 17.4704 4.448 17.0873 4.59768 16.6266L6.25503 11.5258C6.32197 11.3198 6.24864 11.0941 6.07339 10.9668L1.73438 7.81434C1.34253 7.52964 1.54392 6.90983 2.02828 6.90983H7.39159C7.6082 6.90983 7.80018 6.77035 7.86712 6.56434L9.52447 1.46353Z" fill="#F1D02C"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.52447 1.46353C9.67415 1.00287 10.3259 1.00287 10.4755 1.46353L12.1329 6.56434C12.1998 6.77035 12.3918 6.90983 12.6084 6.90983H17.9717C18.4561 6.90983 18.6575 7.52964 18.2656 7.81434L13.9266 10.9668C13.7514 11.0941 13.678 11.3198 13.745 11.5258L15.4023 16.6266C15.552 17.0873 15.0248 17.4704 14.6329 17.1857L10.2939 14.0332C10.1186 13.9059 9.88135 13.9059 9.70611 14.0332L5.3671 17.1857C4.97524 17.4704 4.448 17.0873 4.59768 16.6266L6.25503 11.5258C6.32197 11.3198 6.24864 11.0941 6.07339 10.9668L1.73438 7.81434C1.34253 7.52964 1.54392 6.90983 2.02828 6.90983H7.39159C7.6082 6.90983 7.80018 6.77035 7.86712 6.56434L9.52447 1.46353Z" fill="#F1D02C"/>
                                        </svg><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.52447 1.46353C9.67415 1.00287 10.3259 1.00287 10.4755 1.46353L12.1329 6.56434C12.1998 6.77035 12.3918 6.90983 12.6084 6.90983H17.9717C18.4561 6.90983 18.6575 7.52964 18.2656 7.81434L13.9266 10.9668C13.7514 11.0941 13.678 11.3198 13.745 11.5258L15.4023 16.6266C15.552 17.0873 15.0248 17.4704 14.6329 17.1857L10.2939 14.0332C10.1186 13.9059 9.88135 13.9059 9.70611 14.0332L5.3671 17.1857C4.97524 17.4704 4.448 17.0873 4.59768 16.6266L6.25503 11.5258C6.32197 11.3198 6.24864 11.0941 6.07339 10.9668L1.73438 7.81434C1.34253 7.52964 1.54392 6.90983 2.02828 6.90983H7.39159C7.6082 6.90983 7.80018 6.77035 7.86712 6.56434L9.52447 1.46353Z" fill="#F1D02C"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.52447 1.46353C9.67415 1.00287 10.3259 1.00287 10.4755 1.46353L12.1329 6.56434C12.1998 6.77035 12.3918 6.90983 12.6084 6.90983H17.9717C18.4561 6.90983 18.6575 7.52964 18.2656 7.81434L13.9266 10.9668C13.7514 11.0941 13.678 11.3198 13.745 11.5258L15.4023 16.6266C15.552 17.0873 15.0248 17.4704 14.6329 17.1857L10.2939 14.0332C10.1186 13.9059 9.88135 13.9059 9.70611 14.0332L5.3671 17.1857C4.97524 17.4704 4.448 17.0873 4.59768 16.6266L6.25503 11.5258C6.32197 11.3198 6.24864 11.0941 6.07339 10.9668L1.73438 7.81434C1.34253 7.52964 1.54392 6.90983 2.02828 6.90983H7.39159C7.6082 6.90983 7.80018 6.77035 7.86712 6.56434L9.52447 1.46353Z" fill="#F1D02C"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.52447 1.46353C9.67415 1.00287 10.3259 1.00287 10.4755 1.46353L12.1329 6.56434C12.1998 6.77035 12.3918 6.90983 12.6084 6.90983H17.9717C18.4561 6.90983 18.6575 7.52964 18.2656 7.81434L13.9266 10.9668C13.7514 11.0941 13.678 11.3198 13.745 11.5258L15.4023 16.6266C15.552 17.0873 15.0248 17.4704 14.6329 17.1857L10.2939 14.0332C10.1186 13.9059 9.88135 13.9059 9.70611 14.0332L5.3671 17.1857C4.97524 17.4704 4.448 17.0873 4.59768 16.6266L6.25503 11.5258C6.32197 11.3198 6.24864 11.0941 6.07339 10.9668L1.73438 7.81434C1.34253 7.52964 1.54392 6.90983 2.02828 6.90983H7.39159C7.6082 6.90983 7.80018 6.77035 7.86712 6.56434L9.52447 1.46353Z" fill="#F1D02C"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className={cx("detail_comment-bottom")}>
                                    <p>
                                        Sản phẩm tốt
                                    </p>
                                    <p>
                                        Một chiếc áo thun là món đồ cổ điển có thể mặc trong bất kỳ dịp nào. Thật thoải mái, linh hoạt và phong cách
                                    </p>
                                </div>
                            </div>
                            <div className={cx("detail_comment")}>
                                <div className={cx("detail_comment-top")}>
                                    <div className={cx("detail_comment-top-name")}>
                                        <img src="./images/comment.png" alt=""/>
                                        <div className={cx("detail_comment-top-infor")}>
                                            <p>Mạnh Hùng</p>
                                            <p>15/11/2023</p>
                                        </div>
                                    </div>
                                    <div className={cx("detail_comment-top-star")}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.52447 1.46353C9.67415 1.00287 10.3259 1.00287 10.4755 1.46353L12.1329 6.56434C12.1998 6.77035 12.3918 6.90983 12.6084 6.90983H17.9717C18.4561 6.90983 18.6575 7.52964 18.2656 7.81434L13.9266 10.9668C13.7514 11.0941 13.678 11.3198 13.745 11.5258L15.4023 16.6266C15.552 17.0873 15.0248 17.4704 14.6329 17.1857L10.2939 14.0332C10.1186 13.9059 9.88135 13.9059 9.70611 14.0332L5.3671 17.1857C4.97524 17.4704 4.448 17.0873 4.59768 16.6266L6.25503 11.5258C6.32197 11.3198 6.24864 11.0941 6.07339 10.9668L1.73438 7.81434C1.34253 7.52964 1.54392 6.90983 2.02828 6.90983H7.39159C7.6082 6.90983 7.80018 6.77035 7.86712 6.56434L9.52447 1.46353Z" fill="#F1D02C"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.52447 1.46353C9.67415 1.00287 10.3259 1.00287 10.4755 1.46353L12.1329 6.56434C12.1998 6.77035 12.3918 6.90983 12.6084 6.90983H17.9717C18.4561 6.90983 18.6575 7.52964 18.2656 7.81434L13.9266 10.9668C13.7514 11.0941 13.678 11.3198 13.745 11.5258L15.4023 16.6266C15.552 17.0873 15.0248 17.4704 14.6329 17.1857L10.2939 14.0332C10.1186 13.9059 9.88135 13.9059 9.70611 14.0332L5.3671 17.1857C4.97524 17.4704 4.448 17.0873 4.59768 16.6266L6.25503 11.5258C6.32197 11.3198 6.24864 11.0941 6.07339 10.9668L1.73438 7.81434C1.34253 7.52964 1.54392 6.90983 2.02828 6.90983H7.39159C7.6082 6.90983 7.80018 6.77035 7.86712 6.56434L9.52447 1.46353Z" fill="#F1D02C"/>
                                        </svg><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.52447 1.46353C9.67415 1.00287 10.3259 1.00287 10.4755 1.46353L12.1329 6.56434C12.1998 6.77035 12.3918 6.90983 12.6084 6.90983H17.9717C18.4561 6.90983 18.6575 7.52964 18.2656 7.81434L13.9266 10.9668C13.7514 11.0941 13.678 11.3198 13.745 11.5258L15.4023 16.6266C15.552 17.0873 15.0248 17.4704 14.6329 17.1857L10.2939 14.0332C10.1186 13.9059 9.88135 13.9059 9.70611 14.0332L5.3671 17.1857C4.97524 17.4704 4.448 17.0873 4.59768 16.6266L6.25503 11.5258C6.32197 11.3198 6.24864 11.0941 6.07339 10.9668L1.73438 7.81434C1.34253 7.52964 1.54392 6.90983 2.02828 6.90983H7.39159C7.6082 6.90983 7.80018 6.77035 7.86712 6.56434L9.52447 1.46353Z" fill="#F1D02C"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.52447 1.46353C9.67415 1.00287 10.3259 1.00287 10.4755 1.46353L12.1329 6.56434C12.1998 6.77035 12.3918 6.90983 12.6084 6.90983H17.9717C18.4561 6.90983 18.6575 7.52964 18.2656 7.81434L13.9266 10.9668C13.7514 11.0941 13.678 11.3198 13.745 11.5258L15.4023 16.6266C15.552 17.0873 15.0248 17.4704 14.6329 17.1857L10.2939 14.0332C10.1186 13.9059 9.88135 13.9059 9.70611 14.0332L5.3671 17.1857C4.97524 17.4704 4.448 17.0873 4.59768 16.6266L6.25503 11.5258C6.32197 11.3198 6.24864 11.0941 6.07339 10.9668L1.73438 7.81434C1.34253 7.52964 1.54392 6.90983 2.02828 6.90983H7.39159C7.6082 6.90983 7.80018 6.77035 7.86712 6.56434L9.52447 1.46353Z" fill="#F1D02C"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.52447 1.46353C9.67415 1.00287 10.3259 1.00287 10.4755 1.46353L12.1329 6.56434C12.1998 6.77035 12.3918 6.90983 12.6084 6.90983H17.9717C18.4561 6.90983 18.6575 7.52964 18.2656 7.81434L13.9266 10.9668C13.7514 11.0941 13.678 11.3198 13.745 11.5258L15.4023 16.6266C15.552 17.0873 15.0248 17.4704 14.6329 17.1857L10.2939 14.0332C10.1186 13.9059 9.88135 13.9059 9.70611 14.0332L5.3671 17.1857C4.97524 17.4704 4.448 17.0873 4.59768 16.6266L6.25503 11.5258C6.32197 11.3198 6.24864 11.0941 6.07339 10.9668L1.73438 7.81434C1.34253 7.52964 1.54392 6.90983 2.02828 6.90983H7.39159C7.6082 6.90983 7.80018 6.77035 7.86712 6.56434L9.52447 1.46353Z" fill="#F1D02C"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className={cx("detail_comment-bottom")}>
                                    <p>
                                        Sản phẩm tốt
                                    </p>
                                    <p>
                                        Một chiếc áo thun là món đồ cổ điển có thể mặc trong bất kỳ dịp nào. Thật thoải mái, linh hoạt và phong cách
                                    </p>
                                </div>
                            </div> <div className={cx("detail_comment")}>
                                <div className={cx("detail_comment-top")}>
                                    <div className={cx("detail_comment-top-name")}>
                                        <img src="./images/comment.png" alt=""/>
                                        <div className={cx("detail_comment-top-infor")}>
                                            <p>Mạnh Hùng</p>
                                            <p>15/11/2023</p>
                                        </div>
                                    </div>
                                    <div className={cx("detail_comment-top-star")}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.52447 1.46353C9.67415 1.00287 10.3259 1.00287 10.4755 1.46353L12.1329 6.56434C12.1998 6.77035 12.3918 6.90983 12.6084 6.90983H17.9717C18.4561 6.90983 18.6575 7.52964 18.2656 7.81434L13.9266 10.9668C13.7514 11.0941 13.678 11.3198 13.745 11.5258L15.4023 16.6266C15.552 17.0873 15.0248 17.4704 14.6329 17.1857L10.2939 14.0332C10.1186 13.9059 9.88135 13.9059 9.70611 14.0332L5.3671 17.1857C4.97524 17.4704 4.448 17.0873 4.59768 16.6266L6.25503 11.5258C6.32197 11.3198 6.24864 11.0941 6.07339 10.9668L1.73438 7.81434C1.34253 7.52964 1.54392 6.90983 2.02828 6.90983H7.39159C7.6082 6.90983 7.80018 6.77035 7.86712 6.56434L9.52447 1.46353Z" fill="#F1D02C"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.52447 1.46353C9.67415 1.00287 10.3259 1.00287 10.4755 1.46353L12.1329 6.56434C12.1998 6.77035 12.3918 6.90983 12.6084 6.90983H17.9717C18.4561 6.90983 18.6575 7.52964 18.2656 7.81434L13.9266 10.9668C13.7514 11.0941 13.678 11.3198 13.745 11.5258L15.4023 16.6266C15.552 17.0873 15.0248 17.4704 14.6329 17.1857L10.2939 14.0332C10.1186 13.9059 9.88135 13.9059 9.70611 14.0332L5.3671 17.1857C4.97524 17.4704 4.448 17.0873 4.59768 16.6266L6.25503 11.5258C6.32197 11.3198 6.24864 11.0941 6.07339 10.9668L1.73438 7.81434C1.34253 7.52964 1.54392 6.90983 2.02828 6.90983H7.39159C7.6082 6.90983 7.80018 6.77035 7.86712 6.56434L9.52447 1.46353Z" fill="#F1D02C"/>
                                        </svg><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.52447 1.46353C9.67415 1.00287 10.3259 1.00287 10.4755 1.46353L12.1329 6.56434C12.1998 6.77035 12.3918 6.90983 12.6084 6.90983H17.9717C18.4561 6.90983 18.6575 7.52964 18.2656 7.81434L13.9266 10.9668C13.7514 11.0941 13.678 11.3198 13.745 11.5258L15.4023 16.6266C15.552 17.0873 15.0248 17.4704 14.6329 17.1857L10.2939 14.0332C10.1186 13.9059 9.88135 13.9059 9.70611 14.0332L5.3671 17.1857C4.97524 17.4704 4.448 17.0873 4.59768 16.6266L6.25503 11.5258C6.32197 11.3198 6.24864 11.0941 6.07339 10.9668L1.73438 7.81434C1.34253 7.52964 1.54392 6.90983 2.02828 6.90983H7.39159C7.6082 6.90983 7.80018 6.77035 7.86712 6.56434L9.52447 1.46353Z" fill="#F1D02C"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.52447 1.46353C9.67415 1.00287 10.3259 1.00287 10.4755 1.46353L12.1329 6.56434C12.1998 6.77035 12.3918 6.90983 12.6084 6.90983H17.9717C18.4561 6.90983 18.6575 7.52964 18.2656 7.81434L13.9266 10.9668C13.7514 11.0941 13.678 11.3198 13.745 11.5258L15.4023 16.6266C15.552 17.0873 15.0248 17.4704 14.6329 17.1857L10.2939 14.0332C10.1186 13.9059 9.88135 13.9059 9.70611 14.0332L5.3671 17.1857C4.97524 17.4704 4.448 17.0873 4.59768 16.6266L6.25503 11.5258C6.32197 11.3198 6.24864 11.0941 6.07339 10.9668L1.73438 7.81434C1.34253 7.52964 1.54392 6.90983 2.02828 6.90983H7.39159C7.6082 6.90983 7.80018 6.77035 7.86712 6.56434L9.52447 1.46353Z" fill="#F1D02C"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.52447 1.46353C9.67415 1.00287 10.3259 1.00287 10.4755 1.46353L12.1329 6.56434C12.1998 6.77035 12.3918 6.90983 12.6084 6.90983H17.9717C18.4561 6.90983 18.6575 7.52964 18.2656 7.81434L13.9266 10.9668C13.7514 11.0941 13.678 11.3198 13.745 11.5258L15.4023 16.6266C15.552 17.0873 15.0248 17.4704 14.6329 17.1857L10.2939 14.0332C10.1186 13.9059 9.88135 13.9059 9.70611 14.0332L5.3671 17.1857C4.97524 17.4704 4.448 17.0873 4.59768 16.6266L6.25503 11.5258C6.32197 11.3198 6.24864 11.0941 6.07339 10.9668L1.73438 7.81434C1.34253 7.52964 1.54392 6.90983 2.02828 6.90983H7.39159C7.6082 6.90983 7.80018 6.77035 7.86712 6.56434L9.52447 1.46353Z" fill="#F1D02C"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className={cx("detail_comment-bottom")}>
                                    <p>
                                        Sản phẩm tốt
                                    </p>
                                    <p>
                                        Một chiếc áo thun là món đồ cổ điển có thể mặc trong bất kỳ dịp nào. Thật thoải mái, linh hoạt và phong cách
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>     
            </div>
            <Product title={'SẢN PHẨM TƯƠNG TỰ'}/>
            <Product title={'SẢN PHẨM ĐÃ XEM GẦN ĐÂY'}/>
            <Footer/>

            {isCart && (
                <Overlay >
                    <Cart onClose={handleCloseCart} itemId={itemId}/> 
                </Overlay>
            )}
              
    
        </div>
    );
}

export default ProductDetail                                                       