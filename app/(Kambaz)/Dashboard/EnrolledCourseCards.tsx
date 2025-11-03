import Link from 'next/link';
import React from 'react'
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from "../store";

export default function EnrolledCourseCards({ deleteCourse, setCourse} : {
    deleteCourse: (courseId: string) => void; setCourse: (course: RootState) => void;
}) {
    const { courses } = useSelector((state: RootState) => state.coursesReducer);
    const { currentUser } = useSelector((state: RootState) => state.accountReducer);
    const { enrollments } = useSelector((state: RootState) => state.enrollmentsReducer);

  return (
        <Row xs={1} md={5} className="g-4">
        
        {courses
            .filter((course) => enrollments.some((enrollment) => 
            enrollment.user === currentUser._id &&
            enrollment.course === course._id))
            .map((course) => (
                <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px "}}>
                    <Card>
                        <Link href={`/Courses/${course._id}/Home`} 
                            className="wd-dashboard-course-link text-decoration-none text-dark" >
                            <CardImg src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                            <CardBody className="card-body">
                                <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                    {course.name} </CardTitle>
                                <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                    {course.description} </CardText>

                                <Button variant="primary"> Go </Button>
                    
                                <Button onClick={(event) => {
                                    event.preventDefault();
                                    deleteCourse(course._id);
                                    }} className="btn btn-danger float-end"
                                    id="wd-delete-course-click">
                                    Delete </Button>
                                <Button id="wd-edit-course-click"
                                    onClick={(e) => {
                                    e.preventDefault();
                                    setCourse(course) }}
                                    className="btn btn-warning me-2 float-end">
                                    Edit </Button>
                            </CardBody>
                        </Link>
                    </Card>

                </Col>
            )
        )}
        </Row>
)
}