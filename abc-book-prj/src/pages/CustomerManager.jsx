import React, { useState } from 'react';
import { Table, Pagination, Button, Nav } from 'react-bootstrap';
import { FaTrash, FaBoxOpen, FaUsers, FaChartBar, FaCog, FaProductHunt } from 'react-icons/fa';
import Header from '../components/Header';

const CustomerManager = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const customersPerPage = 5; // Số khách hàng trên mỗi trang

  const customers = [
    { id: 'KH001', name: 'Nguyễn Thanh Tùng', email: 'ttung57@gmail.com', phone: '0395412685', status: 'Kích hoạt' },
    { id: 'KH002', name: 'Nguyễn Bảo Hà Anh', email: 'haanh16@gmail.com', phone: '0985312524', status: 'Kích hoạt' },
    { id: 'KH003', name: 'Trần Thị Hạnh', email: 'tranhanh@gmail.com', phone: '0869571697', status: 'Kích hoạt' },
    { id: 'KH004', name: 'Lê Thành Dương', email: 'duong29@gmail.com', phone: '0345375615', status: 'Kích hoạt' },
    { id: 'KH005', name: 'Lê Quang Hùng', email: 'qhung81@gmail.com', phone: '0973827223', status: 'Kích hoạt' },
    { id: 'KH006', name: 'Nguyễn Văn Anh', email: 'vananh88@gmail.com', phone: '0978222861', status: 'Kích hoạt' },
    { id: 'KH007', name: 'Nguyễn Huy Hoàng', email: 'hoang120@gmail.com', phone: '0969966490', status: 'Kích hoạt' },
    { id: 'KH008', name: 'Đặng Trà My', email: 'tramy71@gmail.com', phone: '0869571697', status: 'Kích hoạt' },
    { id: 'KH009', name: 'Nguyễn Thị Minh Châu', email: 'minhchau2@gmail.com', phone: '0392412774', status: 'Kích hoạt' },
    { id: 'KH010', name: 'Vũ Văn Lâm', email: 'vanlam62@gmail.com', phone: '0925463585', status: 'Kích hoạt' },
    { id: 'KH011', name: 'Trần Tiểu Vy', email: 'tieuvy37@gmail.com', phone: '0336954712', status: 'Kích hoạt' },
  ];

  // Tính toán số trang
  const totalCustomers = customers.length;
  const totalPages = Math.ceil(totalCustomers / customersPerPage);

  // Lấy dữ liệu khách hàng cho trang hiện tại
  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = customers.slice(indexOfFirstCustomer, indexOfLastCustomer);

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
                    className="text-dangedarkr d-flex align-items-center py-2 px-4"
                    
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
                    className="text-danger d-flex align-items-center py-2 px-4"
                    style={{ backgroundColor: '#f1f1f1' }}
                    >
                    <FaUsers className="me-2 text-danger" /> Khách hàng
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
        <h5 className="fw-bold mb-4">Danh sách khách hàng</h5>

        <Table bordered hover>
          <thead>
            <tr>
              <th>Mã khách hàng</th>
              <th>Tên khách hàng</th>
              <th>Email</th>
              <th>Số điện thoại</th>
              <th>Trạng thái</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {currentCustomers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td>{customer.status}</td>
                <td>
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

export default CustomerManager;