import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FeaturedSection = ({ title, quote, books }) => {
  return (
    <section className="py-5">
      <Container fluid>
        {/* Title and Quote Section */}
        <div className="text-center mb-4">
          <h2 className="text-danger fw-bold d-inline-block">
            {title}
          </h2>
        </div>

        {quote && (
          <div
            className="mx-auto text-center fst-italic text-muted border border-danger border-4 rounded p-4 mb-5"
            style={{ maxWidth: '800px' }}
          >
            {quote}
          </div>
        )}

        {/* Books Section */}
        <Row className="g-4 justify-content-center">
          {books.map((book, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <div
                className="p-3 h-100 rounded shadow-sm"
                style={{
                  backgroundColor: '#f8f9fa',
                  textAlign: 'center',
                }}
              >
                {/* Book Image */}
                <div className="mb-3">
                  <img
                    src={book.image || '/placeholder.svg'}
                    alt={book.title}
                    className="rounded"
                    style={{
                      width: '120px',
                      height: '160px',
                      objectFit: 'contain',
                      backgroundColor: '#ffffff',
                    }}
                  />
                </div>

                {/* Book Details */}
                <div>
                  {/* Title */}
                  <h5 className="fw-bold mb-2">{book.title}</h5>

                  {/* Pricing */}
                  <div className="mb-2">
                    <span className="fs-5 fw-bold text-danger me-2">
                      {book.price.toLocaleString()}đ
                    </span>
                    <span className="fs-6 text-muted text-decoration-line-through">
                      {book.originalPrice.toLocaleString()}đ
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className="text-muted"
                    style={{
                      fontSize: '0.9rem',
                      lineHeight: '1.4',
                      display: '-webkit-box',
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {book.description}
                  </p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeaturedSection;