import React from 'react';
import { Container } from 'react-bootstrap';

const FeaturedSection = ({ title, quote }) => {
  return (
    <section className="py-5">
      <Container>
        <div className="text-center mb-4">
          <h2 className="text-red fw-bold position-relative d-inline-block pb-2">
            {title}
            <div className="position-absolute start-0 end-0 bottom-0 border-bottom border-2 border-red"></div>
          </h2>
        </div>
        
        {quote && (
          <div className="mx-auto text-center fst-italic text-muted border rounded p-4 max-width-lg">
            "{quote}"
          </div>
        )}
      </Container>
    </section>
  );
};

export default FeaturedSection;