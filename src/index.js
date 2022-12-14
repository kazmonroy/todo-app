import './assets/style.css';
import { Project, Task } from './modules/projects.js';

const todoApp = (() => {
  const newProjectForm = document.querySelector('[data-new-project-form]');
  const projectNameInput = newProjectForm.querySelector(
    '[data-project-name-input]'
  );

  const projectsTabsContainer = document.querySelector(
    '[data-projects-tabs-container]'
  );

  const projectsTasksDisplay = document.querySelector(
    '[data-projects-tasks-display]'
  );
  const newTaskForm = document.querySelector('[data-new-task-form]');
  const projectTitle = document.querySelector('[data-project-name-title]');
  const projectTasksContainer = document.querySelector(
    '[data-project-tasks-container]'
  );
  const taskNameInput = newTaskForm.querySelector('[data-task-name-input]');
  const deleteProjectBtn = document.querySelector('[data-delete-project]');

  const menuIcon = document.querySelector('[data-burger-menu-icon]');
  const nav = document.querySelector('nav');
  const homeIcon = document.querySelector('[data-home-icon]');

  // LOCAL STORAGE

  const LOCAL_STORAGE_PROJECTS_LISTS_KEY = 'projects.list';
  const LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY = 'project.selectedID';

  let selectedProjectID = localStorage.getItem(
    LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY
  );

  let projects = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_PROJECTS_LISTS_KEY)
  ) || [
    {
      id: '1728272822829',
      name: 'Today',
      tasks: [
        {
          id: '1728272822839',
          name: 'Be awesome',
          isComplete: false,
        },
      ],
    },

    {
      id: '1728272822929',
      name: 'Grocerys',
      tasks: [
        { id: '123', name: 'Potatoes', isComplete: false },
        { id: '456', name: 'Bananas', isComplete: true },
      ],
    },
  ];

  const saveLocalStorage = () => {
    localStorage.setItem(
      LOCAL_STORAGE_PROJECTS_LISTS_KEY,
      JSON.stringify(projects)
    );
    localStorage.setItem(
      LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY,
      selectedProjectID
    );
  };

  // EVENT LISTENERS

  menuIcon.addEventListener('click', (e) => {
    nav.classList.toggle('collapse');
  });

  nav.addEventListener('click', (e) => {
    e.stopPropagation();

    if (e.target.classList.contains('projects-section')) {
      nav.classList.remove('collapse');
    } else if (e.target.tagName.toLowerCase() === 'li') {
      nav.classList.remove('collapse');
    }
  });

  newProjectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addNewProject(projectNameInput);
  });

  newTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addNewTask(taskNameInput);
  });

  projectsTabsContainer.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'li') {
      selectedProjectID = e.target.dataset.projectId;
      saveAndRender();
    }
  });

  homeIcon.addEventListener('click', (e) => {
    selectedProjectID = projects[0].id;
    if (nav.classList.contains('collapse')) {
      nav.classList.remove('collapse');
    }

    saveAndRender();
  });

  projectTasksContainer.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'button') {
      const button = e.target;
      const taskContainer = button.parentElement.parentElement;
      const currentProject = projects.find(
        (project) => project.id === selectedProjectID
      );

      if (button.classList.contains('delete-task-btn')) {
        deleteTask(e);
      } else if (button.classList.contains('edit-task-btn')) {
        editTask(e, taskContainer, button);
      } else if (button.classList.contains('save-edit-task-btn')) {
        saveEditTask(e, taskContainer, button, currentProject);
      }
    }

    checkTaskDone(e);
  });

  deleteProjectBtn.addEventListener('click', (e) => {
    projects = projects.filter((project) => project.id !== selectedProjectID);
    selectedProjectID = null;

    saveAndRender();
  });

  // FEATURES

  const saveEditTask = (e, taskContainer, button, currentProject) => {
    const buttonsContainer = button.parentElement;
    const input = taskContainer.firstChild;

    const taskCheck = document.createElement('input');
    taskCheck.setAttribute('type', 'checkbox');
    taskCheck.setAttribute('id', input.id);
    taskCheck.classList.add('task-input');
    taskCheck.dataset.taskId = input.id;
    taskCheck.checked = input.isComplete;

    const taskContent = document.createElement('label');
    taskContent.setAttribute('for', input.id);
    taskContent.setAttribute('id', input.id);
    taskContent.classList.add('task-text');
    taskContent.textContent = input.value;

    const customCheckBox = document.createElement('span');
    customCheckBox.classList.add('custom-checkbox');

    taskContent.appendChild(customCheckBox);

    input.remove();

    taskContainer.insertBefore(taskCheck, buttonsContainer);
    taskContainer.insertBefore(taskContent, buttonsContainer);

    button.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
    button.classList.remove('save-edit-task-btn');
    button.classList.add('edit-task-btn');

    currentProject.tasks.forEach((task) => {
      if (task.id === input.id) {
        task.name = input.value;

        saveAndRender();
      }
    });
  };

  const editTask = (e, taskContainer, button) => {
    const input = taskContainer.firstChild;
    const label = taskContainer.firstChild.nextElementSibling;
    const deleteBtn = button.previousSibling;
    deleteBtn.textContent = '';

    // new input
    const editTaskInput = document.createElement('input');
    editTaskInput.setAttribute('type', 'text');
    editTaskInput.setAttribute('class', 'edit-task-input');
    editTaskInput.value = label.textContent;
    editTaskInput.id = label.id;

    taskContainer.insertBefore(editTaskInput, input);
    input.remove();
    label.remove();

    button.innerHTML = 'Save <i class="fa-solid fa-check"></i>';
    button.classList.remove('edit-task-btn');
    button.classList.add('save-edit-task-btn');
  };

  const saveEditTaskLocalStorage = (e) => {
    const taskContainer = e.target.parentElement.parentElement.children[1];

    const currentProject = projects.find(
      (project) => project.id === selectedProjectID
    );

    currentProject.tasks.forEach((task, index) => {
      if (task.id === taskContainer.id) {
        task.name = taskContainer.textContent;
      }
    });
  };

  const addNewProject = (projectNameInput) => {
    const projectName = projectNameInput.value;

    if (projectName === null || projectName === '') return;

    const newProject = Project(projectName);
    projects.push(newProject);
    saveAndRender();

    projectNameInput.value = '';
  };

  const addNewTask = (taskNameInput) => {
    const taskName = taskNameInput.value;
    if (taskName === null || taskName === '') return;

    const newTask = Task(taskName);

    const currentProject = projects.find(
      (project) => project.id === selectedProjectID
    );

    currentProject.tasks.push(newTask);

    saveAndRender();
    taskNameInput.value = '';
  };

  const checkTaskDone = (e) => {
    if (e.target.hasAttribute('data-task-id')) {
      const currentProject = findSelectedProject();

      const selectedTask = currentProject.tasks.find(
        (task) => task.id === e.target.id
      );
      selectedTask.isComplete = e.target.checked;
      saveAndRender();
    }
  };

  const deleteTask = (e) => {
    deleteTaskUI(e);
    deleteTaskLocalStorage(e);
    saveAndRender();
  };

  const deleteTaskUI = (e) => {
    e.target.parentElement.parentElement.remove();
  };

  const deleteTaskLocalStorage = (e) => {
    const selectedTask = e.target.parentElement.parentElement.firstChild;

    const currentProject = projects.find(
      (project) => project.id === selectedProjectID
    );

    currentProject.tasks.forEach((task, index) => {
      if (task.id === selectedTask.id) {
        currentProject.tasks.splice(index, 1);
      }
    });
  };

  const saveAndRender = () => {
    renderUI();
    saveLocalStorage();
  };

  const renderUI = () => {
    clearElement(projectsTabsContainer);
    renderProjects();
    renderProjectInfo();
  };

  const renderProjects = () => {
    projects.forEach((project) => {
      const newTabProject = document.createElement('li');
      newTabProject.classList.add('nav-tab');
      newTabProject.setAttribute('id', project.id);
      newTabProject.dataset.projectId = project.id;

      if (newTabProject.dataset.projectId === selectedProjectID) {
        newTabProject.classList.add('active');
      }

      const iconProject = document.createElement('div');
      iconProject.classList.add('icon-project');
      iconProject.innerHTML = '<i class="fa-solid fa-circle nav-icon"></i>';

      const projectName = document.createElement('p');
      projectName.textContent = project.name;

      newTabProject.appendChild(iconProject);
      newTabProject.appendChild(projectName);

      projectsTabsContainer.appendChild(newTabProject);
    });
  };

  const findSelectedProject = () => {
    const currentProjectInfo = projects.find(
      (project) => project.id === selectedProjectID
    );

    return currentProjectInfo;
  };

  const renderProjectInfo = () => {
    const currentProjectInfo = findSelectedProject();

    if (selectedProjectID === null || currentProjectInfo === undefined) {
      projectsTasksDisplay.style.display = 'none';
      selectedProjectID = projects[0].id;

      saveAndRender();
    } else {
      projectsTasksDisplay.style.display = '';
      projectTitle.textContent = currentProjectInfo.name;
      clearElement(projectTasksContainer);
      renderTasks();
    }
  };

  const renderTasks = () => {
    const currentProjectInfo = findSelectedProject();

    currentProjectInfo.tasks.forEach((task) => {
      const newTask = document.createElement('li');
      newTask.classList.add('task');

      const taskCheck = document.createElement('input');
      taskCheck.setAttribute('type', 'checkbox');
      taskCheck.setAttribute('id', task.id);
      taskCheck.classList.add('task-input');
      taskCheck.dataset.taskId = task.id;
      taskCheck.checked = task.isComplete;

      const taskContent = document.createElement('label');
      taskContent.setAttribute('for', task.id);
      taskContent.setAttribute('id', task.id);
      taskContent.textContent = task.name;
      taskContent.classList.add('task-text');

      const customCheckBox = document.createElement('span');
      customCheckBox.classList.add('custom-checkbox');

      const iconsContainer = document.createElement('div');
      iconsContainer.classList.add('task-icons-container');

      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add('task-btn', 'delete-task-btn');
      deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can "></i>';

      const editBtn = document.createElement('button');
      editBtn.classList.add('task-btn', 'edit-task-btn');
      editBtn.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';

      taskContent.appendChild(customCheckBox);
      iconsContainer.appendChild(deleteBtn);
      iconsContainer.appendChild(editBtn);

      newTask.appendChild(taskCheck);
      newTask.appendChild(taskContent);

      newTask.appendChild(iconsContainer);

      return projectTasksContainer.appendChild(newTask);
    });
  };

  const clearElement = (element) => {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  };

  const start = () => {
    renderUI();
  };

  return { start };
})();

todoApp.start();
