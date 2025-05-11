import React, { useState } from 'react';
import Header from '../components/Header';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginData.username && loginData.password) {
      alert(`Đăng nhập thành công với tên: ${loginData.username}`);
      navigate('/'); // Điều hướng về trang chủ sau khi đăng nhập
    } else {
      alert('Vui lòng nhập tên đăng nhập và mật khẩu!');
    }
  };

  return (
    <div className="container">
      <Header />
      <div className="m-4">
        <a href="/home" className="text-dark fw-bold">Trang chủ</a> / <span className="text-danger fw-bold">Đăng nhập</span>
      </div>
      <Row>
        {/* Cột trái: Tiêu đề và mô tả */}
        <Col md={5} className="d-flex flex-column m-4 ">
          <h1 className="h4 fw-bold text-danger mb-3">Đăng nhập tài khoản</h1>
          <p className="text-muted">
            Để có thể sử dụng đầy đủ các dịch vụ mà chúng tôi cung cấp, bạn hãy đăng nhập tài khoản ngay bây giờ.
          </p>
        </Col>

        {/* Cột phải: Form đăng nhập */}
        <Col md={6}>
          <Form onSubmit={handleSubmit} style={{ margin: '0 auto' }}>
            <Form.Group className="mb-3">
              <Form.Label>Tên đăng nhập *</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={loginData.username}
                onChange={handleInputChange}
                placeholder="Nhập tên đăng nhập"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mật khẩu *</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleInputChange}
                placeholder="Nhập mật khẩu"
                required
              />
              <Form.Text  style={{textDecoration: 'italic'}}>
                8 ký tự, chứa số, chữ và ký tự đặc biệt
              </Form.Text>
            </Form.Group>
            <div className="d-flex justify-content-end mb-3 border-bottom">
                <Button variant="danger" type="submit" style={{width: '180px', fontSize: '16px' }} className=" mb-3">
               <span className="ms-2" style={{fontSize: '16px'}}>Đăng nhập ngay →</span>
            </Button>
            </div>
            <div className="d-flex justify-content-between text-center">
              <a href="/forgot-password" className="text-muted me-3">Quên mật khẩu?</a>
              <a href="/register" className="text-muted"><i style={{fontSize: '14px'}}>Chưa có tài khoản?</i> Đăng ký</a>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Login;