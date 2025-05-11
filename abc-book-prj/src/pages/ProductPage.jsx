import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import BookCard from '../components/BookCard';
import booksData from '../data/booksData';
import bannerImage from '../../public/assets/slide4.jpg';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

const ProductPage = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState({
    priceRange: 'all',
    supplier: 'all',
    language: 'all',
    format: 'all',
    type: 'all',
  });
  const [sortOption, setSortOption] = useState('default');

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    console.log(`Filter changed: ${name} = ${value}`);
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  const filteredBooks = booksData.filter((book) => {
    if (!book || !book.price || !book.supplier || !book.language || !book.format || !book.type) {
      console.warn('Invalid book data:', book);
      return false;
    }

    if (filter.priceRange !== 'all') {
      const [min, max] = filter.priceRange.split('-').map((val) => (val ? Number(val) : Infinity));
      if (book.price < min || (max !== Infinity && book.price > max)) {
        return false;
      }
    }

    if (filter.supplier !== 'all' && book.supplier.trim().toLowerCase() !== filter.supplier.trim().toLowerCase()) {
      return false;
    }

    if (filter.language !== 'all' && book.language.trim().toLowerCase() !== filter.language.trim().toLowerCase()) {
      return false;
    }

    if (filter.format !== 'all' && book.format.trim().toLowerCase() !== filter.format.trim().toLowerCase()) {
      return false;
    }

    if (filter.type !== 'all' && book.type.trim().toLowerCase() !== filter.type.trim().toLowerCase()) {
      return false;
    }

    return true;
  });

  // Sắp xếp danh sách sách
  const sortedBooks = [...filteredBooks].sort((a, b) => {
    if (sortOption === 'price-asc') {
      return a.price - b.price;
    }
    if (sortOption === 'price-desc') {
      return b.price - a.price;
    }
    return 0;
  });

  useEffect(() => {
    console.log('Current filter:', filter);
    console.log('Sort option:', sortOption);
    console.log('Filtered books:', filteredBooks);
    console.log('Sorted books:', sortedBooks);
  }, [filter, sortOption, filteredBooks, sortedBooks]);

  return (
    <Container>
      <Header />
      <div className='m-4'>
        <a href='/home' style={{ color: 'black', fontWeight: 'bold'}}>Trang chủ</a> / <strong style={{ color: 'red', fontWeight: 'bold'}}>Sản phẩm</strong>
      </div>
      <Row className="m-4">
        {/* Sidebar Filters */}
        <Col md={3}>
          <h5 className="fw-bold mb-3 text-danger">DANH MỤC SÁCH</h5>
          <Form className="mb-4">
            {[
              { value: 'all', label: 'Tất cả' },
              { value: 'Văn Học', label: 'Văn Học' },
              { value: 'Kinh Tế', label: 'Kinh Tế' },
              { value: 'Tâm Lý - Kỹ Năng Sống', label: 'Tâm Lý - Kỹ Năng Sống' },
              { value: 'Tiểu Thuyết', label: 'Tiểu Thuyết' },
              { value: 'Sách Thiếu Nhi', label: 'Sách Thiếu Nhi' },
              { value: 'Giáo Khoa - Tham Khảo', label: 'Giáo Khoa - Tham Khảo' },
            ].map((category) => (
              <Form.Check
                key={category.value}
                type="radio"
                label={category.label}
                name="type"
                value={category.value}
                checked={filter.type === category.value}
                onChange={handleFilterChange}
                className="mb-2"
              />
            ))}
          </Form>

          <h5 className="fw-bold mb-3 text-danger">KHOẢNG GIÁ</h5>
          <Form className="mb-4">
            {[
              { label: 'Tất cả', value: 'all' },
              { label: '0 - 50.000đ', value: '0-50000' },
              { label: '50.000đ - 100.000đ', value: '50000-100000' },
              { label: '100.000đ - 200.000đ', value: '100000-200000' },
              { label: '200.000đ - 300.000đ', value: '200000-300000' },
              { label: '300.000đ - Trở lên', value: '300000-Infinity' },
            ].map((range) => (
              <Form.Check
                key={range.value}
                type="radio"
                label={range.label}
                name="priceRange"
                value={range.value}
                checked={filter.priceRange === range.value}
                onChange={handleFilterChange}
                className="mb-2"
              />
            ))}
          </Form>

          <h5 className="fw-bold mb-3 text-danger">NHÀ CUNG CẤP</h5>
          <Form className="mb-4">
            {[
              { value: 'all', label: 'Tất cả' },
              { value: 'NXB Trẻ', label: 'NXB Trẻ' },
              { value: 'NXB Kim Đồng', label: 'NXB Kim Đồng' },
              { value: 'Thái Hà', label: 'Thái Hà' },
              { value: 'Skybooks', label: 'Skybooks' },
              { value: 'AZ Việt Nam', label: 'AZ Việt Nam' },
            ].map((supplier) => (
              <Form.Check
                key={supplier.value}
                type="radio"
                label={supplier.label}
                name="supplier"
                value={supplier.value}
                checked={filter.supplier === supplier.value}
                onChange={handleFilterChange}
                className="mb-2"
              />
            ))}
          </Form>

          <h5 className="fw-bold mb-3 text-danger">NGÔN NGỮ</h5>
          <Form className="mb-4">
            {[
              { value: 'all', label: 'Tất cả' },
              { value: 'Tiếng Việt', label: 'Tiếng Việt' },
              { value: 'Tiếng Anh', label: 'Tiếng Anh' },
              { value: 'Tiếng Hàn', label: 'Tiếng Hàn' },
            ].map((language) => (
              <Form.Check
                key={language.value}
                type="radio"
                label={language.label}
                name="language"
                value={language.value}
                checked={filter.language === language.value}
                onChange={handleFilterChange}
                className="mb-2"
              />
            ))}
          </Form>

          <h5 className="fw-bold mb-3 text-danger">ĐỊNH DẠNG</h5>
          <Form>
            {[
              { value: 'all', label: 'Tất cả' },
              { value: 'Bìa Mềm', label: 'Bìa Mềm' },
              { value: 'Bìa Cứng', label: 'Bìa Cứng' },
            ].map((format) => (
              <Form.Check
                key={format.value}
                type="radio"
                label={format.label}
                name="format"
                value={format.value}
                checked={filter.format === format.value}
                onChange={handleFilterChange}
                className="mb-2"
              />
            ))}
          </Form>
        </Col>

        {/* Product List */}
        <Col md={9}>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h5 className="fw-bold mb-0">TẤT CẢ SẢN PHẨM</h5>
            <div className="d-flex align-items-center">
              <span className="me-2">Sắp xếp theo:</span>
              <Form.Select
                style={{ width: '200px' }}
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="default">Mặc định</option>
                <option value="price-asc">Giá: Tăng dần</option>
                <option value="price-desc">Giá: Giảm dần</option>
              </Form.Select>
            </div>
          </div>
          {/* Banner */}
          <Row className="mb-4">
            <Col>
              <img
                src={bannerImage}
                alt="Banner"
                style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
              />
            </Col>
          </Row>
          <Row className="g-4">
            {sortedBooks.length > 0 ? (
              sortedBooks.map((book) => (
                <Col key={book.id} xs={6} sm={6} md={4}>
                  {/* Sử dụng onClick để điều hướng */}
                  <div
                    onClick={() => navigate(`/product-detail/${book.id}`)}
                    style={{ cursor: 'pointer' }}
                  >
                    <BookCard book={book} />
                  </div>
                </Col>
              ))
            ) : (
              <Col>
                <p>Không tìm thấy sách phù hợp với bộ lọc.</p>
              </Col>
            )}
          </Row>

          {/* Pagination */}
          <div className="d-flex justify-content-center mt-4">
            {[1, 2, 3, 4].map((page) => (
              <Button
                key={page}
                variant="light"
                className="me-2"
                style={{
                  border: page === 1 ? '1px solid red' : '1px solid #ddd',
                  color: page === 1 ? 'red' : 'black',
                }}
              >
                {page}
              </Button>
            ))}
            <Button variant="light"></Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;