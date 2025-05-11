import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BookCard from './BookCard';
import { useNavigate } from 'react-router-dom';

const BestSellingSection = ({ title, books }) => {
  const navigate = useNavigate();
  return (
    <section className="m-4">
      <Container>
        {/* Title */}
        <div className="text-center mb-4">
          <h2 className="text-danger fw-bold">{title}</h2>
        </div>

        {/* Books Grid */}
        <Row className="g-3">
          {books.map((book, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              {/* Use BookCard for each book */}
              <div
                    onClick={() => navigate(`/product-detail/${book.id}`)}
                    style={{ cursor: 'pointer' }}
                  >
                <BookCard book={book} />
                  </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default BestSellingSection;