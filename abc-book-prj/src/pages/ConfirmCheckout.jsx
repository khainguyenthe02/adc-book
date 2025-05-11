import React from 'react';
import Header from '../components/Header';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ConfirmCheckout = () => {
  const navigate = useNavigate();

  return (
    <div className="container py-5">
      <Header />
      <div className="m-4">
        <a href="/home" className="text-dark fw-bold">Trang chủ</a> / 
        <a href="/cart" className="text-dark fw-bold"> Giỏ hàng</a> / 
        <a href="/checkout" className="text-dark fw-bold"> Thanh toán</a> / 
        <span className="text-danger fw-bold"> Hoàn tất thanh toán</span>
      </div>

      {/* Banner */}
      <div className="text-center mb-5">
        <img
          src="/assets/banner-books.png" // Đường dẫn đến ảnh banner
          alt="Sách hay trong tuần"
          className="img-fluid"
          style={{ borderRadius: '10px', maxHeight: '300px', objectFit: 'cover' }}
        />
      </div>

      {/* Thông báo hoàn tất */}
      <div className="text-center">
        <h2 className="text-danger fw-bold mb-3">Giao dịch của bạn đã hoàn tất thành công.</h2>
        <p className="text-muted">
          Chúng tôi rất trân trọng sự tin tưởng của bạn. Chúc bạn hài lòng với sản phẩm/dịch vụ mà mình đã lựa chọn. Cảm ơn bạn đã ủng hộ!
        </p>
      </div>

      {/* Nút điều hướng */}
      <div className="d-flex justify-content-center mt-4">
        <Button
          variant="outline-danger"
          className="me-3"
          onClick={() => navigate('/home')}
        >
          Quay về trang chủ
        </Button>
        <Button
          variant="danger"
          className="me-3"
          onClick={() => navigate('/order-details')}
        >
          Thông tin đơn <span className="ms-2">→</span>
        </Button>
        <Button
          variant="danger"
          onClick={() => navigate('/track-order')}
        >
          Theo dõi hàng <span className="ms-2">→</span>
        </Button>
      </div>
    </div>
  );
};

export default ConfirmCheckout;