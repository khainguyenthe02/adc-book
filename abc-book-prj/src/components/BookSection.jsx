import React, { useRef } from 'react';
import { Container, Button } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import BookCard from './BookCard';

const BookSection = ({ title, books }) => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -960, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 960, behavior: 'smooth' });
    }
  };

  return (
    <section style={{ padding: '3rem 0' }}>
      <Container>
        <h2
          style={{
            color: '#dc3545',
            fontWeight: 'bold',
            fontSize: '1.5rem',
            marginBottom: '1.5rem',
          }}
        >
          {title}
        </h2>

        <div style={{ display: 'flex', gap: '1rem', position: 'relative' }}>
          {/* Banner bên trái */}
          <div style={{ flexShrink: 0, width: '280px' }}>
            <img
              src="/placeholder.svg?height=300&width=280"
              alt="Banner"
              style={{
                width: '100%',
                height: '300px',
                objectFit: 'cover',
                borderRadius: '8px',
              }}
            />
          </div>

          {/* Slider bên phải */}
          <div style={{ position: 'relative', flex: 1 }}>
            <Button
              onClick={scrollLeft}
              style={{
                position: 'absolute',
                left: '-20px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 1,
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#dc3545',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
              }}
            >
              <FaChevronLeft style={{ color: '#fff', fontSize: '1.2rem' }} />
            </Button>

            <div
              ref={sliderRef}
              style={{
                display: 'flex',
                gap: '20px',
                overflowX: 'auto',
                paddingBottom: '1rem',
                scrollbarWidth: 'none', // Ẩn thanh cuộn trên Firefox
                msOverflowStyle: 'none',
                width: '960px', // 3 items: 3 * (200px + 20px gap) = 660px
              }}
            >
              {books.map((book) => (
                <div
                  key={book.id}
                  style={{ minWidth: '300px', width: '200px', flexShrink: 0 }}
                >
                  <BookCard book={book} />
                </div>
              ))}
            </div>

            <Button
              onClick={scrollRight}
              style={{
                position: 'absolute',
                right: '-20px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 1,
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#dc3545',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
              }}
            >
              <FaChevronRight style={{ color: '#fff', fontSize: '1.2rem' }} />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BookSection;