import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Home = ({ cities }) => {
  const search = new URLSearchParams(useLocation().search).get('search');

  const filteredCities = search
    ? cities.filter(city => city.name.toLowerCase().includes(search.toLowerCase()))
    : cities;

  return (
    <div className="container mt-3">
      <div className="row">
        {filteredCities.map(city => (
          <div className="col-md-4 mb-3" key={city.id}>
            <Card>
              <Card.Body>
                <Card.Title>{city.name}</Card.Title>
                <Button as={Link} to={`/city/${city.id}`}>Explore</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
