import React from 'react';
import { useParams } from 'react-router-dom';

const CityFeature = ({ cities }) => {
  const { cityId, featureId } = useParams();

  const city = cities.find(c => c.id === parseInt(cityId));
  if (!city) return <div>City not found</div>;

  const feature = city.features.find(f => f.id === parseInt(featureId));
  if (!feature) return <div>Feature not found</div>;

  return (
    <div className="container mt-3">
      <h1>{feature.name}</h1>
      <p>{feature.description}</p>
    </div>
  );
};

export default CityFeature;
