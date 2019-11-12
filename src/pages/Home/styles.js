import styled from 'styled-components';

export const Container = styled.div`
  margin: 40px 30px;
  .card {
    border: none;
    box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.253);
    overflow: hidden;
    height: 100%;
  }

  .card:hover {
    box-shadow: 5px 10px 30px 1px rgba(0, 0, 0, 0.6);
  }
  .card:hover .card-img-overlay {
    background: linear-gradient(to bottom, transparent, black);
  }

  .card-title {
    color: #fff;
    transform: translateX(-300px);
    transition: 0.8s;
    font-size: 30px;
  }
  .button-group {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .card-text {
    color: #fff;
    transform: translateX(400px);
    transition: 0.8s;
  }

  .card:hover .card-title {
    transform: translateX(0);
  }
  .card:hover .card-text {
    transform: translateX(0);
  }

  .content {
    margin-top: 40px;

    .title {
      color: #333;
    }
  }

  .btn-info {
    transform: translateX(-300px);
    transition: 0.8s;
  }
  .card:hover .btn-info {
    transform: translateX(0);
  }

  .btn-success {
    transform: translateX(400px);
    transition: 0.8s;
  }
  .card:hover .btn-success {
    transform: translateX(0);
  }

  .card-time {
    display: flex;
    align-items: center;
    color: #fc5c04;
    transform: translateX(-400px);
    transition: 0.8s;
    margin-bottom: 20px;
    i {
      margin-right: 10px;
    }
  }
  .card:hover .card-time {
    transform: translateX(0);
  }
`;
