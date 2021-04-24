import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Welcome = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Hey, I'm Maxwell D. Dorliea</h1>
        <p className="lead"> a web developer</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      </Jumbotron>
    </div>
  );
};

export default Welcome;