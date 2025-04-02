import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const PromoBanner = ({ title, backgroundImage, link }) => {
  return (
    <section className="py-5">
      <Container>
        <Link to={link} className="text-decoration-none">
          <div 
            className="rounded overflow-hidden position-relative"
            style={{
              height: '400px',
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: '#ffc107',
            }}
          >
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
              <h2 className="display-5 fw-bold text-white text-center text-shadow">
                {title}
              </h2>
            </div>
          </div>
        </Link>
      </Container>
    </section>
  );
};

export default PromoBanner;