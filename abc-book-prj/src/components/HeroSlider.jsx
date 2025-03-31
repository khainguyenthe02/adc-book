import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';

// Import the images from the assets folder
import slide1 from '/assets/slide1.jpg';
import slide2 from '/assets/slide2.jpg';
import slide3 from '/assets/slide3.jpg';
import slide4 from '/assets/slide4.jpg';

// Update the slides array to use the imported images
const slides = [
  {
    id: 1,
    image: slide1, // Use the imported image
    title: 'TẶNG SÁCH ĐẦU XUÂN CON HỌC NHIỀU ĐIỀU MỚI',
    discount: 'Giảm giá lên đến 38%',
    link: '/khuyen-mai',
  },
  {
    id: 2,
    image: slide2, // Use the imported image
    title: 'SÁCH HAY THÁNG 3',
    discount: 'Giảm giá lên đến 25%',
    link: '/khuyen-mai',
  },
  {
      id: 3,
      image: slide3, 
      title: 'SÁCH HAY THÁNG 3',
      discount: 'Giảm giá lên đến 25%',
      link: '/khuyen-mai',
    },
    {
      id: 4,
      image: slide4,
      title: 'SÁCH HAY THÁNG 3',
      discount: 'Giảm giá lên đến 25%',
      link: '/khuyen-mai',
    },
];

const HeroSlider = () => {
  return (
    <div className="position-relative" style={{ overflow: 'hidden', width: '100%' }}>
      <Carousel
        controls={false}
        indicators={true}
        interval={3000}
        style={{ minHeight: '400px', width: '100%' }} 
      >
        {slides.map((slide) => (
          <Carousel.Item key={slide.id}>
            <div
              className="bg-danger text-white "
              style={{
                backgroundImage: `url(${slide.image})`, 
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                minHeight: '570px',
                width: '100%'
              }}
            >
              <Container>
                <Row className="align-items-center">
                  <Col md={6}>
                    <div className="d-inline-block bg-info text-white fw-bold px-4 py-2 rounded-pill mb-4">
                      {slide.discount}
                    </div>
                    <div>
                      <Button
                        as={Link}
                        to={slide.link}
                        variant="light"
                        className="fw-bold text-danger px-4 py-2"
                      >
                        Xem ngay
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

    </div>
  );
};

export default HeroSlider;