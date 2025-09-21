import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link href="/Courses/1234" className="wd-dashboard-course-link">
                        <Image alt="courseimg" src="/images/reactjs.jpg" width={200} height={150} />
                        <div>
                            <h5> CS1234 React JS </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>

                    <Link href="/Courses/1215" className="wd-dashboard-course-link">
                        <Image alt="courseimg" src="/images/reactjs.jpg" width={200} height={150} />
                        <div>
                            <h5> CS1215 Discrete Mathematics </h5>
                            <p className="wd-dashboard-course-title">
                                Foundation of discrete mathematics
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>

                    <Link href="/Courses/2144" className="wd-dashboard-course-link">
                        <Image alt="courseimg" src="/images/reactjs.jpg" width={200} height={150} />
                        <div>
                            <h5> CS2144 Logic in Computer Science </h5>
                            <p className="wd-dashboard-course-title">
                                Introduction of Logic in computer Science
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>

                    <Link href="/Courses/2650" className="wd-dashboard-course-link">
                        <Image alt="courseimg" src="/images/reactjs.jpg" width={200} height={150} />
                        <div>
                            <h5> CS2650 Algorithms </h5>
                            <p className="wd-dashboard-course-title">
                                Beginning of Algorithm
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>

                    <Link href="/Courses/2800" className="wd-dashboard-course-link">
                        <Image alt="courseimg" src="/images/reactjs.jpg" width={200} height={150} />
                        <div>
                            <h5> CS2800 Object Oriented Design </h5>
                            <p className="wd-dashboard-course-title">
                                Beginning of Object Oriented Design and implementation
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>

                    <Link href="/Courses/3250" className="wd-dashboard-course-link">
                        <Image alt="courseimg" src="/images/reactjs.jpg" width={200} height={150} />
                        <div>
                            <h5> CS3250 Game Development </h5>
                            <p className="wd-dashboard-course-title">
                                Game development
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>

                    <Link href="/Courses/3315" className="wd-dashboard-course-link">
                        <Image alt="courseimg" src="/images/reactjs.jpg" width={200} height={150} />
                        <div>
                            <h5> CS3315 Introduction to Mixed Reality </h5>
                            <p className="wd-dashboard-course-title">
                                Introduction of mixed reality
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>

                    <Link href="/Courses/4223" className="wd-dashboard-course-link">
                        <Image alt="courseimg" src="/images/reactjs.jpg" width={200} height={150} />
                        <div>
                            <h5> CS 4223 Artificial Intelligence </h5>
                            <p className="wd-dashboard-course-title">
                                Artificial Intelligence and development
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}