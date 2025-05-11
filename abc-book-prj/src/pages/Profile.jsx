import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { FaUser, FaLock, FaMapMarkerAlt, FaCreditCard, FaUpload } from 'react-icons/fa'; // Import FaUpload
import Header from '../components/Header';
import Footer from '../components/Footer';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    username: 'vananhnguyen88',
    fullName: 'Nguyễn Vân Anh',
    email: 'vananh88@gmail.com',
    phone: '0978222861',
    gender: 'female',
    dob: '2002-08-18',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <Header />
      <div className="m-4">
        <a href="/home" className="text-dark fw-bold">Trang chủ</a> / 
        <span className="text-danger fw-bold"> Thông tin cá nhân</span>
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
                <FaUser className="me-2 text-danger" /> 
                <a href="/profile" className="text-danger fw-bold">Thông tin cá nhân</a>
              </li>
              <li className="mb-3">
                <FaLock className="me-2 text-dark" /> 
                <a href="/change-password" className="text-dark">Đổi mật khẩu</a>
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
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Tên đăng nhập</Form.Label>
                    <Form.Control
                      type="text"
                      name="username"
                      value={profileData.username}
                      onChange={handleInputChange}
                      disabled
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Họ và tên</Form.Label>
                    <Form.Control
                      type="text"
                      name="fullName"
                      value={profileData.fullName}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Số điện thoại</Form.Label>
                    <Form.Control
                      type="text"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Giới tính</Form.Label>
                    <div>
                      <Form.Check
                        inline
                        label="Nam"
                        name="gender"
                        type="radio"
                        value="male"
                        checked={profileData.gender === 'male'}
                        onChange={handleInputChange}
                      />
                      <Form.Check
                        inline
                        label="Nữ"
                        name="gender"
                        type="radio"
                        value="female"
                        checked={profileData.gender === 'female'}
                        onChange={handleInputChange}
                      />
                    </div>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Ngày sinh</Form.Label>
                    <Form.Control
                      type="date"
                      name="dob"
                      value={profileData.dob}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Button variant="danger" className="mt-3">
                Chỉnh sửa
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
      <Footer/>
    </div>
  );
};

export default Profile;