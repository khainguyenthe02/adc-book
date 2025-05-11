import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getCart } from '../utils/indexedDB';

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [customerInfo, setCustomerInfo] = useState({
    fullName: '',
    phone: '',
    email: '',
    district: '',
    ward: '',
    address: '',
  });
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const navigate = useNavigate();

  useEffect(() => {
    const loadCart = async () => {
      try {
        const cart = await getCart();
        setCartItems(cart || []);
      } catch (error) {
        console.error('Lỗi khi lấy giỏ hàng:', error);
        setCartItems([]);
      }
    };
    loadCart();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.originalPrice * item.quantity, 0);
  };
  const calculateDiscount = () => {
  return cartItems.reduce(
    (total, item) => total + (item.originalPrice - item.price) * item.quantity,
    0
  );
};

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!customerInfo.fullName || !customerInfo.phone || !customerInfo.district || !customerInfo.ward) {
      alert('Vui lòng nhập đầy đủ họ và tên, số điện thoại, quận/huyện và xã/phường!');
      return;
    }
    alert(`Đơn hàng đã được đặt!\nThông tin: ${JSON.stringify(customerInfo)}\nTổng tiền: ${calculateTotal().toLocaleString()}đ\nPhương thức: ${paymentMethod}`);
    navigate('/'); // Quay về trang chủ sau khi đặt hàng
  };

  return (
    <div className="container">
      <Header />
      <div className="d-flex justify-content-between align-items-center m-4">
        <h2 className="h5 fw-bold text-danger">Thông tin giao hàng / Thanh toán</h2>
        
      </div>

      <Row>
        {/* Thông tin khách hàng */}
        <Col md={8} className='m-4'>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="h4 fw-bold text-danger">Thanh toán</h1>
            <div>
              <p className='fw-bold text-danger'>Mặc định</p>
            </div>
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Họ và tên <span className='text-danger'>*</span></Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                value={customerInfo.fullName}
                onChange={handleInputChange}
                placeholder="Nguyễn Văn Anh"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Số điện thoại <span className='text-danger'>*</span></Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={customerInfo.phone}
                onChange={handleInputChange}
                placeholder="0978222861"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Địa chỉ email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={customerInfo.email}
                onChange={handleInputChange}
                placeholder="vananh@gmail.com"
              />
            </Form.Group>
            <Row className="mb-3">
              <Col>
                <Form.Group>
                  <Form.Label>Quận/Huyện / Thị xã <span className='text-danger'>*</span></Form.Label>
                  <Form.Control
                    type="text"
                    name="district"
                    value={customerInfo.district}
                    onChange={handleInputChange}
                    placeholder="Hoàng Mai"
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Xã/Phường/Thị trấn <span className='text-danger'>*</span></Form.Label>
                  <Form.Control
                    type="text"
                    name="ward"
                    value={customerInfo.ward}
                    onChange={handleInputChange}
                    placeholder="Đại Kim"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Địa chỉ (nếu có)</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={customerInfo.address}
                onChange={handleInputChange}
                placeholder="Số 168 đường Kim Giang"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{color: 'red', fontSize: '18px', fontWeight: 'bold'}}>Phương thức thanh toán *</Form.Label>
              <div>
                <Form.Check
                  type="radio"
                  label="Thanh toán khi nhận hàng"
                  name="paymentMethod"
                  value="cash"
                  checked={paymentMethod === 'cash'}
                  onChange={handlePaymentChange}
                />
                <Form.Check
                  type="radio"
                  label="Thanh toán bằng thẻ ngân hàng"
                  name="paymentMethod"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={handlePaymentChange}
                />
                <Form.Check
                  type="radio"
                  label="Thanh toán qua ví điện tử (MoMo, Zalo Pay, VNPay,...)"
                  name="paymentMethod"
                  value="wallet"
                  checked={paymentMethod === 'wallet'}
                  onChange={handlePaymentChange}
                />
                <Form.Check
                  type="radio"
                  label="Thanh toán qua thẻ tín dụng/ghi nợ"
                  name="paymentMethod"
                  value="credit"
                  checked={paymentMethod === 'credit'}
                  onChange={handlePaymentChange}
                />
              </div>
            </Form.Group>
          </Form>
        </Col>

        {/* Danh sách sản phẩm */}
        <Col md={3} style={{ backgroundColor: '#FFF5F5', padding: '20px', borderRadius: '8px' }}>
          <h2 className="h5 fw-bold text-danger mb-4">Đơn hàng của bạn</h2>
          {cartItems.length === 0 ? (
            <p>Giỏ hàng của bạn đang trống.</p>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={item.id} className="d-flex align-items-center mb-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '80px', height: 'auto', marginRight: '10px' }}
                  />
                  <div>
                    <p className="mb-0">{item.title}</p>
                    <div className='d-flex justify-content-between'>
                      <p className="text-muted mb-0">Số lượng: {item.quantity}</p>
                      <p className="text-danger fw-bold">{(item.price * item.quantity).toLocaleString()}đ</p>
                    </div>
                    
                  </div>
                </div>
              ))}
              <hr />
              <ul className="list-unstyled" style={{ backgroundColor: '#FFF5F5', padding: '20px', borderRadius: '8px' }}>
                <li className="d-flex justify-content-between  p-2 border-bottom">
                  <span>Tổng phụ:</span>
                  <span className="text-danger fw-bold">{calculateTotal().toLocaleString()}đ</span>
                </li>
                <li className="d-flex justify-content-between  p-2 border-bottom">
                  <span>Phí vận chuyển:</span>
                  <span className="text-danger fw-bold">25.000đ</span>
                </li>
                <li className="d-flex justify-content-between mb-4 p-2 border-bottom">
                  <span>Giảm giá:</span>
                  <span className="text-danger fw-bold">{calculateDiscount().toLocaleString()}đ</span>
                </li>
                <li className="d-flex justify-content-between fw-bold p-2">
                  <span>Tổng thanh toán:</span>
                  <span className="text-danger">{(calculateTotal() + 25000 - calculateDiscount()).toLocaleString()}đ</span>
                </li>
              </ul>
            </>
          )}
        </Col>
      </Row>
      <div className="d-flex justify-content-between m-4">
          <Button variant="outline-danger" className="me-3 mt-3" onClick={() => navigate('/cart')}>
          Quay lại mua hàng
        </Button>
        <Button variant="danger" type="submit" className="mt-3 me-4">
          Tiếp tục mua <span className="ms-2">→</span>
        </Button>
      </div>
    </div>
  );
};

export default Checkout;