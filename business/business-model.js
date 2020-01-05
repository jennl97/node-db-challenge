const db = require('../data/db-config');

function findResources(){
    return db('resources');
}

function findProjects(){
    return db('projects');
}

function findTasks(){
    return db('tasks as t')
        .join('projects as p', 'p.id', 't.project_id')
        .select('t.id','p.name', 'p.description', 't.description', 't.notes', 't.completed')
}

function addResources(resourceData){
    return db('resources').insert(resourceData);
}

function addProjects(projectData){
    return db('projects').insert(projectData);
}

function addTasks(taskData){
    return db('tasks').insert(taskData);
}

module.exports = {
    findResources,
    findProjects,
    findTasks,
    addResources,
    addProjects,
    addTasks
};