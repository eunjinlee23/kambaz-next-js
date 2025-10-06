import Link from "next/link";
import { ListGroup, ListGroupItem } from "react-bootstrap";

import AssignmentControls from "./AssignmentControls";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentListButtons from "./AssignmentListButtons";
import AssignmentDropButton from "./AssignmentDropButton";


export default function Assignments() {
    return (
        <div id="wd-assignments">
            <AssignmentControls /><br /><br /><br /><br />

            <ListGroup className="rounded-0" id="wd-assignment-list">
                <ListGroupItem className="p-0 mb-5 fs-5 border-gray">
                    <div className="p-3 ps-2 pb-4 pt-4 bg-secondary d-flex align-items-center justify-content-between">
                        <div>
                            <AssignmentDropButton />
                            <span id="wd-assignments-title" className="fs-4"><b>ASSIGNMENTS</b></span> 
                        </div>
                        <AssignmentControlButtons />
                    </div>

                    <ListGroup className="rounded-0">
                        <ListGroupItem className="wd-assignment-list-item p-3 ps-1 d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <AssignmentListButtons />
                                <div className="ms-3">
                                    <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link text-black text-decoration-none"><b>A1 - ENV + HTML</b></Link><br/>
                                    <span className="fs-6 mb-0"><span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59pm | 100 pts</span>
                                </div>
                            </div>
                            <LessonControlButtons />
                        </ListGroupItem>

                        <ListGroupItem className="wd-assignment-list-item p-3 ps-1 d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <AssignmentListButtons />
                                <div className="ms-3">
                                    <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link text-black text-decoration-none"><b>A2 - CSS + BOOTSTRAP</b></Link><br/>
                                    <span className="fs-6 mb-0"><span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 13 at 12:00am | <b>Due</b> May 20 at 11:59pm | 100 pts</span>
                                </div>
                            </div>
                                <LessonControlButtons />
                        </ListGroupItem>

                        <ListGroupItem className="wd-assignment-list-item p-3 ps-1 d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <AssignmentListButtons />
                                <div className="ms-3">
                                    <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link text-black text-decoration-none"><b>A3 - JAVASCRIPT + REACT</b></Link><br/>
                                    <span className="fs-6 mb-0"><span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 20 at 12:00am | <b>Due</b> May 27 at 11:59pm | 100 pts</span>
                                </div>
                            </div>
                            <LessonControlButtons />
                        </ListGroupItem>

                        
                     </ListGroup>
                </ListGroupItem>
            </ListGroup>

            {/*

            <h3 id="wd-assignment-list">
                QUIZZES 10% of Total <button>+</button>
            </h3>

            <ul id="wd-assignment-list">
                <li className="wd-assignment-list-item">
                    <Link href="/Courses/1234/Assignments/126"
                        className="wd-assignment-link">
                            Q1
                    </Link> <br/>
                    <b>Not available until</b> May 13 at 12:00am 
                    | <b>Due</b> May 14 at 11:59pm | 100 pts
                </li>

                <li className="wd-asslignment-list-item">
                    <Link href="/Courses/1234/Assignments/127"
                        className="wd-assignment-link">
                            Q2
                    </Link> <br/>
                    <b>Not available until</b> May 21 at 12:00am 
                    | <b>Due</b> May 22 at 11:59pm | 100 pts
                </li>

                <li className="wd-asslignment-list-item">
                    <Link href="/Courses/1234/Assignments/128"
                        className="wd-assignment-link">
                            Q3
                    </Link> <br/>
                    <b>Not available until</b> May 28 at 12:00am 
                    | <b>Due</b> May 28 at 11:59pm | 100 pts
                </li>
            </ul>



            <h3 id="wd-assignment-list">
                EXAMS 20% of Total <button>+</button>
            </h3>

            <ul id="wd-assignment-list">
                <li className="wd-assignment-list-item">
                    <Link href="/Courses/1234/Assignments/129"
                        className="wd-assignment-link">
                            Exam1
                    </Link> <br/>
                    <b>Not available until</b> June 4 at 5:59pm 
                    | <b>Due</b> June 4 at 9:00pm | 100 pts
                </li>

                <li className="wd-asslignment-list-item">
                    <Link href="/Courses/1234/Assignments/130"
                        className="wd-assignment-link">
                            Exam2
                    </Link> <br/>
                    <b>Not available until</b> July 9 at 5:59pm
                    | <b>Due</b> July 9 at 5:59pm | 100 pts
                </li>
            </ul>


            <h3 id="wd-assignment-list">
                PROJECT 30% of Total <button>+</button>
            </h3>
            <ul id="wd-assignment-list">
                <li className="wd-assignment-list-item">
                    <Link href="/Courses/1234/Assignments/131"
                        className="wd-assignment-link">
                            Final Project
                    </Link> <br/>
                    <b>Not available until</b> May 6 at 12:00am 
                    | <b>Due</b> July 8 at 11:59pm | 100 pts
                </li>
            </ul>
            */}
        </div>
        
    )
}