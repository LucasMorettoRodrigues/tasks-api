const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).send({ tasks })
    } catch (error) {
        res.status(500).send( error )
    }
}

const createTask = async (req, res) => {
    try {
        const newTask = await Task.create(req.body)
        res.status(201).json({ newTask })
    } catch (error) {
        res.status(500).json( error )
    }
}

const getTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOne({ _id: taskID })

        if(!task) {
            return res.status(404).json(`Not found task with id ${taskID}`)
        }

        res.send({ task })
    } catch (error) {
        res.status(500).json({ error })
    }
}

const updateTask = (req, res) => {
    res.send('update task')
}

const deleteTask = (req, res) => {
    res.send('delete task')
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}