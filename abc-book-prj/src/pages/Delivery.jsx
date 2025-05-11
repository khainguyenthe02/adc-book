import React from 'react';
import Header from '../components/Header';
import { Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaClock, FaUser } from 'react-icons/fa'; // Import các biểu tượng từ react-icons

const Delivery = () => {
  const navigate = useNavigate();

  const deliveryDetails = {
    customerName: 'Nguyễn Vân Anh',
    phone: '0978222861',
    email: 'vananh88@gmail.com',
    address: 'Số 168 đường Kim Giang, phường Đại Kim, quận Hoàng Mai, thành phố Hà Nội',
    deliveryTime: 'Khoảng 2 ngày',
    deliveryPerson: {
      name: 'Nguyễn Văn Việt',
      phone: '0988989898',
    },
  };

  return (
    <div className="container">
      <Header />
      <div className="m-4">
        <a href="/home" className="text-dark fw-bold">Trang chủ</a> / 
        <a href="/checkout" className="text-dark fw-bold"> Hoàn tất thanh toán</a> / 
        <span className="text-danger fw-bold"> Theo dõi đơn hàng</span>
      </div>

      <Row>
        {/* Cột trái: Thông tin giao hàng */}
        <Col md={5} className="m-4">
          <h2 className="h5 text-danger fw-bold m-4">Theo dõi đơn hàng</h2>
          <p className="text-muted m-4">
            Đơn hàng đang được vận chuyển đến bạn. Thời gian dự kiến khoảng 2-5 ngày kể từ ngày đặt hàng.
            Khi đơn hàng đang ở vị trí gần bạn, hãy chú ý điện thoại từ đơn vị vận chuyển chúng tôi.
          </p>
          <div className="m-4">
            <h3 className="h6 fw-bold mb-3">
              <FaMapMarkerAlt className="text-danger me-2" /> Thông tin giao hàng
            </h3>
            <p className="mb-1 ms-4">{deliveryDetails.customerName}</p>
            <p className="mb-1 ms-4">{deliveryDetails.phone}</p>
            <p className="mb-1 ms-4">{deliveryDetails.email}</p>
            <p className="mb-1 pt-0 p-4">{deliveryDetails.address}</p>

            <h3 className="h6 fw-bold mt-4">
              <FaClock className="text-danger me-2" /> Thời gian giao hàng
            </h3>
            <p className="mb-1 ms-4">{deliveryDetails.deliveryTime}</p>

            <h3 className="h6 fw-bold mt-4">
              <FaUser className="text-danger me-2" /> Người giao hàng
            </h3>
            <p className="mb-1 ms-4">{deliveryDetails.deliveryPerson.name}</p>
            <p className="mb-1 ms-4">{deliveryDetails.deliveryPerson.phone}</p>
          </div>
        </Col>

        {/* Cột phải: Bản đồ */}
        <Col md={6}>
          <div className="map-container">
            <img
              src="../../assets/delivery.jpg" // Đường dẫn đến ảnh bản đồ
              alt="Bản đồ giao hàng"
              className="img-fluid"
              style={{ objectFit: 'contain' }}
            />
          </div>
        </Col>
      </Row>

      {/* Nút điều hướng */}
      <div className="d-flex justify-content-between m-4">
        <Button variant="outline-danger" onClick={() => navigate('/home')}>
          Quay về trang chủ
        </Button>
        <Button variant="danger" onClick={() => navigate('/track-order')}>
          Quay trở lại <span className="ms-2">→</span>
        </Button>
      </div>
    </div>
  );
};

export default Delivery;