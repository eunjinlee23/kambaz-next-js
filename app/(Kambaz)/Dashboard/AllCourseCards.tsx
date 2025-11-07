import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addEnrollment, deleteEnrollment } from '../Enrollment/reducer';
import { RootState } from "../store";


export default function AllCourseCards({userId} : {
    
    userId: string
}) {
        const { courses } = useSelector((state: RootState) => state.coursesReducer);
        const { enrollments } = useSelector((state: RootState) => state.enrollmentsReducer);
        const dispatch = useDispatch();


  return (
    <div>
        <Row xs={1} md={5} className="g-4">

        {
            courses.filter((course) => enrollments.some((enrollment) => 
                enrollment.user === userId &&
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

                                        <Button onClick={(event) => {
                                            event.preventDefault();
                                            const findEnrollment = enrollments.find((e) => e.course === course._id && e.user === userId);
                                            if (findEnrollment) {
                                                dispatch(deleteEnrollment(findEnrollment._id));
                                            }
                                        }}
                                        className="btn-danger float-end" >Unenroll</Button>
                                    </CardBody>
                            </Link>
                        </Card>
                    </Col> ))           
        }

        {

            courses.filter((course) => !(courses.filter((course) => enrollments.some((enrollment) => 
                enrollment.user === userId &&
                enrollment.course === course._id))).some((excluded => excluded._id === course._id)))
                

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

                                        <Button onClick={(event) => {
                                            event.preventDefault();
                                            dispatch(addEnrollment({course: course._id, user: userId}))

                                        }} className="btn-success float-end">Enroll</Button>
                                    </CardBody>
                            </Link>
                        </Card>
                    </Col> )) 
        }
    
        </Row>
    </div>
  )
}
