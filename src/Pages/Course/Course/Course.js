import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const Course = ({ course }) => {
    // destructure course
    const { image, name, description } = course;

    return (
        <div>
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
                            <Button variant="primary">Enroll Now</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Course;