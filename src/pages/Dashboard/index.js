import React from 'react';
import Card from '../../components/Card';
import { Container } from './styles';

const players = [
  {
    id: '1',
    name: 'Ben Simmons',
    img:
      'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1627732.png',
    bio:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  },
  {
    id: '2',
    name: 'Kawhy Leonard',
    img:
      'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202695.png',
    bio:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: '3',
    name: 'LeBron James',
    img:
      'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2544.png',
    bio:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
];

export default function Dashboard() {
  return (
    <Container>
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          {players.map(player => (
            <div key={player.id} className="col-md-4">
              <Card img={player.img} name={player.name} bio={player.bio} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
