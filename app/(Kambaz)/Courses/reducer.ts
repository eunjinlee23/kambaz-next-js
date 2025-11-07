import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../Database";
import { v4 as uuid4 } from "uuid";
const initialState = {
    courses: courses,
};

export type Course = {
    _id: string,
    name: string,
    number: string,
    startDate: string,
    endDate: string,
    department: string,
    credits: number,
    description: string,
    image: string
}
const coursesSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        addNewCourse: (state, { payload: course }) => {
            const newCourse = { ...course, _id: uuid4() };
            state.courses = [ ...state.courses, newCourse] as Course[];
        },
        deleteCourse: (state, { payload: courseId }) => {
            state.courses = state.courses.filter(
                (course) => course._id !== courseId
            );
        },
        updateCourse: (state, { payload: course }) => {
            state.courses = state.courses.map((c) =>
                c._id === course._id ? course : c);
        },
    },
});
export const { addNewCourse, deleteCourse, updateCourse } = coursesSlice.actions;
export default coursesSlice.reducer;