import React from 'react';
import { FaBook, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="d-flex align-items-center justify-content-between p-3 bg-white border-bottom">
      {/* Logo Section */}
      <div className="d-flex align-items-center">
        <FaBook className="me-2 text-danger" style={{ fontSize: '24px' }} />
        <span className="fw-bold text-danger" style={{ fontSize: '24px' }}>ADCBOOK</span>
      </div>

      {/* Navigation Links */}
      <nav className="d-flex gap-3">
        <a href="/" className="text-dark text-decoration-none">Trang chủ</a>
        <a href="/about" className="text-dark text-decoration-none">Giới thiệu</a>
        <a href="/products" className="text-dark text-decoration-none">Sản phẩm</a>
        <a href="/news" className="text-dark text-decoration-none">Tin tức</a>
        <a href="/contact" className="text-dark text-decoration-none">Liên hệ</a>
      </nav>

      {/* Search Bar and Icons */}
      <div className="d-flex align-items-center gap-3">
        <div className="position-relative">
          <input
            type="text"
            placeholder="Tìm kiếm"
            className="form-control"
            style={{ paddingRight: '30px' }}
          />
          <FaSearch className="position-absolute top-50 end-0 translate-middle-y me-2 text-danger" />
        </div>
        <div className="d-flex align-items-center gap-3">
          <div className="position-relative">
            <FaShoppingCart className="text-danger" style={{ fontSize: '20px' }} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger text-white">
              3
            </span>
          </div>
          <FaUser className="text-danger" style={{ fontSize: '20px' }} />
        </div>
      </div>
    </header>
  );
};

export default Header;