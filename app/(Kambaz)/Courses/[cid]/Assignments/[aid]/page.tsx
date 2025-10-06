"use client";
 
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { FaCalendarAlt } from "react-icons/fa";
import EditorButtons from "./EditorButtons";
import { RxCross2 } from "react-icons/rx";


 
export default function AssignmentEditor() {
  return (
<div id="wd-assignments-editor">
    <Form className="mb-4">
        <Form.Group className="mb-3" id="wd-name">
        <Form.Label>Assignment Name</Form.Label>
        <Form.Control type="text" placeholder="Enter assignment name" defaultValue="A1"/>
        </Form.Group>

        <Form.Control as="textarea" rows={14} 
            defaultValue={`
The assignment is available online. 

Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:

    • Your full name and section
    • Links to each of the lab assignments
    • Link to the Kanbas application
    • Links to all relevant source code repositories
    
The Kamvaz application should include a link to navigate back to the landing page.`}/>
    </Form>

    <div className="pe-2 ">
        <Row className="mb-3" id="wd-points">
            <Form.Label sm="4" className="text-end" column>Points</Form.Label>
            <Col sm="8"> <Form.Control type="number" defaultValue={100} /> </Col>
        </Row>

        <Row className="mb-3" id="wd-group">
            <Form.Label sm="4" className="text-end" column>Assignment Group</Form.Label>
            <Col sm="8">
                <Form.Select>
                    <option value="ASSIGNMENTS" defaultChecked>ASSIGNMENTS</option>
                    <option value="QUIZZES">QUIZZES</option>
                    <option value="EXAMS">EXAMS</option>
                    <option value="PROJECTS">PROJECTS</option>
                </Form.Select>
            </Col>
        </Row>

        <Row className="mb-3" id="wd-display-grade-as">
            <Form.Label sm="4" className="text-end" column>Display Grade as</Form.Label>
                <Col sm="8">
                    <Form.Select>
                        <option value="PERCENTAGE" defaultChecked>Percentage</option>
                        <option value="POINTS">Points</option>
                        <option value="LETTERGRADE">Letter Grade</option>
                    </Form.Select>f
                </Col>
        </Row>

        <Row as={Row} className="mb-3" id="wd-submission-type">
            <Form.Label sm="4" className="text-end" column>Submission Type</Form.Label>
            <Col sm="8">
                <fieldset className="assignment-field-border pt-3 pb-3 ps-3 pe-3">
                    <Form.Select id="wd-submission-type" className="mb-4">
                        <option value="Online">Online</option>
                        <option value="External">External Tool</option>
                        <option value="Offline">Offline</option>
                    </Form.Select>

                    <Form.Group id="wd-online-entry">
                        <Form.Label className="mb-3"><b>Online Entry Options</b></Form.Label>
                        <Form.Check className="mb-3" label="Text Entry" name="check-online-entry-options" id="wd-text-entry" />
                        <Form.Check className="mb-3" label="Website URL" name="check-online-entry-options" id="wd-website-url" />
                        <Form.Check className="mb-3" label="Media Recordings" name="check-online-entry-options" id="wd-media-recordings" />
                        <Form.Check className="mb-3" label="Student Annotation" name="check-online-entry-options" id="wd-student-annotation" />
                        <Form.Check label="wd-file-upload" name="check-online-entry-options" id="wd-file-upload" />        
                    </Form.Group>   
                </fieldset>
            </Col>
        </Row>

        <Row as={Row} id="wd-assign-to">  
            <Form.Label sm="4" className="text-end" column>Assign</Form.Label>
            <Col>
                <fieldset className="assignment-field-border pt-3 pb-3 ps-3 pe-3">
                    <Form.Group className="mb-3">
                        <Form.Label><b>Assign To</b></Form.Label>
                        <Form.Group className="assignment-field-border pt-2 pb-2 ps-2 pe-2">
                            <InputGroup>
                                <InputGroupText>Everyone</InputGroupText>
                                <InputGroupText className="border-left-none"><RxCross2 className="fs-6"/></InputGroupText>
                            </InputGroup>
                        </Form.Group>
                    </Form.Group>

                    <Form.Group id="wd-due-date" className="mb-3">
                        <Form.Label><b>Due</b></Form.Label>
                        <Form.Control type="date" defaultValue="2024-05-13" />
                    </Form.Group>

                    <Row>
                        <Col className="pe-1" id="wd-available-from">
                            <Form.Label><b>Available from</b></Form.Label>
                            <Form.Control type="date" defaultValue="2024-05-13" />
                        </Col>
                        <Col className="ps-1" id="wd-available-until">
                            <Form.Label><b>Until</b></Form.Label>
                            <Form.Control type="date" defaultValue="2024-05-13" />
                        </Col>
                    </Row>
                </fieldset>
            </Col>
        </Row>
    </div>

    <br/><hr />

    <EditorButtons />
    

</div>
  );
}