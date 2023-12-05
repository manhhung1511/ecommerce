import React, { useEffect, useState } from "react";
import styles from "./Buy.module.scss";
import classNames from "classnames/bind";
import Footer from "../Footer";
import Qrcode from "./Qrcode";
import Overlay from "../Overlay";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

const Buy = () => {

  const [cart, setToCart] = useState([]);
  const [infor, setInfor] = useState({
    name: '',
    number: ''
  });

  const navigate = useNavigate();

  const [showQR, setShowQR] = useState(false);

  const [selectedValue, setSelectedValue] = useState('');

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('addProducts'));
    setToCart(storedProducts);

    const inforUser = JSON.parse(localStorage.getItem('infor'));
    setInfor(inforUser);
  },[])

  let sum = 0;
  if(cart && cart.length > 0) {
    cart.forEach((item) => {
      const number = parseInt(item.price, 10);
      sum += number;
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(selectedValue == 'payment') {
        setShowQR(true);
    } else {
      navigate('/success')
    }
  }

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
                            Thông tin vận chuyển
                        </h4>
                        <form onSubmit={handleSubmit}>
                            <div className={cx("buy_content-username")}>
                                        <p>Họ và tên</p>
                                        <input 
                                        type="text" 
                                        placeholder="Họ và tên"
                                        name="username"
                                        value={infor && infor.name}
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
                                            value={ infor && infor.number}
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
                            <h4 className={cx("buy_content-pay-title")}>
                                Hình thức thanh toán
                            </h4>
                            <div className={cx("buy_content-pay")}>
                                <div className={cx("buy_content-pay-item")}>
                                    <input type="radio" id="cod" name="fav_language" value="cod" onChange={handleRadioChange}/>
                                    <label for="cod">COD - Thanh toán khi nhận hàng</label> 
                                </div>
                                <div className={cx("buy_content-pay-item")}>
                                    <input type="radio" id="payment" name="fav_language" value="payment" onChange={handleRadioChange}/>
                                    <label for="payment">Chuyển khoản liên ngân hàng bằng QR Code</label> 
                                </div>
                            </div>

                            <button className={cx("buy_submit")}>Thanh toán - (đổi trả 30 ngày)</button>
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
                    {
                      cart && cart.length > 0 ? (
                        cart.map((item) => (
                          <div className={cx("summary_item")}>
                            <div className={cx("summary_item-product")}>
                                <img src="./images/image25.png" alt=""/>
                                <div className={cx("summary_item-infor")}>
                                    <p>{item.name} x 1</p>
                                    <p>Màu sắc : Đen</p>
                                </div>
                            </div>
                            <div className={cx("summary_item-price")}>
                                {item.price}đ
                            </div>
                          </div>
                        ))
                    
                      ) : (
                        <div>
                        </div>
                      )
                    }
                    <div className={cx("summary_price")}>
                          <p>Tổng hàng </p>
                          <p>{sum}.000đ</p>
                    </div>
                    <div className={cx("summary_price")}>
                          <p>Khuyến mãi</p>
                          <p>-50.000đ</p>
                    </div>
                    <div className={cx("summary_price")}>
                          <p>Vận chuyển</p>
                          <p>-20.000đ</p>
                    </div>
                    <div className={cx("summary_price-bold")}>
                          <p>Tổng tiền</p>
                          <p>{sum - 70.000}.000đ</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />

        {showQR && (
          <Overlay>
              <Qrcode onData={`${sum - 70}.000 đ`} />
          </Overlay>
        )}
      </div>
  );
};

export default Buy;
