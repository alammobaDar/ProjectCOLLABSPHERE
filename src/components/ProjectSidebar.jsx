import Button from "./Button";
import { useEffect, useState } from "react";
import app from "../firebase.js";
import {getFirestore, getDocs, collection, doc} from "firebase/firestore"


const db = getFirestore(app);

const colRef = collection(db, "users");




// const fetchDocs = () => {
//   getDocs(colRef)
//   .then((snapshot) => {
//     snapshot.forEach(doc)
//   })
//   .catch((error) => {
//     console.log(error)
//   })}


export default function ProjectSidebar({
  onStartAddProject,
  onSelectProject,
  selectedProjectId,
  projects
}){



[projects, setProjects] = useState([]);
  

useEffect (() => {
  const fetchProjects = async () => {
    const db = getFirestore(app);
    const colRef = collection(db, "users");
    const projectSnapshot = await getDocs(colRef);
    const projectList = projectSnapshot.docs.map(doc  =>({
      id: doc.id,
      ...doc.data(),
    }))
    setProjects(projectList);
  }
  fetchProjects().catch(console.error);

}, [])

  return (
    <aside className="w-1/3 px-8 py-16 shadow-x1 bg-gray-700 text-gray-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold text-4xl text-gray-200">
        CollabSphere
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
        <p className="text-xl mt-6 py-4 px-2">My Workspaces</p>
      </div>
      <ul className="mt-8">
        
        {projects.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-gray-200 hover:bg-gray-800 rounded-xl";

          if (project.id === selectedProjectId) {
            cssClasses += " bg-gray-800 text-stone-100 rounded-xl";
          } 

          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
      <div class="rounded-lg bg-gradient-to-tr from-gray-300 to-gray-500 shadow-lg shadow-[#a4a4a4,#ffffff]"></div>
    </aside>
  );
}
