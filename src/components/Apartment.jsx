import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ApartCard from './ApartCard/ApartCard';

export default function Apartment() {
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

  // Filter apartments where the value of the "apart" key is "banglore"
  const bangloreApartments = apartmentList.filter(item => item.apart === 'banglore');

  return (
    <Row>
      {bangloreApartments.map(item => (
        <Col key={item.id} md={4}>
          <ApartCard apartdata={item} />
        </Col>
      ))}
    </Row>
  );
}
