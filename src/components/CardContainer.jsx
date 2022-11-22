import React from 'react';
import Card from 'react-bootstrap/Card';
import { languages } from '../data/data';
import PopoverComponent from './PopoverComponent';

const CardContainer = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center flex-wrap text-center"
      style={{ height: 'auto', backgroundImage: 'url(/img/backgroung.jpg)' }}
    >
      {languages.map((language) => (
        <div className=" justify-items-center mt-5 mx-5" key={language.name}>
          <Card
            style={{ width: '18rem', height: 'auto' }}
            className="mx-auto my-3"
          >
            <Card.Img variant="top" src={language.imgSource} />
            <Card.Body>
              <Card.Title>{language.name}</Card.Title>
              <PopoverComponent
                description={language.description}
                name={language.name}
              />
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default CardContainer;
