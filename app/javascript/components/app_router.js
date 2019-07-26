const routes = {
    '/': () => <AllProjects />,
    '/projects': () => <AllProjects />,
    '/todos': () => <AllTodos />,
    '/products/edit/:id': ({id}) => <EditProjectForm id={id} />,
    '/projects/create': () => <ProjectForm />,
    '/projects/:id': () => <ShowProject />

};

export default routes;