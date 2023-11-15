import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HydraCard from './HydraCard';

export default function HydraFilter() {
  const [apartmentList, setApartment] = useState([]);

  const fetchData = async () => {
    const result = await fetch('/apartment.json');
    result.json().then(data => {
      setApartment(data.apartments);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Filter apartments where the value of the "apart" key is "Hydra"
  const hydraApartments = apartmentList.filter(item => item.apart === 'Hydra');

  return (
    <Row>
      {hydraApartments.map(item => (
        <Col key={item.id} md={4}>
          <HydraCard apartdata={item} />
        </Col>
      ))}
    </Row>
  );
}
