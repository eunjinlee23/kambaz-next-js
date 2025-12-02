"use client";
import PeopleTable from "./Table";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FormControl } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import * as client from "../../client";


export default function CoursePeople() {
    const [users, setUsers] = useState<any[]>([]);
    
    const { cid } = useParams();

    const fetchCourseUsers = async () => {
        const users = await client.findUsersForCourse(cid as string);
        setUsers(users);
    }

    useEffect(() => {
        fetchCourseUsers();
    }, [])
    
    return (
        <div>
            <h3>People</h3>
            <PeopleTable users={users} fetchUsers={fetchCourseUsers} />
        </div>
    )
}