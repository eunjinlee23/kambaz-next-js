import Link from "next/link";
export default function Assignments() {
    return (
        <div id="wd-assignments">
            <input placeholder="Search for Assignments"
                    id="wd-search-assignment" />
            <button id="wd-add-assignment-group">+ Group</button>
            <button id="wd-add-assignment">+ Assignment</button>
            <h3 id="wd-assignments-title">
                ASSIGNMENTS 40% of Total <button>+</button>
            </h3>
            <ul id="wd-assignment-list">
                <li className="wd-assignment-list-item">
                    <Link href="/Courses/1234/Assignments/123"
                        className="wd-assignment-link">
                            A1 - ENV + HTML 
                    </Link> <br/>
                    Multiple Modules | <b>Not available until</b> May 6 at 12:00am 
                    | <b>Due</b> May 13 at 11:59pm | 100 pts
                </li>

                <li className="wd-asslignment-list-item">
                    <Link href="/Courses/1234/Assignments/124"
                        className="wd-assignment-link">
                            A2 - CSS + BOOTSTRAP
                    </Link> <br/>
                    Multiple Modules | <b>Not available until</b> May 13 at 12:00am 
                    | <b>Due</b> May 20 at 11:59pm | 100 pts
                </li>

                <li className="wd-asslignment-list-item">
                    <Link href="/Courses/1234/Assignments/125"
                        className="wd-assignment-link">
                            A3 - JAVASCRIPT + REACT
                    </Link> <br/>
                    Multiple Modules | <b>Not available until</b> May 20 at 12:00am 
                    | <b>Due</b> May 27 at 11:59pm | 100 pts
                </li>
            </ul>

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
        </div>
    )
}