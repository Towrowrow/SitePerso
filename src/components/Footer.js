import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Footer = (props) => {
  return (
    <div className="Footer">
      <Jumbotron fluid>
        <Container fluid>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Footer;