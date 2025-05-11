import React, { useState } from 'react';
import { Table, Pagination, Badge, Button, Nav } from 'react-bootstrap';
import { FaEye, FaBoxOpen, FaProductHunt, FaUsers, FaChartBar, FaCog } from 'react-icons/fa';
import orders from '../data/order'; // Import danh sách đơn hàng
import Header from '../components/Header';

const OrderManager = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterStatus, setFilterStatus] = useState('Tất cả'); // Trạng thái lọc
  const ordersPerPage = 5; // Số đơn hàng trên mỗi trang

  // Lọc đơn hàng theo trạng thái
  const filteredOrders = filterStatus === 'Tất cả'
    ? orders
    : orders.filter((order) => order.status === filterStatus);

  // Tính toán số trang
  const totalOrders = filteredOrders.length;
  const totalPages = Math.ceil(totalOrders / ordersPerPage);

  // Lấy dữ liệu đơn hàng cho trang hiện tại
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);

  // Xử lý chuyển trang
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderStatusBadge = (status) => {
    switch (status) {
      case 'Chờ xác nhận':
        return <Badge bg="warning" text="dark">Chờ xác nhận</Badge>;
      case 'Đã xác nhận':
        return <Badge bg="info">Đã xác nhận</Badge>;
      case 'Đang giao':
        return <Badge bg="success">Đang giao</Badge>;
      case 'Đã giao':
        return <Badge bg="primary">Đã giao</Badge>;
      case 'Đã hủy':
        return <Badge bg="danger">Đã hủy</Badge>;
      default:
        return <Badge bg="secondary">Không xác định</Badge>;
    }
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
            className="text-danger d-flex align-items-center py-2 px-4"
            style={{ backgroundColor: '#f1f1f1' }}
            active
          >
            <FaBoxOpen className="me-2 text-danger" /> Đơn hàng
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
        <h5 className="fw-bold mb-4">Đơn hàng</h5>

        {/* Bộ lọc trạng thái */}
        <div className="d-flex justify-content-start mb-4">
          {['Tất cả', 'Chờ xác nhận', 'Đã xác nhận', 'Đang giao', 'Đã giao', 'Đã hủy'].map((status) => (
            <Button
              key={status}
              variant={filterStatus === status ? 'danger' : 'outline-danger'}
              className="me-2"
              onClick={() => {
                setFilterStatus(status);
                setCurrentPage(1); // Reset về trang đầu tiên khi thay đổi bộ lọc
              }}
            >
              {status}
            </Button>
          ))}
        </div>

        <Table bordered hover>
          <thead>
            <tr>
              <th>Mã đơn hàng</th>
              <th>Tên khách hàng</th>
              <th>Ngày đặt hàng</th>
              <th>Trạng thái</th>
              <th>Tổng tiền</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.date}</td>
                <td>{renderStatusBadge(order.status)}</td>
                <td>{order.total}</td>
                <td>
                  <Button variant="outline-primary" size="sm">
                    <FaEye /> Xem
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

export default OrderManager;