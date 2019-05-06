import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Progress } from 'reactstrap';

const CV = (props) => {
  return (
    <div className="CV">
      <Jumbotron>
        <h3 className="display-3">Compétences</h3>
        <p className="lead">Voici un récapitulatif de mes compétences principales, celles ci évoluent en même temps que moi. </p>
        <hr className="my-2" />
        <div>
          <h3>Environement</h3>
          <div className="text-center">Linux 60%</div>
          <Progress value={60} />
          <div className="text-center">Git 75%</div>
          <Progress value={75} />
        </div>
        <div className="text-center">Méthode Agile 80%</div>
        <Progress value={80} />
        <h3>Front-End</h3>
        <div className="text-center">HTML 5 80%</div>
        <Progress value={80} />
        <div className="text-center">CSS 3 60%</div>
        <Progress value={60} />
        <div className="text-center">Python   50%</div>
        <Progress value={50} />
        <div className="text-center">Node.JS 60%</div>
        <Progress value={60} />
        <div className="text-center">React.JS 70%</div>
        <Progress value={70} />
        <div className="text-center">Javascript 70%</div>
        <Progress value={70} />
        <h3>Back-End</h3>
        <div className="text-center">Redux 60%</div>
        <Progress value={60} />
        <div className="text-center">Express 60%</div>
        <Progress value={60} />
        <div className="text-center">MySQL 40%</div>
        <Progress value={40} />
        <div className="text-center">POO 50%</div>
        <Progress value={50} />


      </Jumbotron>
    </div >
  );
};

export default CV;