import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Badge } from 'react-bootstrap';

const BookCard = ({ book }) => {
  const discountPercent = Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100);

  return (
    <Card
      style={{
        height: '100%',
        transition: 'transform 0.2s ease-in-out',
        borderRadius: '8px',
        overflow: 'hidden',
        border: 'none',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
    >
      <Link to={`/san-pham/${book.slug}`} style={{ textDecoration: 'none' }}>
        <div style={{ position: 'relative' }}>
          <Card.Img
            variant="top"
            src={book.image || "/placeholder.svg"}
            alt={book.title}
            style={{
              height: '200px',
              objectFit: 'contain',
              padding: '10px',
              backgroundColor: '#f8f9fa',
            }}
          />
          {discountPercent > 0 && (
            <Badge
              bg="danger"
              style={{
                position: 'absolute',
                top: '0',
                right: '0',
                margin: '0.5rem',
                fontSize: '0.9rem',
                padding: '5px 10px',
              }}
            >
              -{discountPercent}%
            </Badge>
          )}
        </div>
        <Card.Body
          style={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
          }}
        >
          <Card.Title
            style={{
              fontSize: '1rem',
              lineHeight: '1.4',
              fontWeight: 'bold',
              color: '#212529',
              marginBottom: '0.5rem',
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
          <div style={{ marginTop: '0.5rem' }}>
            <span
              style={{
                fontWeight: 'bold',
                fontSize: '1.25rem',
                color: '#dc3545',
              }}
            >
              {book.price.toLocaleString()}đ
            </span>
            {discountPercent > 0 && (
              <span
                style={{
                  textDecoration: 'line-through',
                  color: '#6c757d',
                  marginLeft: '0.5rem',
                }}
              >
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