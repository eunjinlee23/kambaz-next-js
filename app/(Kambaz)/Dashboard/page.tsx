import Link from "next/link";
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Row } from "react-bootstrap";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link href="/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                                <CardImg variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
                                <CardBody>
                                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                        CS1234 React JS
                                    </CardTitle>
                                    <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                        Full Stack software developer
                                    </CardText>
                                    <Button variant="primary">Go</Button>
                                </CardBody>
                            </Link>
                        </Card>
                    </Col>

                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link href="/Courses/1215/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                                <CardImg variant="top" src="/images/discretemath.jpg" width="100%" height={160}/>
                                <CardBody>
                                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                        CS1215 Discrete Mathematics
                                    </CardTitle>
                                    <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                        Foundation of discrete mathematics
                                    </CardText>
                                    <Button variant="primary">Go</Button>
                                </CardBody>
                            </Link>
                        </Card>
                    </Col>

                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link href="/Courses/2144/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                                <CardImg variant="top" src="/images/binary.jpg" width="100%" height={160}/>
                                <CardBody>
                                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                        CS2144 Logic in Computer Science
                                    </CardTitle>
                                    <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                        Introduction of Logic in computer Science
                                    </CardText>
                                    <Button variant="primary">Go</Button>
                                </CardBody>
                            </Link>
                        </Card>
                    </Col>

                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link href="/Courses/2650/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                                <CardImg variant="top" src="/images/yellow.jpg" width="100%" height={160}/>
                                <CardBody>
                                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                        CS2650 Algorithms
                                    </CardTitle>
                                    <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                        Beginning of Algorithm
                                    </CardText>
                                    <Button variant="primary">Go</Button>
                                </CardBody>
                            </Link>
                        </Card>
                    </Col>

                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link href="/Courses/2800/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                                <CardImg variant="top" src="/images/turquoise.jpg" width="100%" height={160}/>
                                <CardBody>
                                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                        CS2800 Object Oriented Design
                                    </CardTitle>
                                    <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                        Beginning of Object Oriented Design and implementation
                                    </CardText>
                                    <Button variant="primary">Go</Button>
                                </CardBody>
                            </Link>
                        </Card>
                    </Col>

                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link href="/Courses/3250/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                                <CardImg variant="top" src="/images/gamedev.jpg" width="100%" height={160}/>
                                <CardBody>
                                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                        CS3250 Game Development
                                    </CardTitle>
                                    <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                        Game development
                                    </CardText>
                                    <Button variant="primary">Go</Button>
                                </CardBody>
                            </Link>
                        </Card>
                    </Col>
                    
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link href="//Courses/3315/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                                <CardImg variant="top" src="/images/bluish.jpg" width="100%" height={160}/>
                                <CardBody>
                                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                        CS3315 Introduction to Mixed Reality
                                    </CardTitle>
                                    <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                        Introduction of mixed reality
                                    </CardText>
                                    <Button variant="primary">Go</Button>
                                </CardBody>
                            </Link>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}