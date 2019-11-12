import styled from 'styled-components';

export const Container = styled.div`
  .card {
    border-radius: 10px;
    width: 20rem;
  }
  .card:hover {
    box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.253) !important;
  }
  .card-body {
    padding: 3rem 0 !important;
  }
  .card-text {
    font-size: 0.9rem;
    padding: 0.4rem 1.9rem;
  }
  .overflow {
    overflow: hidden;
  }
  .card-img-top {
    transform: scale(1);
    transition: 0.5s;
  }
  .card-img-top:hover {
    transform: scale(1.8);
  }
`;
