export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name"><h3>Assignment Name</h3></label>
            <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />

            <textarea id="wd-description" cols={45} rows={10}>
                The assignment is available online Submit a link to the landing page of
                your Web application running on Netlify. The landing page should
                include the following: Your full name and section Links to each of the lab
                assignments Link to the Kanbas application
                Links to all relevant source code repositories
                The Kanbas application should include a link to navigate back to the landing
                page.
            </textarea> <br />
            <br />
            <table>
                <tbody>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input type="number" id="wd-points" defaultValue={100} />
                    </td>
                </tr> <br/>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="QUIZZES">QUIZZES</option>
                            <option value="EXAMS">EXAMS</option>
                            <option value="PROJECTS">PROJECTS</option>
                        </select>
                    </td>
                </tr> <br />

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option value="PERCENTAGE">Percentage</option>
                            <option value="POINTS">Points</option>
                            <option value="LETTERGRADE">Letter Grade</option>
                        </select>
                    </td>
                </tr> <br />

                <tr>
                    <td align="right" valign="top">
                    <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                
                    <td>
                        <select id="wd-submission-type">
                            <option value="Online">Online</option>
                            <option value="External">External Tool</option>
                            <option value="Offline">Offline</option>
                        </select> <br />
                        <br />

                        <label id="wd-online-entry">Online Entry Options</label> <br />

                        <input type="checkbox" name="check-online-entry-options" id="wd-text-entry" />
                        <label htmlFor="wd-text-entry">Text Entry</label> <br />

                        <input type="checkbox" name="check-online-entry-options" id="wd-website-url" />
                        <label htmlFor="wd-website-url">Website URL</label> <br />

                        <input type="checkbox" name="check-online-entry-options" id="wd-media-recordings" />
                        <label htmlFor="wd-media-recordings">Media Recordings</label> <br />

                        <input type="checkbox" name="check-online-entry-options" id="wd-student-annotation" />
                        <label htmlFor="wd-student-annotation">Student Annotation</label> <br />

                        <input type="checkbox" name="check-online-entry-options" id="wd-file-upload" />
                        <label htmlFor="wd-file-upload">File Uploads</label> <br />
                    </td>
                </tr> <br />

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign</label>
                    </td>
                    <td>
                        <label htmlFor="wd-assign-to">Assign to</label> <br />
                        <select id="wd-assign-to">
                            <option value="EVERYONE" selected>Everyone</option>
                            <option value="JohnDoe">John Doe</option>
                            <option value="JaneDoe">Jane Doe</option>
                        </select> <br />
                        <br />

                        <label htmlFor="wd-due-date">Due</label> <br />
                        <input type="date" 
                                value="2024-05-13"
                                id="wd-due-date" /> <br />
                        <br />
                        <table>
                            <tr>
                                <td>
                                    <label htmlFor="wd-available-from">Available From</label> <br />
                                    <input type="date"
                                            value="2024-05-05"
                                            id="wd-available-from" />
                                </td>
                                <td>
                                    <label htmlFor="wd-available-until">Until</label> <br />
                                    <input type="date"
                                            value="2024-05-20"
                                            id="wd-available-until"></input>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr> <br />
                
                <tr>
                    <td colSpan={2}><hr /></td>
                </tr>

                <tr>
                    <td></td>
                    <td align="right" valign="top">
                        <button>Cancel</button>
                        <button>Save</button>
                    </td>
                </tr>
        
                </tbody>
            </table>
        </div>
    )
}