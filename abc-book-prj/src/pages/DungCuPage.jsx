import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import BookCard from '../components/BookCard';
import dungcuData from '../data/dungcuData';
import bannerImage from '../../public/assets/slide4.jpg';
import Header from '../components/Header';

const DungCuPage = () => {
  const [filter, setFilter] = useState({
    priceRange: 'all',
    supplier: 'all',
    brand: 'all',
    baohanh: 'all',
    type: 'all',
  });
  const [sortOption, setSortOption] = useState('default');

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  const filteredItems = dungcuData.filter((item) => {
    if (filter.priceRange !== 'all') {
      const [min, max] = filter.priceRange.split('-').map((val) => (val ? Number(val) : Infinity));
      if (item.price < min || (max !== Infinity && item.price > max)) return false;
    }

    if (filter.supplier !== 'all' && item.supplier !== filter.supplier) return false;

    if (filter.brand !== 'all' && item.brand !== filter.brand) return false;

    if (filter.baohanh !== 'all' && item.baohanh !== filter.baohanh) return false;

    if (filter.type !== 'all' && item.type !== filter.type) return false;

    return true;
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortOption === 'price-asc') {
      return a.price - b.price;
    }
    if (sortOption === 'price-desc') {
      return b.price - a.price;
    }
    return 0;
  });

  useEffect(() => {
  }, [filter, sortOption, filteredItems, sortedItems]);

  return (
    <Container>
      <Header />
      <div className="m-4">
        <a href="/home" style={{ color: 'black', fontWeight: 'bold' }}>Trang chủ</a> / <strong style={{ color: 'red', fontWeight: 'bold' }}>Dụng cụ</strong>
      </div>
      <Row className="m-4">
        {/* Sidebar Filters */}
        <Col md={3}>
          <h5 className="fw-bold mb-3 text-danger">DANH MỤC VĂN PHÒNG PHẨM</h5>
          <Form className="mb-4">
            {[
              { value: 'all', label: 'Tất cả' },
              { value: 'Dụng cụ văn phòng', label: 'Dụng cụ văn phòng' },
              { value: 'Dụng cụ học sinh', label: 'Dụng cụ học sinh' },
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

          <h5 className="fw-bold mb-3 text-danger">THƯƠNG HIỆU</h5>
          <Form className="mb-4">
            {[
              { value: 'all', label: 'Tất cả' },
              { value: 'Thiên Long', label: 'Thiên Long' },
              { value: 'Deli', label: 'Deli' },
              { value: 'Plus', label: 'Plus' },
              { value: 'Artline', label: 'Artline' },
              { value: 'Stacom', label: 'Stacom' },
            ].map((brand) => (
              <Form.Check
                key={brand.value}
                type="radio"
                label={brand.label}
                name="brand"
                value={brand.value}
                checked={filter.brand === brand.value}
                onChange={handleFilterChange}
                className="mb-2"
              />
            ))}
          </Form>

          <h5 className="fw-bold mb-3 text-danger">NHÀ CUNG CẤP</h5>
          <Form className="mb-4">
            {[
              { value: 'all', label: 'Tất cả' },
              { value: 'Thiên Long Hoàn Cầu', label: 'Thiên Long Hoàn Cầu' },
              { value: 'Văn phòng phẩm Deli', label: 'Văn phòng phẩm Deli' },
              { value: 'Văn phòng phẩm Artline', label: 'Văn phòng phẩm Artline' },
              { value: 'Cty Văn Phòng Sáng Tạo', label: 'Cty Văn Phòng Sáng Tạo' },
              { value: 'Cty Fabico', label: 'Cty Fabico' },
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

          <h5 className="fw-bold mb-3 text-danger">BẢO HÀNH</h5>
          <Form>
            {[
              { value: 'all', label: 'Tất cả' },
              { value: '1 năm', label: '1 năm' },
              { value: '2 năm', label: '2 năm' },
              { value: '5 năm', label: '5 năm' },
            ].map((warranty) => (
              <Form.Check
                key={warranty.value}
                type="radio"
                label={warranty.label}
                name="baohanh"
                value={warranty.value}
                checked={filter.baohanh === warranty.value}
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
            {sortedItems.length > 0 ? (
              sortedItems.map((item) => (
                <Col key={item.id} xs={6} sm={6} md={4}>
                  <BookCard book={item} />
                </Col>
              ))
            ) : (
              <Col>
                <p>Không tìm thấy sản phẩm phù hợp với bộ lọc.</p>
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
            <Button variant="light">&gt;</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DungCuPage;