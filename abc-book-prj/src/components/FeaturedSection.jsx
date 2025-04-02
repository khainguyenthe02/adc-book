import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FeaturedSection = ({ title, quote, books }) => {
  return (
    <section className="py-5">
      <Container fluid className="px-0">
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
        <div className=" row mx-0 g-4">
          {books.map((book, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="px-2">
              <div className="d-flex flex-column flex-md-row align-items-start h-100">
                {/* Book Image */}
                <div className="flex-shrink-0 mb-3 mb-md-0 me-md-3">
                  <img
                    src={book.image || '/placeholder.svg'}
                    alt={book.title}
                    className="rounded"
                    style={{ width: '120px', height: '160px', objectFit: 'contain', backgroundColor: '#f8f9fa' }}
                  />
                </div>

                {/* Book Details */}
                <div className="flex-grow-1">
                  {/* Title */}
                  <h5 className="fw-bold mb-1">{book.title}</h5>

                  {/* Pricing */}
                  <div className="mb-2">
                    <span className="fs-5 fw-bold text-danger me-2">
                      {book.price.toLocaleString()}đ
                    </span>
                    <span className="fs-5 text-muted text-decoration-line-through">
                      {book.originalPrice.toLocaleString()}đ
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className="text-muted mb-0"
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
        </div>
      </Container>
    </section>
  );
};

export default FeaturedSection;