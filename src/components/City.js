import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const City = ({ cities }) => {
  const { cityId } = useParams();
  const navigate = useNavigate();

  const city = cities.find(c => c.id === parseInt(cityId));

  if (!city) return <div>City not found</div>;

  return (
    <div className="container mt-3">
      <h1>{city.name}</h1>
      <div>
        {city.features.map((feature, index) => (
          <Button
            key={index}
            className="mr-2 mb-2"
            onClick={() => navigate(`/city/${city.id}/feature/${feature.id}`)}
          >
            {feature.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default City;
