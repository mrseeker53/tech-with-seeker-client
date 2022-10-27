import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Course = ({ course }) => {
    // destructure course
    const { image, name, description } = course;

    return (
        <div>
            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button className="my-4" onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
            <div ref={ref}>
                <p>{description}</p>
            </div>
            <Row className="mb-5">
                <Col md={8}>
                    <Card>
                        <Card.Img style={{ height: '18rem' }} variant="top" src={image}
                        />
                        <hr />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>
                            <Link to={`/course/${course.id}`}>
                                <Button variant="primary">Enroll Now</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Course;