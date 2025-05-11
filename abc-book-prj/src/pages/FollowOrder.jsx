import React from 'react';
import Header from '../components/Header';
import { Row, Col, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const FollowOrder = () => {
  const navigate = useNavigate();

  const orderDetails = {
    customerName: 'Nguyễn Vân Anh',
    phone: '0978222861',
    email: 'vananh88@gmail.com',
    address: 'Số 168 đường Kim Giang, phường Đại Kim, quận Hoàng Mai, thành phố Hà Nội',
    totalPrice: 317200,
    subTotal: 357200,
    otherFees: 0,
  };

  return (
    <div className="container">
      <Header />
      <div className="m-4">
        <a href="/home" className="text-dark fw-bold">Trang chủ</a> / 
        <a href="/checkout" className="text-dark fw-bold"> Hoàn tất thanh toán</a> / 
        <span className="text-danger fw-bold"> Thông tin đơn hàng</span>
      </div>

      <Row>
        {/* Cột 1: Trạng thái đơn hàng */}
        <Col md={3} className='m-4'>
          <h2 className="h5 text-danger fw-bold mb-4">Chờ xử lý đơn hàng</h2>
          <p className="text-muted mb-4">
            Đơn hàng của bạn đang chờ hệ thống xác nhận. Trong thời gian này, bạn có thể liên hệ lại với chúng tôi để xác nhận thêm thông tin đơn hàng nhé!
          </p>
        </Col>

        {/* Cột 2: Thông tin giao hàng và bản đồ */}
        <Col md={3} className='m-4'>
          <h3 className="h6 fw-bold mb-3">
            <i className="bi bi-geo-alt-fill text-danger me-2"></i>Thông tin giao hàng
          </h3>
          <p className="mb-1">{orderDetails.customerName}</p>
          <p className="mb-1">{orderDetails.phone}</p>
          <p className="mb-1">{orderDetails.email}</p>
          <p>{orderDetails.address}</p>

          <h3 className="h6 fw-bold mt-4">Chi tiết</h3>
          <div className="map-container mt-3">
            <img
              src="../../assets/bando.jpg" // Đường dẫn đến ảnh bản đồ
              alt="Bản đồ"
              className="img-fluid"
              style={{ borderRadius: '10px', maxHeight: '300px', objectFit: 'cover' }}
            />
          </div>
        </Col>

        {/* Cột 3: Chi tiết đơn hàng */}
        <Col md={4} className=' d-flex justify-content-end'>
          <Card className="shadow-sm" style={{ backgroundColor: '#FFF5F5', borderRadius: '10px' }}>
            <Card.Body>
              <h5 className="text-center text-danger fw-bold mb-4">Tổng giá: {orderDetails.totalPrice.toLocaleString()}đ</h5>
              <ul className="list-unstyled">
                <li className="d-flex justify-content-between mb-2">
                  <span>Tổng phụ:</span>
                  <span>{orderDetails.subTotal.toLocaleString()}đ</span>
                </li>
                <li className="d-flex justify-content-between mb-2">
                  <span>Chi phí khác:</span>
                  <span>{orderDetails.otherFees === 0 ? '-' : orderDetails.otherFees.toLocaleString()}đ</span>
                </li>
                <li className="d-flex justify-content-between fw-bold border-top pt-2">
                  <span>Tổng giá:</span>
                  <span>{orderDetails.totalPrice.toLocaleString()}đ</span>
                </li>
              </ul>
              <p className="text-muted mt-3" style={{ fontSize: '14px' }}>
                Áp dụng cho hầu hết các sản phẩm/dịch vụ. Mức thuế hiện hành là 10% hoặc 5% đối với một số mặt hàng thiết yếu.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Nút điều hướng */}
      <div className="d-flex justify-content-between m-4">
        <Button variant="outline-danger" onClick={() => navigate('/home')}>
          Quay về trang chủ
        </Button>
        <div>
          <Button variant="danger" className="me-3" onClick={() => navigate('/cancel-order')}>
            Hủy đơn hàng <span className="ms-2">✖</span>
          </Button>
          <Button variant="danger" onClick={() => navigate('/checkout')}>
            Quay trở lại <span className="ms-2">→</span>
          </Button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default FollowOrder;