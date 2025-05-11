import React, { useState } from 'react';
import { Table, Pagination, Button, Nav } from 'react-bootstrap';
import { FaEye, FaEdit, FaTrash, FaBoxOpen, FaUsers, FaChartBar, FaCog, FaProductHunt } from 'react-icons/fa';
import Header from '../components/Header';

const EmployeeManager = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 5; // Số nhân viên trên mỗi trang

  const employees = [
    { id: 'NV001', name: 'Nguyễn Thị Lan', gender: 'Nữ', dob: '18/06/1998', phone: '0864215392', email: 'lan186@gmail.com', role: 'Quản lý' },
    { id: 'NV002', name: 'Đặng Thị Hoa', gender: 'Nữ', dob: '20/03/1999', phone: '0974236712', email: 'hoa203@gmail.com', role: 'Nhân viên' },
    { id: 'NV003', name: 'Đào Hải Yến', gender: 'Nữ', dob: '22/05/1999', phone: '0962215123', email: 'yen225@gmail.com', role: 'Nhân viên' },
    { id: 'NV004', name: 'Triệu Hải Anh', gender: 'Nữ', dob: '08/11/1999', phone: '0932785691', email: 'anh811@gmail.com', role: 'Nhân viên' },
    { id: 'NV005', name: 'Trần Quỳnh Anh', gender: 'Nữ', dob: '06/02/1999', phone: '0832725334', email: 'anh602@gmail.com', role: 'Nhân viên' },
    { id: 'NV006', name: 'Vũ Thị Diệp', gender: 'Nữ', dob: '12/04/2000', phone: '0823298741', email: 'diep12@gmail.com', role: 'Nhân viên' },
    { id: 'NV007', name: 'Nguyễn Thị Hoài', gender: 'Nữ', dob: '10/03/2000', phone: '0824235542', email: 'hoai103@gmail.com', role: 'Nhân viên' },
    { id: 'NV008', name: 'Trần Thị Ngọc', gender: 'Nữ', dob: '29/07/1999', phone: '0972508123', email: 'ngoc29@gmail.com', role: 'Nhân viên' },
    { id: 'NV009', name: 'Phạm Khánh Linh', gender: 'Nữ', dob: '05/08/1998', phone: '0932221598', email: 'linh508@gmail.com', role: 'Nhân viên' },
    { id: 'NV010', name: 'Vũ Phương Uyên', gender: 'Nữ', dob: '06/02/1999', phone: '0812695447', email: 'uyen62@gmail.com', role: 'Nhân viên' },
  ];

  // Tính toán số trang
  const totalEmployees = employees.length;
  const totalPages = Math.ceil(totalEmployees / employeesPerPage);

  // Lấy dữ liệu nhân viên cho trang hiện tại
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee);

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
            className="text-danger d-flex align-items-center py-2 px-4"
            style={{ backgroundColor: '#f1f1f1' }}
            >
            <FaUsers className="me-2 text-danger" /> Nhân viên
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
          <h5 className="fw-bold">Danh sách nhân viên</h5>
          <Button variant="danger">
            <FaUsers className="me-2" /> Thêm nhân viên
          </Button>
        </div>

        <Table bordered hover>
          <thead>
            <tr>
              <th>Mã nhân viên</th>
              <th>Họ tên</th>
              <th>Giới tính</th>
              <th>Ngày sinh</th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th>Chức vụ</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {currentEmployees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.gender}</td>
                <td>{employee.dob}</td>
                <td>{employee.phone}</td>
                <td>{employee.email}</td>
                <td>{employee.role}</td>
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

export default EmployeeManager;