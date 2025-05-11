import React, { useState } from 'react';
import Header from '../components/Header';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    emailOrPhone: '',
    verificationCode: '',
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.emailOrPhone || !formData.verificationCode) {
      alert('Vui lòng nhập đầy đủ thông tin!');
      return;
    }
    alert('Mã xác minh hợp lệ. Bạn có thể đặt lại mật khẩu.');
    navigate('/reset-password'); // Điều hướng đến trang đặt lại mật khẩu
  };

  return (
    <div className="container ">
      <Header />
      <div className="m-4">
        <a href="/home" className="text-dark fw-bold">Trang chủ</a> / <a href="/login" className="text-dark fw-bold">Đăng nhập</a> / <span className="text-danger fw-bold">Quên mật khẩu</span>
      </div>
      <Row>
        {/* Cột trái: Tiêu đề và mô tả */}
        <Col md={5} className="d-flex flex-column m-4">
          <h1 className="h4 fw-bold text-danger mb-3">Quên mật khẩu</h1>
          <p className="text-muted">
            Hãy điền đủ các thông tin sau để chúng tôi xác minh danh tính của bạn và cho phép bạn thực hiện đổi mật khẩu.
          </p>
        </Col>

        {/* Cột phải: Form quên mật khẩu */}
        <Col md={6}>
          <Form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto' }}>
            <Form.Group className="mb-3">
              <Form.Label>Số điện thoại/ Email *</Form.Label>
              <Form.Control
                type="text"
                name="emailOrPhone"
                value={formData.emailOrPhone}
                onChange={handleInputChange}
                placeholder="Nhập SĐT/ Email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Nhập mã *</Form.Label>
              <Form.Control
                type="text"
                name="verificationCode"
                value={formData.verificationCode}
                onChange={handleInputChange}
                placeholder="Nhập mã"
                required
              />
              <Form.Text className="text-muted">
                Mã số có hiệu lực trong 5 phút
              </Form.Text>
            </Form.Group>
            <div className="d-flex justify-content-end mb-3">
                <Button variant="danger" type="submit" className="w-40 mb-3">
              Đổi mật khẩu <span className="ms-2">→</span>
            </Button>
            </div>
            <div className="text-center">
              <a href="/login" className="text-muted">Đăng nhập lại? Đã có tài khoản? Đăng nhập</a>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default ForgotPassword;