import React, { useState } from 'react';
import ProjectSideBar from './components/ProjectSideBar';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import SelectedProject from './components/SelectedProject';

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const handleAddTask = (text) => {
    setProjectState((prev) => {
      const newTask = {
        text,
        projectId: prev.selectedProjectId,
        id: Date.now(),
      };

      return {
        ...prev,
        tasks: [...prev.tasks, newTask],
      };
    });
  };

  const handleDeleteTask = (taskId) => {
    setProjectState((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.filter((task) => task.id !== taskId),
    }));
  };

  const handleSelectProject = (projectId) => {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: projectId,
    }));
  };

  const handleDeleteProject = () => {
    setProjectState((prevState) => {
      const filteredProjects = prevState.projects.filter((project) => project.id !== prevState.selectedProjectId);

      return {
        ...prevState,
        projects: filteredProjects,
        selectedProjectId: filteredProjects[0]?.id || undefined,
      };
    });
  };

  const handleNewProjectCancel = () => {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  };

  const handleStartNewProject = () => {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  };

  const handleAddProject = (projectData) => {
    setProjectState((prev) => {
      const newProjectData = {
        ...projectData,
        id: Date.now(),
      };

      return {
        ...prev,
        selectedProjectId: newProjectData.id,
        projects: [...prev.projects, newProjectData],
      };
    });
  };

  let content = (
    <SelectedProject
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      onDelete={handleDeleteProject}
      project={projectState.projects.find((project) => project.id === projectState.selectedProjectId)}
      tasks={projectState.tasks.filter((task) => task.projectId === projectState.selectedProjectId)}
    />
  );

  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleNewProjectCancel} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartNewProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar
        onSelectProject={handleSelectProject}
        onStartAddProject={handleStartNewProject}
        projects={projectState}
      />

      {content}
    </main>
  );
}

export default App;
