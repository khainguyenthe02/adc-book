import React, { useState } from 'react';
import Header from '../components/Header';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const Register = () => {
  const [registerData, setRegisterData] = useState({
    username: '',
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRegisterData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      alert('Mật khẩu và xác nhận mật khẩu không khớp!');
      return;
    }
    if (!registerData.agreeTerms) {
      alert('Bạn cần đồng ý với điều khoản để tiếp tục!');
      return;
    }
    alert(`Đăng ký thành công với tên đăng nhập: ${registerData.username}`);
    navigate('/login'); // Điều hướng đến trang đăng nhập sau khi đăng ký thành công
  };

  return (
    <div className="container">
      <Header />
      <div className="m-4">
        <a href="/home" className="text-dark fw-bold">Trang chủ</a> / <span className="text-danger fw-bold">Đăng ký</span>
      </div>
      <Row>
        {/* Cột trái: Tiêu đề và mô tả */}
        <Col md={5} className="d-flex flex-column m-4 ">
          <h1 className="h4 fw-bold text-danger mb-3">Đăng ký tài khoản</h1>
          <p className="text-muted">
            Để có thể sử dụng đầy đủ các dịch vụ mà chúng tôi cung cấp, bạn hãy cung cấp các thông tin cá nhân sau đây để chúng tôi tạo tài khoản mới cho bạn ngay bây giờ.
          </p>
        </Col>

        {/* Cột phải: Form đăng ký */}
        <Col md={6}>
          <Form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto' }}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Tên đăng nhập <span className='text-danger'>*</span></Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    value={registerData.username}
                    onChange={handleInputChange}
                    placeholder="Nhập tên đăng nhập"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Họ và tên <span className='text-danger'>*</span></Form.Label>
                  <Form.Control
                    type="text"
                    name="fullName"
                    value={registerData.fullName}
                    onChange={handleInputChange}
                    placeholder="Nhập họ và tên"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Email <span className='text-danger'>*</span></Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={registerData.email}
                    onChange={handleInputChange}
                    placeholder="Nhập email"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Số điện thoại <span className='text-danger'>*</span></Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    value={registerData.phone}
                    onChange={handleInputChange}
                    placeholder="Nhập số điện thoại"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Mật khẩu <span className='text-danger'>*</span></Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={registerData.password}
                    onChange={handleInputChange}
                    placeholder="Nhập mật khẩu"
                    required
                  />
                  <Form.Text className="text-muted">
                    8 ký tự, chứa số, chữ và ký tự đặc biệt
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Nhập lại mật khẩu <span className='text-danger'>*</span></Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    value={registerData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Nhập lại mật khẩu"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                name="agreeTerms"
                checked={registerData.agreeTerms}
                onChange={handleInputChange}
                label="Tôi đồng ý thông tin cá nhân mà tôi cung cấp là chính xác, cho phép sử dụng để liên hệ và cung cấp thông tin."
                required
              />
            </Form.Group>
            <Button variant="danger" type="submit" className="w-100 mb-3">
              Đăng ký ngay <span className="ms-2">→</span>
            </Button>
            <div className="text-center">
              <a href="/forgot-password" className="text-muted me-3">Quên mật khẩu?</a>
              <a href="/login" className="text-muted">Đã có tài khoản? Đăng nhập</a>
            </div>
          </Form>
        </Col>
      </Row>
      <Footer/>
    </div>
  );
};

export default Register;