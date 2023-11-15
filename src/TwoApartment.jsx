import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardTwo from './CardTwo/CardTwo';

function TwoApartment() {
    const [apartmentList, setApartment] = useState([]);

    const fetchData = async () => {
      const result = await fetch('/banglore.json');
      result.json().then(
        data => {
          setApartment(data.apartments);
        }
      );
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
  return (
<Row>
      {apartmentList.map(item => (
        <Col key={item.id} md={4}>
          <CardTwo apartdata={item} />
       

        </Col>
      ))}
    </Row>  )
}

export default TwoApartment