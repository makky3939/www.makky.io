import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';

const Index = () => (
  <Container>
    <Row className="justify-content-center">
      <Col md="6">
        <Card>
          <CardBody>
            <CardTitle>
              <h4>
                Masaki Kobayashi
              </h4>
            </CardTitle>
            <hr />
            <CardText>
              <p>
                Doctoral student at University of Tsukuba (Graduate School of Library, Information and Media Studies)
              </p>
              <dl>
                <dt>Research Topics:</dt>
                <dd>
                  Human Computation, Crowdsourcing, Human-AI Collaboration
                </dd>
                <dt>Interests:</dt>
                <dd>
                  Front-end Web, Site Reliability Engineering, Photography
                </dd>
              </dl>
            </CardText>
          </CardBody>
        </Card>

      </Col>
    </Row>

    <Row>
      <Col>
        <h4>
          Self Introduction
        </h4>
        <p>
          I am a 1st-year doctoral student at the Graduate School of Library, Information and Media Studies, University of Tsukuba.
          My current research interest is Human-Machine collaboration in Crowdsourcing for efficient microtask processing.
          Currently, I am studying to propose task assignment algorithms for Human and AI workers satisfying the data quality requirement from requesters.
        </p>
        <p>
          I am also interested in developing web applications and, I am fluent in JavaScript, TypeScript, Ruby, and Python.
          I have experienced as a part-time engineer and an intern in more than ten companies.
          At present, I am working on the projects of https://github.com/chainer/chainerui and http://crowd4u.org.
        </p>
      </Col>
    </Row>

    <Row>
      <Col>
        <h4>
          Publications
        </h4>
        <ul>
          <li>aaa</li>
        </ul>
      </Col>
    </Row>

    <Row>
      <Col>
        <h4>
          Work Experience
        </h4>
        <ul>
          <li>aaa</li>
        </ul>
      </Col>
    </Row>

    <Row>
      <Col>
        <h4>
          Teaching Experience
        </h4>
        <ul>
          <li>aaa</li>
        </ul>
      </Col>
    </Row>

    <Row>
      <Col>
        <h4>
          Research Grants
        </h4>
        <ul>
          <li>aaa</li>
        </ul>
      </Col>
    </Row>

    <Row>
      <Col>
        <h4>
          Awards
        </h4>
        <ul>
          <li>aaa</li>
        </ul>
      </Col>
    </Row>
  </Container>
)

export default Index
