import React, { useState } from 'react';
import { Table, Pagination, Button, Nav } from 'react-bootstrap';
import { FaEye, FaEdit, FaTrash, FaBoxOpen, FaUsers, FaChartBar, FaCog, FaProductHunt } from 'react-icons/fa';
import booksData from '../data/booksData'; // Import dữ liệu từ booksData.js
import Header from '../components/Header';

const ProductManager = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5; // Số sản phẩm trên mỗi trang

  // Tính toán số trang
  const totalProducts = booksData.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  // Lấy dữ liệu sản phẩm cho trang hiện tại
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = booksData.slice(indexOfFirstProduct, indexOfLastProduct);

  // Xử lý chuyển trang
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container">
      <Header />
      {/* Sidebar */}
      <div
        className="bg-white border-end"
        style={{
          width: '250px',
          padding: '20px 0',
          position: 'fixed',
          height: '100%',
          overflowY: 'auto',
        }}
      >
        <h4 className="text-center mb-4 text-danger">Danh mục quản lý</h4>
        <Nav className="flex-column">
            <Nav.Link
            href="/orders"
            className="text-dark d-flex align-items-center py-2 px-4"
            
            active
            >
            <FaBoxOpen className="me-2 text-dark" /> Đơn hàng
            </Nav.Link>
            <Nav.Link
            href="/categories"
            className="text-dark d-flex align-items-center py-2 px-4"
            
            active
        >
            <FaBoxOpen className="me-2 text-dark" /> Danh mục sản phẩm
        </Nav.Link>
            <Nav.Link
            href="/products"
            className="text-danger d-flex align-items-center py-2 px-4"
            style={{ backgroundColor: '#f1f1f1' }}
            >
            <FaProductHunt className="me-2 text-danger" /> Sản phẩm
            </Nav.Link>
            <Nav.Link
            href="/employees"
            className="text-dark d-flex align-items-center py-2 px-4"
            
            >
            <FaUsers className="me-2 text-dark" /> Nhân viên
            </Nav.Link>
            <Nav.Link
            href="/customers"
            className="text-dark d-flex align-items-center py-2 px-4"
            >
            <FaUsers className="me-2 text-dark" /> Khách hàng
            </Nav.Link>
            <Nav.Link
            href="/analytics"
            className="text-dark d-flex align-items-center py-2 px-4"
            >
            <FaChartBar className="me-2 text-dark" /> Thống kê
            </Nav.Link>
            <Nav.Link
            href="/settings"
            className="text-dark d-flex align-items-center py-2 px-4"
            >
            <FaCog className="me-2 text-dark" /> Cài đặt
            </Nav.Link>
        </Nav>
      </div>

      {/* Nội dung chính */}
      <div className="flex-grow-1" style={{ marginLeft: '250px', padding: '20px' }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="fw-bold">Danh sách sản phẩm</h5>
          <Button variant="danger">
            <FaBoxOpen className="me-2" /> Thêm sản phẩm
          </Button>
        </div>

        <Table bordered hover>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên sản phẩm</th>
              <th>Danh mục</th>
              <th>Số lượng</th>
              <th>Giá bán</th>
              <th>Nhà cung cấp</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product, index) => (
              <tr key={product.id}>
                <td>{indexOfFirstProduct + index + 1}</td>
                <td>{product.title}</td>
                <td>{product.type}</td>
                <td>{product.quantity}</td>
                <td>{product.price.toLocaleString()}đ</td>
                <td>{product.supplier}</td>
                <td>
                  <Button variant="outline-primary" size="sm" className="me-2">
                    <FaEye /> Xem
                  </Button>
                  <Button variant="outline-warning" size="sm" className="me-2">
                    <FaEdit /> Sửa
                  </Button>
                  <Button variant="outline-danger" size="sm">
                    <FaTrash /> Xóa
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* Pagination */}
        <Pagination className="justify-content-center mt-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
    </div>
  );
};

export default ProductManager;