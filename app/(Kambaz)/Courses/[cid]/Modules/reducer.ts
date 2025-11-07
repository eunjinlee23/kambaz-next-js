import { createSlice } from "@reduxjs/toolkit";
import { modules } from "../../../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    modules: modules,
};

{
    "_id": "M101",
    "name": "Introduction to Rocket Propulsion",
    "description": "Basic principles of rocket propulsion and rocket engines.",
    "course": "RS101",
    "lessons": [
      {
        "_id": "L101",
        "name": "History of Rocketry",
        "description": "A brief history of rocketry and space exploration.",
        "module": "M101"
      },
      {
        "_id": "L102",
        "name": "Rocket Propulsion Fundamentals",
        "description": "Basic principles of rocket propulsion.",
        "module": "M101"
      },
      {
        "_id": "L103",
        "name": "Rocket Engine Types",
        "description": "Overview of different types of rocket engines.",
        "module": "M101"
      }
    ]
  },

type Lesson = {
    _id: string,
    name: string,
    description: string,
    module: string
};

type Module = {
    _id: string,
    name: string,
    description: string,
    course: string,
    lessons: Lesson[]
}

const modulesSlice = createSlice({
    name: "modules",
    initialState,
    reducers: {
        addModule: (state, { payload: module }) => {
            const newModule: Module = {
                _id: uuidv4(),
                lessons: [],
                name: module.name,
                course: module.course,
            }
            state.modules = [...state.modules, newModule] as Module[];
        },

        deleteModule: (state, { payload: moduleId }) => {
            state.modules = state.modules.filter((m) => m._id !== moduleId)
        },

        updateModule: (state, { payload: module }) => {
            state.modules = state.modules.map((m) => 
                m._id === module._id ? module : m)
        },
        editModule: (state, { payload: moduleId }) => {
            state.modules = state.modules.map((m) => 
                m._id === moduleId ? { ...m, editing: true} : m )
        },
    },
});

export const { addModule, deleteModule, updateModule, editModule } =
    modulesSlice.actions;
export default modulesSlice.reducer;