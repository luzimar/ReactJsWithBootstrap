import React from 'react';
import { Container } from './styles';

const Card = props => (
  <Container>
    <div className="card text-center shadow">
      <div className="overflow">
        <img src={props.img} alt="" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.name}</h4>
        <p className="card-text text-secondary">{props.bio}</p>
        <a href="#" className="btn btn-outline-success">
          Go Anywhere
        </a>
      </div>
    </div>
  </Container>
);

export default Card;
