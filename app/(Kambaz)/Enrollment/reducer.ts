import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database";
import { v4 as uuidv4 } from "uuid";
const initialState = {
    enrollments: enrollments,
};

const enrollmentsSlice = createSlice({
    name: "modules",
    initialState,
    reducers: {
        addEnrollment: (state, { payload: enrollment }) => {
            const newEnrollment: unknown = {
                _id: uuidv4(),
                user: enrollment.user,
                course: enrollment.course,
            }
            state.enrollments = [...state.enrollments, newEnrollment] as unknown;
        },

        deleteEnrollment: (state, { payload: {enrollment} }) => {
            state.enrollments = state.enrollments.filter((e) => e._id !== enrollment._id)
        },

        updateEnrollment: (state, { payload: {enrollment} }) => {
            state.enrollments = state.enrollments.map((e) => 
                e._id === enrollment._id ? enrollment : e)
        },
        editEnrollment: (state, { payload: enrollmentId }) => {
            state.enrollments = state.enrollments.map((e) => 
                e._id === enrollmentId ? { ...e, editing: true} : e )
        },
    },
});

export const { addEnrollment, deleteEnrollment, updateEnrollment, editEnrollment } =
    enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;