// src/App.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

// Définir le prénom
const firstName = "John"; // Changez cette valeur pour tester le message conditionnel

const App = () => {
  return (
    <div className="App">
      {/* Carte contenant les informations du produit */}
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Produit</Card.Title>
          <Image />
          <Name />
          <Price />
          <Description />
          <Button variant="primary">Acheter maintenant</Button>
        </Card.Body>
      </Card>

      {/* Message conditionnel basé sur le prénom */}
      <div>
        {firstName ? (
          <>
            <p>Bonjour, {firstName}!</p>
            <img src="https://via.placeholder.com/100" alt="Votre image" />
          </>
        ) : (
          <p>Bonjour !</p>
        )}
      </div>
    </div>
  );
};

export default App;
