import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <>
      <footer className="py-5" style={{ background: '#E01A22', color: 'white' }}>
        <Container>
          <Row>
            {/* Cột 1: Logo và văn phòng */}
            <Col md={3}>
              <h5 className="fw-bold mb-3">ADC Book</h5>
              <p>
                Tầng 12A, tòa nhà Diamond Flower Tower, đường Lê Văn Lương, phường Nhân Chính, quận Thanh Xuân, thành phố Hà Nội.
              </p>
              <p>
                Địa chỉ: Tầng 1, Nhà CT4A, KĐT Bắc Linh Đàm, Đại Kim, Hoàng Mai, Hà Nội.
              </p>
              
              
            </Col>

            {/* Cột 2: Liên hệ */}
            <Col md={3}>
              <h5 className="fw-bold mb-3">Liên hệ</h5>
              <ul className="list-unstyled">
                <li className="mb-2">Hotline/Zalo: (024) 3641 4074</li>
                <li className="mb-2">Email: info@adc.net.vn</li>
                <li className="pb-4"> </li>
                <li className="pb-4"> </li>
                <li className="pb-2"> </li>
              </ul>
              <img
                src="../../assets/bct.png"
                alt="Đã thông báo Bộ Công Thương"
                style={{ width: '100px', marginRight: '10px' }}
              />
            </Col>

            {/* Cột 3: Liên kết nhanh */}
            <Col md={3}>
              <h5 className="fw-bold mb-3">Trang chủ</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="/" className="text-white text-decoration-none">Giới thiệu</a></li>
                <li className="mb-2"><a href="/products" className="text-white text-decoration-none">Sản phẩm</a></li>
                <li className="mb-2"><a href="/news" className="text-white text-decoration-none">Tin tức</a></li>
                <li><a href="/contact" className="text-white text-decoration-none">Liên hệ</a></li>
              </ul>
              <img
                src="../../assets/dcma.png"
                alt="DMCA Protected"
                style={{ width: '100px' }}
              />
            </Col>

            {/* Cột 4: Dịch vụ khách hàng */}
            <Col md={3}>
              <h5 className="fw-bold mb-3">Dịch vụ khách hàng</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="/support/guide" className="text-white text-decoration-none">Hướng dẫn mua hàng trực tuyến</a></li>
                <li className="mb-2"><a href="/support/privacy" className="text-white text-decoration-none">Bảo mật thông tin</a></li>
                <li className="mb-2"><a href="/support/return" className="text-white text-decoration-none">Bảo hành & đổi trả</a></li>
                <li><a href="/support/shipping" className="text-white text-decoration-none">Vận chuyển & giao nhận</a></li>
              </ul>
              <div className="mt-3">
                <h6 className="fw-bold">Theo dõi chúng tôi</h6>
                <a href="https://facebook.com" className="text-white me-3"><i className="fab fa-facebook"></i></a>
                <a href="https://pinterest.com" className="text-white me-3"><i className="fab fa-pinterest"></i></a>
                <a href="https://instagram.com" className="text-white me-3"><i className="fab fa-instagram"></i></a>
                <a href="https://youtube.com" className="text-white"><i className="fab fa-youtube"></i></a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;