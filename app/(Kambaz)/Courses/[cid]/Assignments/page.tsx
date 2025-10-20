"use client"

import Link from "next/link";
import { ListGroup, ListGroupItem } from "react-bootstrap";

import AssignmentControls from "./AssignmentControls";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentListButtons from "./AssignmentListButtons";
import AssignmentDropButton from "./AssignmentDropButton";
import { useParams } from "next/navigation";
import * as db from "../../../Database";

export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments;

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
                        {assignments
                            .filter((assignment) => assignment.course === cid)
                            .map((assignment) => (
                                <ListGroupItem key={"a"} className="wd-assignment-list-item p-3 ps-1 d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <AssignmentListButtons />
                                        <div className="ms-3 me-5">
                                            <Link href={`/Courses/${cid}/Assignments/${assignment._id}`} className="wd-assignment-link text-black text-decoration-none">
                                                {assignment.title} <br />
                                                <span className="fs-6 mb-0"><span className="text-danger">Multiple Modules</span> | <b>Not available until </b> {new Date(assignment.available).toDateString()} | <b>Due</b> {new Date(assignment.due).toDateString()} | {assignment.points} pts</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <LessonControlButtons />
                                </ListGroupItem>
                            ))}
                    </ListGroup>
                </ListGroupItem>
            </ListGroup>

        </div>
    )
}