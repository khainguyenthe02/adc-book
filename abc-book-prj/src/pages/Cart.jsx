import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { FaTimes } from 'react-icons/fa';
import { getCart } from '../utils/indexedDB'; // Import từ file indexedDB.js
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
    const handleCheckout = () => {
    navigate('/checkout');
  };

  // Hàm lấy dữ liệu từ IndexedDB
  const loadCartItems = async () => {
    try {
      const cart = await getCart();
      console.log('Cart loaded from IndexedDB:', cart); // Debug
      setCartItems(cart || []);
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu từ IndexedDB:', error);
      setCartItems([]);
    }
  };

  // Load giỏ hàng từ IndexedDB khi component mount
  useEffect(() => {
    loadCartItems();
  }, []);

  // Cập nhật IndexedDB khi giỏ hàng thay đổi
  useEffect(() => {
    if (cartItems.length > 0) {
      saveCart(cartItems).catch((error) =>
        console.error('Lỗi khi lưu vào IndexedDB:', error)
      );
    }
  }, [cartItems]);

  // Xử lý chọn sản phẩm
  const handleSelectItem = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id]
    );
  };

  // Tăng số lượng
  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Giảm số lượng
  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Xóa sản phẩm
  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    setSelectedItems((prev) => prev.filter((itemId) => itemId !== id));
  };

  // Tính tổng tiền và tiết kiệm
  const calculateTotal = () => {
    return cartItems
      .filter((item) => selectedItems.includes(item.id))
      .reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateSavings = () => {
    return cartItems
      .filter((item) => selectedItems.includes(item.id))
      .reduce((savings, item) => {
        const originalPrice = item.originalPrice || item.price;
        return savings + (originalPrice - item.price) * item.quantity;
      }, 0);
  };

  return (
    <div className="container">
      <Header />
      <div className="d-flex justify-content-between align-items-center m-4">
        <div>
            <span className="h5 fw-bold">Trang chủ / </span><span className="h5 fw-bold" style={{color: 'red'}}>Giỏ hàng</span>
        </div>
        <h5 className="fw-bold">Tổng số sản phẩm: {cartItems.length}</h5>
      </div>

      {cartItems.length === 0 ? (
        <p>Giỏ của bạn đang trống.</p>
      ) : (
        <div  style={{ backgroundColor: '#FFF5F5', borderRadius: '8px' }}>
          {/* Tiêu đề cột */}
          <div className="row m-4 text-muted border-bottom p-2" >    
            <div className="col-1">
              <input
                type="checkbox"
                checked={selectedItems.length === cartItems.length}
                onChange={() =>
                  setSelectedItems(
                    selectedItems.length === cartItems.length
                      ? []
                      : cartItems.map((item) => item.id)
                  )
                }
              />
            </div>
            <div className="col-2">Hình ảnh</div>
            <div className="col-3">Thông tin</div>
            <div className="col-2">Số lượng</div>
            <div className="col-1">Giá thành</div>
            <div className="col-2">Thành tiền</div>
            <div className="col-1"></div>
          </div>

          {/* Danh sách sản phẩm */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="row align-items-center m-4 p-3"
              style={{ backgroundColor: '#FFF5F5', borderRadius: '8px' }}
            >
              <div className="col-1">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item.id)}
                  onChange={() => handleSelectItem(item.id)}
                />
              </div>
              <div className="col-2">
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '80px', height: 'auto' }}
                />
              </div>
              <div className="col-3">
                <p className="mb-0 fw-bold">{item.title}</p>
              </div>
                <div className="col-2 d-flex align-items-center">
                <button
                    onClick={() => decreaseQuantity(item.id)}
                    style={{
                        borderRadius: '0%',
                        backgroundColor: '#E01A2233', // Nền trắng
                        color: '#000000', // Màu chữ đen
                        fontWeight: 'bold',
                        width: '40px',
                        height: '40px',
                        padding: '0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    -
                </button>
                <span
                    style={{
                    color: '#000000', // Màu chữ đen
                    borderColor: '#00000000', // Viền đen
                    backgroundColor: '#E01A2233', // Nền trắng
                    fontWeight: 'bold',
                    fontSize: '16px',
                    minWidth: '40px',
                    height: '40px',
                    textAlign: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    
                    }}
                >
                    {item.quantity}
                </span>
                <button
                
                    onClick={() => increaseQuantity(item.id)}
                    style={{
                        borderRadius: '0%',
                        borderColor: '#00000000', // Viền đen
                        backgroundColor: '#E01A2233', // Nền trắng
                        color: '#000000', // Màu chữ đen
                        fontWeight: 'bold',
                        width: '40px',
                        height: '40px',
                        padding: '0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    +
                </button>
                </div>
              <div className="col-1 text-danger fw-bold">
                {item.price.toLocaleString()}₫
              </div>
              <div className="col-2 text-danger fw-bold">
                {(item.price * item.quantity).toLocaleString()}₫
              </div>
              <div className="col-1">
                <button
                  className="btn p-0"
                  onClick={() => removeItem(item.id)}
                >
                  <FaTimes />
                </button>
              </div>
            </div>
          ))}
        </div>
        
      )}
                {/* Tổng tiền và tiết kiệm */}
          <div className="d-flex justify-content-end m-4 p-4">
            <div className="text-end">
              <p className="m-4">
                Tổng tiền: <span className="text-danger fw-bold">{calculateTotal().toLocaleString()}₫</span>
              </p>
              <p className="m-4">
                Tiết kiệm giảm bạn: <span className="text-danger fw-bold">{calculateSavings().toLocaleString()} VNĐ</span>
              </p>
              <div className="d-flex justify-content-end gap-3">
                <button className="btn btn-outline-danger" onClick={() => navigate('/list-product')}>QUAY LẠI MUA HÀNG</button>
                <button className="btn btn-danger" onClick={handleCheckout}>
                  Thanh toán <span className="ms-2">→</span>
                </button>
              </div>
            </div>
          </div>
    </div>
  );
};

// Hàm lưu giỏ hàng vào IndexedDB (đã import từ indexedDB.js)
const saveCart = async (cart) => {
  try {
    await import('../utils/indexedDB').then(({ saveCart }) => saveCart(cart));
  } catch (error) {
    console.error('Lỗi khi lưu giỏ hàng:', error);
  }
};

export default Cart;