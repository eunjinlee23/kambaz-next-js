"use client"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/reducer"; 
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import * as db from "../Database";
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, FormControl, Row } from "react-bootstrap";
import AllCourseCards from "./AllCourseCards";
import { RootState } from "../store";

import type { Course } from "../Courses/reducer";
import { redirect } from "next/navigation";


export default function Dashboard() {
    const { courses } = useSelector((state: RootState) => state.coursesReducer);

    const dispatch = useDispatch();
    const [course, setCourse] = useState({
        _id: "0", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        image: "/images/reactjs.jpg", description: "New Description"
    })

    const { currentUser } = useSelector((state: RootState) => state.accountReducer);
    const { enrollments } = useSelector((state: RootState) => state.enrollmentsReducer);
    
    const [filterEnrollment, setFilterEnrollment ] = useState(true);


    if (currentUser === null) {
        redirect("/Account/Signin");
    }

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
    
            <Button onClick={() => setFilterEnrollment(!filterEnrollment)} className="float-end ms-2">Enrollment</Button>

            {/*
            <h5>New Course
                <button className="btn btn-primary float-end"
                    id="wd-add-new-course-click"
                    onClick={() => dispatch(addNewCourse(course))} > Add </button>

                <button className="btn btn-warning float-end me-2"
                    id="wd-upate-new-course-click"
                    onClick={() => dispatch(updateCourse(course))} > Update </button>
            </h5><br />
            <FormControl value={course.name} className="mb-2" 
                onChange={(e) => setCourse({ ...course, name: e.target.value})}/>
            <FormControl as="textarea" value={course.description} rows={3} 
                onChange={(e) => setCourse({...course, description: e.target.value})}/>*/}
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
            
            <div id="wd-dashboard-courses">        
                    {
                    currentUser?.role === "FACULTY" ? 
                        <div>
                            <h5>New Course
                                <button className="btn btn-primary float-end"
                                    id="wd-add-new-course-click"
                                    onClick={() => dispatch(addNewCourse(course))} > Add </button>

                                <button className="btn btn-warning float-end me-2"
                                    id="wd-upate-new-course-click"
                                    onClick={() => dispatch(updateCourse(course))} > Update </button>
                            </h5><br />
                            <FormControl value={course.name} className="mb-2" 
                                onChange={(e) => setCourse({ ...course, name: e.target.value})}/>
                            <FormControl as="textarea" value={course.description} rows={3} 
                                onChange={(e) => setCourse({...course, description: e.target.value})}/>
                            <hr />
                            {filterEnrollment ? 
                            <Row xs={1} md={5} className="g-4">
                                {courses
                                    .filter((course) => enrollments.some((enrollment) => 
                                    enrollment.user === currentUser?._id &&
                                    enrollment.course === course._id))
                                    .map((course) => (
                                        course !== undefined ? 
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
                                                            dispatch(deleteCourse(course._id));
                                                            }} className="btn btn-danger float-end"
                                                            id="wd-delete-course-click">
                                                            Delete </Button>
                                                        <Button id="wd-edit-course-click"
                                                            onClick={(e) => {
                                                            e.preventDefault();
                                                            setCourse(course as Course) }}
                                                            className="btn btn-warning me-2 float-end">
                                                            Edit </Button>
                                                    </CardBody>
                                                </Link>
                                            </Card>

                                        </Col> : "null"
                                    )
                                )}
                                </Row>

                            :
                                <AllCourseCards userId={currentUser ? currentUser._id : ""}/> }
                        </div>

                    :
                        filterEnrollment ? 
                            <Row xs={1} md={5} className="g-4">
                                {courses
                                    .filter((course) => enrollments.some((enrollment) => 
                                    enrollment.user === currentUser?._id &&
                                    enrollment.course === course._id))
                                    .map((course) => (
                                        course !== undefined ? 
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
                                            
                                                    </CardBody>
                                                </Link>
                                            </Card>

                                        </Col> : "null"
                                    )
                                )}
                                </Row>

                            :
                                <AllCourseCards userId={currentUser ? currentUser._id : ""}/> 
                                

                    }
                        
            </div>
        </div>
    )
}