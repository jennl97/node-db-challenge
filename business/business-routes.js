const express = require('express');

const business = require('./business-model');

const router = express.Router();

router.get('/resources', (req, res) => {
    business.findResources()
        .then(resource => {
            res.json(resource);
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to retrieve resources'
            });
        });
});

router.get('/projects', (req, res) => {
    business.findProjects()
    .then(project => {
        if(project.completed == 1){
            return "true";
        } else {
            return "false";
        }
        res.json(project);
    })
    .catch(err => {
        res.status(500).json({
            message: 'Failed to retrieve projects'
        });
    });
});

router.get('/tasks', (req, res) => {
    business.findTasks()
    .then(task => {
        res.json(task);
    })
    .catch(err => {
        res.status(500).json({
            message: 'Failed to retrieve tasks'
        });
    });
});

router.post('/resources', (req, res) => {
    const resourceData = req.body;
    business.addResources(resourceData)
        .then(newResource => {
            res.status(201).json(newResource)
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to create resource'
            });
        });
});

router.post('/projects', (req, res) => {
    const projectData = req.body;
    business.addProjects(projectData)
        .then(newProject => {
            res.status(201).json(newProject)
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to create project'
            });
        });
});

router.post('/task', (req, res) => {
    const taskData = req.body;
    business.addTasks(taskData)
        .then(newTask => {
            res.status(201).json(newTask)
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to create task'
            });
        });
});


module.exports = router;