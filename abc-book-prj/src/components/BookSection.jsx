import React, { useRef, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import BookCard from './BookCard';

const BookSection = ({ title, books }) => {
  const sliderRef = useRef(null);

  // Calculate the scroll amount dynamically
  const getScrollAmount = () => {
    if (sliderRef.current) {
      const itemWidth = sliderRef.current.querySelector('.flex-shrink-0').offsetWidth;
      const gap = 16; // 1rem = 16px (assuming default root font size)
      return (itemWidth + gap) * 3; // Width of 3 items + 2 gaps
    }
    return 660; // Fallback value
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
    }
  };

  // Ensure the slider doesn't show partial items on initial render
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = 0; // Reset to start
    }
  }, [books]);

  return (
    <section className="py-5">
      <Container>
        <h2 className="text-danger fw-bold fs-4 mb-4 ms-5 text-uppercase">
          {title}
        </h2>

        <Row className="position-relative">
          {/* Left Banner - 4 columns (1/3 of 12) */}
          <Col md={4} className="flex-shrink-0">
            <img
              src="../assets/gyt.jpg"
              alt="Banner"
              className="w-100 rounded"
              style={{ height: '20rem', marginLeft: '10%', objectFit: 'contain' }}
            />
          </Col>

          {/* Right Slider - 8 columns (2/3 of 12) */}
          <Col md={8} className="position-relative bg-light p-3 rounded overflow-hidden">
            <Button
              onClick={scrollLeft}
              variant="danger"
              className="position-absolute top-50 start-0 translate-middle-y rounded-circle d-flex align-items-center justify-content-center shadow-sm"
              style={{ width: '2.5rem', height: '2.5rem', zIndex: 50, left: '-1.25rem' }}
            >
              <FaChevronLeft className="text-white fs-5" />
            </Button>

            <div
              ref={sliderRef}
              className="d-flex gap-3 overflow-auto pb-3"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch',
                scrollSnapType: 'x mandatory',
              }}
            >
              <style>
                {`
                  div::-webkit-scrollbar {
                    display: none;
                  }
                `}
              </style>

              {books.map((book) => (
                <div
                  key={book.id}
                  className="flex-shrink-0"
                  style={{ width: 'calc(33.33% - 1rem)', scrollSnapAlign: 'start' }}
                >
                  <BookCard book={book} />
                </div>
              ))}
            </div>

            <Button
              onClick={scrollRight}
              variant="danger"
              className="position-absolute top-50 end-0 translate-middle-y rounded-circle d-flex align-items-center justify-content-center shadow-sm"
              style={{ width: '2.5rem', height: '2.5rem', right: '-1.25rem' }}
            >
              <FaChevronRight className="text-white fs-5" />
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BookSection;