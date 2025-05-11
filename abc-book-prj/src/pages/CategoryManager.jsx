import React, { useState } from 'react';
import { Table, Pagination, Button, Nav } from 'react-bootstrap';
import { FaEye, FaEdit, FaTrash, FaPlus, FaBoxOpen, FaUsers, FaChartBar, FaCog, FaProductHunt } from 'react-icons/fa';
import Header from '../components/Header';

const CategoryManager = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const categoriesPerPage = 5; // Số danh mục trên mỗi trang

  const categories = [
    { id: 'DM001', name: 'Văn Học', date: '02/12/2025', quantity: 40 },
    { id: 'DM002', name: 'Kinh Tế', date: '03/12/2025', quantity: 45 },
    { id: 'DM003', name: 'Tâm lý - Kĩ năng sống', date: '03/12/2025', quantity: 50 },
    { id: 'DM004', name: 'Tiểu Thuyết', date: '02/12/2025', quantity: 35 },
    { id: 'DM005', name: 'Sách Thiếu Nhi', date: '04/12/2025', quantity: 40 },
    { id: 'DM006', name: 'Tiểu Sử - Hồi Ký', date: '04/12/2025', quantity: 30 },
    { id: 'DM007', name: 'Giáo Khoa - Tham Khảo', date: '05/12/2025', quantity: 55 },
    { id: 'DM008', name: 'Sách Học Ngoại Ngữ', date: '05/12/2025', quantity: 20 },
  ];

  // Tính toán số trang
  const totalCategories = categories.length;
  const totalPages = Math.ceil(totalCategories / categoriesPerPage);

  // Lấy dữ liệu danh mục cho trang hiện tại
  const indexOfLastCategory = currentPage * categoriesPerPage;
  const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
  const currentCategories = categories.slice(indexOfFirstCategory, indexOfLastCategory);

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
                    style={{ backgroundColor: '#f1f1f1' }}
                    active
                >
                    <FaBoxOpen className="me-2 text-dark" /> Danh mục sản phẩm
                </Nav.Link>
                    <Nav.Link
                    href="/products"
                    className="text-dark d-flex align-items-center py-2 px-4"
                    
                    >
                    <FaProductHunt className="me-2 text-dark" /> Sản phẩm
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
          <h5 className="fw-bold">Danh sách danh mục</h5>
          <Button variant="danger">
            <FaPlus className="me-2" /> Thêm danh mục
          </Button>
        </div>

        <Table bordered hover>
          <thead>
            <tr>
              <th>STT</th>
              <th>Mã danh mục</th>
              <th>Tên danh mục</th>
              <th>Ngày tạo</th>
              <th>Số lượng</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {currentCategories.map((category, index) => (
              <tr key={category.id}>
                <td>{indexOfFirstCategory + index + 1}</td>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td>{category.date}</td>
                <td>{category.quantity}</td>
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

export default CategoryManager;