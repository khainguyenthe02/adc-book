import React, { useState } from 'react';
import Header from '../components/Header';
import booksData from '../data/booksData';
import { Row, Col } from 'react-bootstrap';
import BookCard from '../components/BookCard';
import { FaFacebookF, FaTwitter, FaPinterest, FaEnvelope, FaShoppingCart } from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom';
import { saveCart } from '../utils/indexedDB'; // Import từ file indexedDB.js

const ProductDetail = () => {
  const { id } = useParams(); // Lấy id từ URL
  const product = booksData.find((book) => book.id === parseInt(id)); // Tìm sản phẩm theo id
  const navigate = useNavigate();

  // Kiểm tra nếu không tìm thấy sản phẩm
  if (!product) {
    return <div className="container"><p>Sản phẩm không tồn tại.</p></div>;
  }

  const [mainImage, setMainImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);

  // Hàm xử lý tăng giảm số lượng
  const handleQuantityChange = (action) => {
    if (action === '-') {
      setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    } else if (action === '+') {
      setQuantity(prev => prev + 1);
    }
  };

  // Hàm thêm sản phẩm vào giỏ hàng trong IndexedDB
  const addToCart = async () => {
    try {
      const cart = await getCart(); // Lấy giỏ hàng hiện tại
      const existingProductIndex = cart.findIndex(item => item.id === product.id);

      const productToAdd = {
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        originalPrice: product.originalPrice,
        discount: product.discount,
        quantity: quantity,
      };

      if (existingProductIndex > -1) {
        cart[existingProductIndex].quantity += quantity;
      } else {
        cart.push(productToAdd);
      }

      await saveCart(cart);
      console.log('Cart saved to IndexedDB:', cart); // Debug
      alert(`Đã thêm ${product.title} (Số lượng: ${quantity}) vào giỏ hàng!`);
      navigate('/cart');
    } catch (error) {
      console.error('Lỗi khi lưu vào IndexedDB:', error);
      alert('Đã có lỗi xảy ra khi thêm sản phẩm vào giỏ hàng. Vui lòng thử lại!');
    }
  };

  // Hàm lấy giỏ hàng từ IndexedDB
  const getCart = async () => {
    try {
      const cart = await import('../utils/indexedDB').then(({ getCart }) => getCart());
      return cart || [];
    } catch (error) {
      console.error('Lỗi khi lấy giỏ hàng:', error);
      return [];
    }
  };

  return (
    <div className="container">
      <Header />
      {/* Breadcrumb */}
      <div className="m-4 ">
        <a href="/home" className="text-dark fw-bold">Trang chủ</a> / <a href="/list-product" className="text-dark fw-bold">Sản phẩm</a> / <span className="text-danger fw-bold">Chi tiết sản phẩm</span>
      </div>

      {/* Product Section */}
      <div className="row">
        {/* Product Image */}
        <div className="col-md-6 d-flex flex-column align-items-center">
          {/* Hình ảnh chính */}
          <img
            src={mainImage}
            alt="Product"
            className="img-fluid rounded mb-3 border border-light"
            style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'contain' }}
          />
          {/* Thẻ div chứa 4 hình ảnh thu nhỏ */}
          <div className="d-flex gap-2 justify-content-center">
            {[product.image, '../../assets/detail2.webp', '../../assets/detail3.webp', '../../assets/detail4.webp'].map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="img-thumbnail border border-light"
                style={{ width: '60px', height: '60px', backgroundColor: '#f9e8e8', cursor: 'pointer' }}
                onClick={() => setMainImage(image)}
              />
            ))}
          </div>
          {/* Thẻ div chứa các icon Fa */}
          <div className="mt-3 d-flex justify-content-center">
            <span className="me-2" style={{ fontSize: '16px' }}>Chia sẻ:</span>
            <FaFacebookF className="text-primary me-2" style={{ fontSize: '20px' }} />
            <FaTwitter className="text-info me-2" style={{ fontSize: '20px' }} />
            <FaPinterest className="text-danger me-2" style={{ fontSize: '20px' }} />
            <FaEnvelope className="text-secondary" style={{ fontSize: '20px' }} />
          </div>
        </div>

        {/* Product Info */}
        <div className="col-md-6">
          <h1 className="h4 fw-bold" style={{ color: '#d32f2f', fontSize: '24px', marginBottom: '8px' }}>
            {product.title}
          </h1>
          <p className="text-muted" style={{ fontSize: '16px', marginBottom: '12px' }}>
            Nhà cung cấp: <span style={{ color: '#d32f2f', fontWeight: 'bold' }}>{product.supplier}</span> - Ngôn ngữ: <span style={{ color: '#d32f2f', fontWeight: 'bold' }}>{product.language}</span>
          </p>
          <div className="d-flex gap-2 mb-3">
            <span className="badge p-2 text-dark" style={{ backgroundColor: '#E01A2210', fontSize: '14px' }}>{product.type}</span>
            <span className="badge p-2 text-dark" style={{ backgroundColor: '#E01A2210', fontSize: '14px' }}>{product.format}</span>
          </div>
          <div className="d-flex align-items-center mb-3">
            <span className="text-warning me-2">★★★★☆</span>
            <span className="text-muted">(42 đánh giá)</span>
            <span className="text-muted ms-3">Đã bán: 98</span>
            <span className="text-muted ms-3">Còn lại: 120</span>
          </div>
          <div className="d-flex align-items-center mb-3">
            <span className="text-danger h4 fw-bold me-3" style={{ fontSize: '24px' }}>{product.price.toLocaleString()}₫</span>
            {product.originalPrice && (
              <>
                <span className="badge bg-danger me-3" style={{ color: '#fff', fontSize: '12px', padding: '4px 8px' }}>{product.discount}</span>
                <span className="text-muted text-decoration-line-through" style={{ fontSize: '14px' }}>{product.originalPrice.toLocaleString()}₫</span>
              </>
            )}
          </div>
          <p className="text-muted" style={{ fontFamily: 'Inter', fontSize: '16px', lineHeight: '1.6', marginBottom: '16px' }}>
            {product.description}
          </p>
          <div className="d-flex align-items-center mb-3">
            <span className="me-3" style={{ fontSize: '16px' }}>Số lượng:</span>
            <div className="input-group" style={{ width: '120px' }}>
              <button className="btn btn-outline-secondary" onClick={() => handleQuantityChange('-')}>-</button>
              <input
                type="text"
                className="form-control text-center"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              />
              <button className="btn btn-outline-secondary" onClick={() => handleQuantityChange('+')}>+</button>
            </div>
          </div>
          <div className="d-flex gap-3">
            <button className="btn btn-outline-danger px-4" style={{ borderColor: '#d32f2f', color: '#d32f2f', fontSize: '16px' }} onClick={addToCart}>
              <FaShoppingCart className="me-2" />
              Thêm vào giỏ
            </button>
            <button className="btn btn-danger px-4" style={{ backgroundColor: '#d32f2f', color: '#fff', fontSize: '16px' }}>
              Đặt mua ngay
              <span className="ms-2">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Description and Details */}
      <div className="row m-5 p-4" style={{ background: '#E01A2210' }}>
        {/* Description */}
        <div className="col-md-6">
          <h2 className="h5 fw-bold" style={{ color: '#d32f2f', fontFamily: 'Inter' }}>MÔ TẢ SẢN PHẨM</h2>
          <hr style={{ borderColor: '#d32f2f', borderWidth: '2px' }} />
          <p className="text-muted" style={{ fontFamily: 'Inter', fontSize: '16px', lineHeight: '1.8', fontWeight: 'bold' }}>
            Giới thiệu sách<br />
            {product.productIntro}
          </p>
          <p className="text-muted" style={{ fontFamily: 'Inter', fontSize: '16px', lineHeight: '1.8', fontWeight: 'bold' }}>
            Giới Thiệu Tác Giả<br />
            {product.authorIntro}
          </p>
          <a href="#" className="text-danger" style={{ fontFamily: 'Inter', fontSize: '16px' }}>Chi tiết</a>
        </div>
        <div className="col-md-2"></div>
        {/* Details */}
        <div className="col-md-4" style={{ fontWeight: 'bold' }}>
          <h2 className="h5 fw-bold" style={{ color: '#d32f2f', fontFamily: 'Inter' }}>THÔNG TIN CHI TIẾT</h2>
          <hr style={{ borderColor: '#d32f2f', borderWidth: '2px' }} />
          <ul className="list-unstyled text-muted" style={{ fontFamily: 'Inter', fontSize: '16px', lineHeight: '1.8' }}>
            <li className="pb-2 border-bottom">Mã hàng: <span>8936225390072</span></li>
            <li className="pb-2 border-bottom">Tác giả: <span>Phú Thư</span></li>
            <li className="pb-2 border-bottom">Người dịch: <span>Phạm My</span></li>
            <li className="pb-2 border-bottom">NXB: <span style={{ color: '#d32f2f' }}>Dân Trí</span></li>
            <li className="pb-2 border-bottom">Năm XB: <span>2024</span></li>
            <li className="pb-2 border-bottom">Trọng lượng (gr): <span>320</span></li>
            <li className="pb-2 border-bottom">Kích thước: <span>20.5 x 13 x 1.5 cm</span></li>
            <li>Hình thức: <span>Bìa mềm</span></li>
          </ul>
        </div>
      </div>

      {/* Reviews and Promotions Section */}
      <div className="row mt-5">
        {/* Reviews */}
        <div className="col-md-7 m-4">
          <h2 className="h5 fw-bold text-danger">ĐÁNH GIÁ SẢN PHẨM</h2>
          <div className="d-flex gap-3 mt-3 m-4">
            <span className="fw-bold text-danger">Nội dung sách</span>
            <span className="text-muted">/</span>
            <span className="text-muted">Dịch vụ mua hàng</span>
          </div>
          <hr />
          <div className="review-item d-flex gap-3 mb-4 m-4">
            <img
              src="../../assets/rv1.png"
              alt="User"
              className="rounded-circle"
              style={{ width: '50px', height: '50px', objectFit: 'cover' }}
            />
            <div>
              <h6 className="fw-bold mb-1">Trần Thị Hương</h6>
              <p className="text-muted mb-1" style={{ fontSize: '14px' }}>
                Sau khi đọc xong cuốn sách này, tôi thấy đây là một cuốn sách truyền cảm hứng, khiến ta khám phá và yêu quý bản thân mình. Trong câu chuyện này, tác giả dẫn dắt mình qua những suy ngẫm...
              </p>
              <div className="d-flex justify-content-between">
                <a href="#" className="text-danger" style={{ fontSize: '14px' }}>Chi tiết</a>
                <p className="text-muted mt-1" style={{ fontSize: '12px' }}>15/10/2024</p>
              </div>
            </div>
          </div>
          <div className="review-item d-flex gap-3 m-4">
            <img
              src="../../assets/rv2.jpg"
              alt="User"
              className="rounded-circle"
              style={{ width: '50px', height: '50px', objectFit: 'cover' }}
            />
            <div>
              <h6 className="fw-bold mb-1">Nguyễn Thanh Tùng</h6>
              <p className="text-muted mb-1" style={{ fontSize: '14px' }}>
                Cuốn sách này mang đến một thông điệp mạnh mẽ về việc trân trọng giá trị bản thân bằng một hành trình khám phá nội tâm, giúp chúng ta nhận ra tiềm năng vô hạn của chính mình...
              </p>
              <div className="d-flex justify-content-between">
                <a href="#" className="text-danger" style={{ fontSize: '14px' }}>Chi tiết</a>
                <p className="text-muted mt-1" style={{ fontSize: '12px' }}>29/07/2024</p>
              </div>
            </div>
          </div>
        </div>

        {/* Promotions */}
        <div className="col-md-4 m-4">
          <h2 className="h5 fw-bold text-danger">VẬN CHUYỂN & KHUYẾN MÃI</h2>
          <ul className="list-unstyled mt-3">
            <li className="d-flex align-items-center mb-3">
              <img
                src="../../assets/mpmh.png"
                alt="Gift"
                style={{ width: '72px', height: '72px', marginRight: '10px' }}
              />
              <span>Miễn phí gói quà tặng</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <img
                src="../../assets/nvtt.png"
                alt="Delivery"
                style={{ width: '72px', height: '72px', marginRight: '10px' }}
              />
              <span>Nhận và thanh toán tại nhà</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <img
                src="../../assets/tragop.png"
                alt="Installment"
                style={{ width: '72px', height: '72px', marginRight: '10px' }}
              />
              <span>Trả góp lãi suất 0% toàn bộ giỏ hàng của bạn</span>
            </li>
            <li className="d-flex align-items-center">
              <img
                src="../../assets/freeship.png"
                alt="Free Shipping"
                style={{ width: '72px', height: '72px', marginRight: '10px' }}
              />
              <span>Free ship toàn quốc cho đơn hàng trên 500.000đ</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="m-4 p-4" style={{ background: '#E01A2210' }}>
        <h5 className="fw-bold text-danger mb-4">SẢN PHẨM LIÊN QUAN</h5>
        <Row className="g-4">
          {booksData.slice(0, 4).map((book) => (
            <Col key={book.id} xs={6} sm={6} md={3}>
              <BookCard book={book} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ProductDetail;