import React, { useEffect, useRef } from 'react';
import { FaBook, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import logo from '../../public/assets/logo.png'; // Ensure you have a logo image in the specified path

const Header = () => {
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const dropdown = dropdownRef.current;
    if (!dropdown) return;

    const toggleDropdown = (show) => {
      const menu = dropdown.querySelector('.dropdown-menu');
      if (show) {
        menu.classList.add('show');
        dropdown.classList.add('show');
        dropdown.setAttribute('aria-expanded', 'true');
      } else {
        menu.classList.remove('show');
        dropdown.classList.remove('show');
        dropdown.setAttribute('aria-expanded', 'false');
      }
    };

    const handleMouseEnter = () => toggleDropdown(true);
    const handleMouseLeave = () => toggleDropdown(false);

    dropdown.addEventListener('mouseenter', handleMouseEnter);
    dropdown.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      dropdown.removeEventListener('mouseenter', handleMouseEnter);
      dropdown.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <header className="d-flex align-items-center justify-content-between p-3 bg-white border-bottom">
      {/* Logo Section */}
      <div className="d-flex align-items-center">
        <img src={logo} alt="Logo" className="ms-4" style={{ width: '120px' }} />
      </div>

      {/* Navigation Links */}
      <nav className="d-flex gap-3">
        <a href="/" className="text-dark text-decoration-none">Trang chủ</a>
        <a href="/about" className="text-dark text-decoration-none">Giới thiệu</a>
        {/* Dropdown for Products */}
        <div className="position-relative" ref={dropdownRef}>
          <a
            href="#"
            className="text-dark text-decoration-none"
            aria-expanded="false"
          >
            Sản phẩm
          </a>
          <ul className="dropdown-menu">
            <li>
              <a href="/list-product" className="dropdown-item">Danh sách sản phẩm</a>
            </li>
            <li>
              <a href="/list-dung-cu" className="dropdown-item">Danh sách dụng cụ</a>
            </li>
          </ul>
        </div>
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
          <div className="position-relative" onClick={handleCartClick}>
            <FaShoppingCart className="text-danger" style={{ fontSize: '20px', cursor: 'pointer' }} />
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