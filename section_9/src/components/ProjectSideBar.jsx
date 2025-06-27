import React from 'react';
import Button from './Button';

const ProjectSideBar = ({ onStartAddProject, projects, onSelectProject }) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>

      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>

      <ul className="mt-8">
        {projects.projects.map((project) => {
          let cssClass =
            'w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 transition duration-400 hover:bg-stone-800';
          if (projects.selectedProjectId === project.id) {
            cssClass += ' bg-stone-800 text-stone-200';
          } else {
            cssClass += 'text-stone-400';
          }

          return (
            <li key={project.id} className="my-4">
              <button onClick={() => onSelectProject(project.id)} className={cssClass}>
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ProjectSideBar;
