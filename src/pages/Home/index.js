import React, { useState } from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom';
import { Modal } from '../../components/Modal';
import { toast } from 'react-toastify';

const data = [
  {
    id: '1',
    banner:
      'https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497',
    title: 'Card 1',
    description:
      ' This is a wider card with supporting text below as a natural lead-i to additional content. This content is a little bit longer.',
    time: 'Last updated 3 mins ago',
  },
  {
    id: '2',
    banner:
      'https://boygeniusreport.files.wordpress.com/2016/11/puppy-dog.jpg?quality=98&strip=all&w=782',
    title: 'Card 2',
    description:
      ' This is a wider card with supporting text below as a natural lead-i to additional content. This content is a little bit longer.',
    time: 'Last updated 5 mins ago',
  },
  {
    id: '3',
    banner:
      'https://specials-images.forbesimg.com/imageserve/5db4c7b464b49a0007e9dfac/960x0.jpg?fit=scale',
    title: 'Card 3',
    description:
      ' This is a wider card with supporting text below as a natural lead-i to additional content. This content is a little bit longer.',
    time: 'Last updated 7 mins ago',
  },
];

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const onCancel = () => {
    setShowModal(false);
  };
  const onConfirm = () => {
    toast.success('Buy with successfully :)');
    setShowModal(false);
  };
  return (
    <>
      <Modal show={showModal} onCancel={onCancel} onConfirm={onConfirm} />
      <div className="jumbotron">
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Learn more
        </a>
      </div>
      <Container>
        <div className="card-deck">
          {data.map(item => (
            <div key={item.id} className="card bg-dark text-white">
              <img className="card-img" src={item.banner} alt="Card image" />
              <div className="card-img-overlay">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <div className="card-time">
                  <>
                    <i className="far fa-clock"></i>
                  </>
                  <>{item.time}</>
                </div>

                <div className="button-group">
                  <Link to="/details">
                    <button type="button" className="btn btn-info">
                      <i className="fas fa-info-circle"></i> Details
                    </button>
                  </Link>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => setShowModal(true)}
                  >
                    <i className="fas fa-dollar-sign"></i> Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="content">
          <h2 className="title">Title</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </Container>
    </>
  );
}
