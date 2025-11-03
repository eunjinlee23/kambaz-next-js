"use client";
import { redirect } from "next/dist/client/components/navigation";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import Link from "next/link"; 
import { Button, FormControl, FormSelect } from "react-bootstrap";
import { RootState } from "../../store";

export default function Profile() { 
    const [profile, setProfile] = useState({});
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: RootState) => state.accountReducer);
    const fetchProfile = () => {
        if (!currentUser) return redirect("/Account/Signin");
        setProfile(currentUser);
    };
    const signout = () => {
        dispatch(setCurrentUser(null));
        redirect("/Account/Signin");
    };
    useEffect(() => {
        fetchProfile();
    }, []);
    return ( 
        <div id="wd-profile-screen"> 
            <h1>Profile</h1> 
            {profile && (
                <div>
                    <FormControl id="wd-username" className="mb-2"
                        defaultValue={profile.username}
                        onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                    />
                    <FormControl id="wd-password" className="mb-2"
                        defaultValue={profile.firstName}
                        onChange = {(e) => setProfile({ ...profile, firstName: e.target.value })}
                    />
                    <FormControl id="wd-firstname" className="mb-2"
                        defaultValue={profile.lastName}
                        onChange={(e) => setProfile({ ...profile, lastName: e.target.value })} />
                    <FormControl id="wd-lastname"  className="mb-2"
                        defaultValue={profile.dob}
                        onChange={(e) => setProfile({ ...profile, dob: e.target.value })} />
                    <FormControl id="wd-email" className="mb-2"
                        defaultValue={profile.email}
                        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                        type="email"/>
                    <FormSelect id="wd-role" className="mb-2"
                        onChange={(e) => setProfile({ ...profile, role: e.target.value })}> 
                        <option value="USER" defaultChecked>User</option> 
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </FormSelect>
                    <Button onClick={signout} className="w-100 mb-2" id="wd-signout-btn">
                        Sign out
                    </Button>
                </div>
            )}
        </div>
    )
}

            /*
            <FormControl id="wd-username" defaultValue="alice" placeholder="username" className="mb-2"/>
            <FormControl id="wd-password" defaultValue="123" placeholder="password" type="password" className="mb-2"/>
            <FormControl id="wd-firstname" defaultValue="Alice" placeholder="First Name" className="mb-2"/>
            <FormControl id="wd-lastname" defaultValue="Wonderland" placeholder="Last Name" className="mb-2" />
            <FormControl id="wd-dob"defaultValue="2000-01-01" type="date" className="mb-2"/>
            <FormControl id="wd-email" defaultValue="alice@wonderland" type="email" className="mb-2"/>
            <FormSelect defaultValue="FACULTY" id="wd-role" className="mb-2"> 
                <option value="USER" defaultChecked>User</option> 
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
            </FormSelect>
            <Link href="Signin" className="btn btn-danger w-100 mb-2"> Sign out </Link> 
            */