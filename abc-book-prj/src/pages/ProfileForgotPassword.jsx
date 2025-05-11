import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { FaUser, FaLock, FaMapMarkerAlt, FaCreditCard, FaUpload } from 'react-icons/fa'; // Import FaUpload
import Header from '../components/Header';

const ProfileForgotPassword = () => {
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('Mật khẩu mới và xác nhận mật khẩu không khớp!');
      return;
    }
    alert('Mật khẩu đã được thay đổi thành công!');
  };

  return (
    <div className="container">
      <Header />
      <div className="m-4">
        <a href="/home" className="text-dark fw-bold">Trang chủ</a> / 
        <a href="/profile" className="text-dark fw-bold"> Tài khoản</a> / 
        <span className="text-danger fw-bold"> Đổi mật khẩu</span>
      </div>

      <Row>
        {/* Sidebar */}
        <Col md={3} className="m-4">
          <div className="text-center d-flex justify-content-between align-items-center mb-4">
                      <img
                        src="/assets/profile.jpg" // Đường dẫn đến ảnh đại diện
                        alt="Profile"
                        className="img-fluid"
                        style={{ width: '190px', height: '190px', objectFit: 'cover' }}
                      />
                      <Button variant="outline-secondary" style={{width: '100px,', height: '40px'}} className="mt-2 d-flex align-items-center justify-content-center">
                        <FaUpload className="me-2" /> Upload
                      </Button>
                    </div>
          <div>
            <h5 className="fw-bold">Hồ sơ của tôi</h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <FaUser className="me-2 text-dark" /> 
                <a href="/profile" className="text-dark">Thông tin cá nhân</a>
              </li>
              <li className="mb-3">
                <FaLock className="me-2 text-danger" /> 
                <a href="/change-password" className="text-danger fw-bold">Đổi mật khẩu</a>
              </li>
              <li className="mb-3">
                <FaMapMarkerAlt className="me-2 text-dark" /> 
                <a href="/delivery-address" className="text-dark">Địa chỉ giao hàng</a>
              </li>
              <li className="mb-3">
                <FaCreditCard className="me-2 text-dark" /> 
                <a href="/payment-methods" className="text-dark">Phương thức thanh toán</a>
              </li>
            </ul>
          </div>
        </Col>

        {/* Main Content */}
        <Col md={8} className="m-4">
          <div className="p-4" style={{ backgroundColor: '#FFF5F5', borderRadius: '10px' }}>
            <h5 className="fw-bold mb-3">Thông tin của tôi</h5>
            <p className="text-muted">Quản lý thông tin cá nhân để bảo mật tốt hơn</p>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Mật khẩu cũ</Form.Label>
                    <Form.Control
                      type="password"
                      name="currentPassword"
                      value={passwordData.currentPassword}
                      onChange={handleInputChange}
                      placeholder="Nhập mật khẩu cũ"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Mật khẩu mới</Form.Label>
                    <Form.Control
                      type="password"
                      name="newPassword"
                      value={passwordData.newPassword}
                      onChange={handleInputChange}
                      placeholder="Nhập mật khẩu mới"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Nhập lại mật khẩu mới</Form.Label>
                    <Form.Control
                      type="password"
                      name="confirmPassword"
                      value={passwordData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Nhập lại mật khẩu mới"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Button variant="danger" type="submit" className="mt-3">
                Lưu thay đổi <span className="ms-2">→</span>
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProfileForgotPassword;