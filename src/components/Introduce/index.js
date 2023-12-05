import React from "react";
import styles from "./Introduce.module.scss";
import classNames from "classnames/bind";
import Footer from "../Footer";

const cx = classNames.bind(styles);

const Introduce = () => {
    return (
        <div class={cx("introduce")}>
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
                <span>Giới thiệu</span>
                </div>
            </div>
            <div class={cx("introduce_content")}>
                <div class={cx("container")}>
                <div class={cx("introduce_content-title")}>
                    <h3>Giới thiệu</h3>
                </div>
                <div class={cx("introduce_content-desc")}>
                    <h4>Insidemen: Điểm đến cuối cùng cho thời trang nam giới</h4>
                    <p>
                        Insidemen là nhà bán lẻ thời trang trực tuyến dành cho nam giới hàng đầu tại Việt Nam. Chúng tôi cung cấp nhiều loại quần áo nam, bao gồm vest, áo sơ mi, quần, áo khoác và phụ kiện. Sản phẩm của chúng tôi được làm từ vật liệu chất lượng cao và được thiết kế kiểu dáng thời trang và thoải mái.
                    </p>
                    <p>
                    Chúng tôi hiểu rằng nam giới có những nhu cầu và sở thích khác nhau về thời trang. Đó là lý do tại sao chúng tôi cung cấp nhiều phong cách khác nhau để bạn lựa chọn. Cho dù bạn đang tìm kiếm một bộ vest cổ điển cho buổi phỏng vấn xin việc hay một bộ trang phục hợp thời trang để đi chơi đêm, chúng tôi đều có thứ gì đó dành cho bạn.
                    Chúng tôi cũng cung cấp nhiều kích cỡ và màu sắc khác nhau để phù hợp với mọi người. Chúng tôi tin rằng mọi người đàn ông đều xứng đáng có được vẻ ngoài đẹp nhất, bất kể kích thước hay màu da của anh ta.
                    </p>
                    <p>
                     Ngoài sự lựa chọn đa dạng về sản phẩm, chúng tôi còn cung cấp dịch vụ khách hàng tuyệt vời. Chúng tôi luôn sẵn lòng giúp bạn tìm được trang phục hoàn hảo theo nhu cầu của bạn.
                    </p>
                    <p>
                    Tại sao nên chọn Insidemen?
                    </p>
                    <p>
                         Đây chỉ là một vài lý do tại sao bạn nên chọn Insidemen cho nhu cầu thời trang nam giới của mình:
                    </p>
                    <p>
                        - Nhiều lựa chọn sản phẩm: Chúng tôi cung cấp nhiều loại quần áo nam, bao gồm vest, áo sơ mi, quần, áo khoác và phụ kiện.
                    </p>
                    <p>
                        - Chất liệu cao cấp: Sản phẩm của chúng tôi được làm từ chất liệu cao cấp, bền và kiểu dáng thời trang.
                    </p>
                    <p>
                        - Phong cách đa dạng: Chúng tôi cung cấp nhiều kiểu dáng khác nhau để bạn lựa chọn, vì vậy bạn có thể tìm thấy bộ trang phục hoàn hảo cho nhu cầu của mình.
                    </p>


                    <h4>Mua sắm nội bộ ngay hôm nay!</h4>
                    <p>
                    Hãy truy cập trang web của chúng tôi ngay hôm nay để xem qua lựa chọn thời trang nam giới của chúng tôi. Chúng tôi tin chắc rằng bạn sẽ tìm được bộ trang phục hoàn hảo phù hợp với nhu cầu của mình.
                    </p>

                    <h4>
                    Dưới đây là một số điểm bổ sung mà bạn có thể đưa vào bài viết của mình:
                    </h4>
                    <p>
                    Làm nổi bật một số tính năng độc đáo của sản phẩm hoặc dịch vụ của bạn. Điều gì làm cho sản phẩm hoặc dịch vụ của bạn khác biệt so với đối thủ cạnh tranh?
                    </p>
                    <p>
                    Chia sẻ lời chứng thực từ khách hàng hài lòng. Đây là một cách tuyệt vời để xây dựng niềm tin và sự tín nhiệm với khách hàng tiềm năng.
                    </p>
                </div>
            </div>
            </div>
            <Footer/>
        </div>

    );
}

export default Introduce