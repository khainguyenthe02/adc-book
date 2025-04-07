import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Badge } from 'react-bootstrap';

const BookCard = ({ book }) => {
  const discountPercent = Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100);

  return (
      <Card
        className="h-100 border-0 shadow-sm rounded"
        style={{ backgroundColor: 'rgba(0, 132, 202, 0.1)', transition: 'transform 0.3s' }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
      >
      <Link to={`/san-pham/${book.slug}`} className="text-decoration-none">
        <div className="position-relative">
          <Card.Img
            variant="top"
            src={book.image || "/placeholder.svg"}
            alt={book.title}
            className="p-2"
            style={{ height: '200px', objectFit: 'contain', }}
          />
          {discountPercent > 0 && (
            <Badge
              bg="danger"
              className="position-absolute top-0 end-0 m-2 fs-6 px-2 py-1"
            >
              -{discountPercent}%
            </Badge>
          )}
        </div>
        <Card.Body className="d-flex flex-column text-center"  >
          <Card.Title
            className="fs-6 fw-bold text-dark mb-2"
            style={{
              minHeight: '3rem',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {book.title}
          </Card.Title>
          <div className="mt-2">
            <span className="fs-5 fw-bold text-danger">
              {book.price.toLocaleString()}đ
            </span>
            {discountPercent > 0 && (
              <span className="fs-6 text-muted text-decoration-line-through ms-2">
                {book.originalPrice.toLocaleString()}đ
              </span>
            )}
          </div>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default BookCard;