import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Row, Col } from 'reactstrap';

const Presentation = (props) => {
  return (
    <div>
      <Row>

        <Col className="PresentationPic">
          <img src="data:image/jpeg;base64,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" />

        </Col>



        <Col className="Presentation">
          <Jumbotron >
            <h2>Présentation</h2>
            <p className="lead">Developpeur Web à la recherche d'opportunité</p>
            <hr className="my-2" />
            <p>Actuellement en formation de Développeur Web à la Wild Code School de Toulouse et adepte de l'autodidacte, je me passione depuis toujours
              pour l'informatique, actuellement dans le secteur du développement Web, je m'intéresse également au developpement logiciel ainsi qu'à la cybersécurité.
          </p>
          <p></p>
            <br />
            <p>
              <u>Vous recherchez quelqu'un de dynamique, passioné et autonome ? ne cherchez plus, vous l'avez trouvé.</u>
          </p>
            <p className="lead">
              <Button color="primary">Contactez-moi</Button>
            </p>


          </Jumbotron>
        </Col>
      </Row>
    </div >
  );
};

export default Presentation;