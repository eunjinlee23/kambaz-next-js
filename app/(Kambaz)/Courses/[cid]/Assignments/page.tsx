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
                                <div className="ms-3 me-5">
                                    <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link text-black text-decoration-none"><b>A1</b></Link><br/>
                                    <span className="fs-6 mb-0"><span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59pm | 100 pts</span>
                                </div>
                            </div>
                            <LessonControlButtons />
                        </ListGroupItem>

                        <ListGroupItem className="wd-assignment-list-item p-3 ps-1 d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <AssignmentListButtons />
                                <div className="ms-3 me-5">
                                    <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link text-black text-decoration-none"><b>A2</b></Link><br/>
                                    <span className="fs-6 mb-0"><span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 13 at 12:00am | <b>Due</b> May 20 at 11:59pm | 100 pts</span>
                                </div>
                            </div>
                                <LessonControlButtons />
                        </ListGroupItem>

                        <ListGroupItem className="wd-assignment-list-item p-3 ps-1 d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <AssignmentListButtons />
                                <div className="ms-3 me-5">
                                    <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link text-black text-decoration-none"><b>A3</b></Link><br/>
                                    <span className="fs-6 mb-0"><span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 20 at 12:00am | <b>Due</b> May 27 at 11:59pm | 100 pts</span>
                                </div>
                            </div>
                            <LessonControlButtons />
                        </ListGroupItem>

                        
                     </ListGroup>
                </ListGroupItem>
            </ListGroup>
        </div>
        
    )
}