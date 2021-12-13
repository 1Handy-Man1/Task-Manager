const Task = require('../modules/task')

const getAllTasks = async (req, res) => {
    try {
        const task = await Task.find({})
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const getTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id)
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const updateTask = async (req, res) => {
    let bool = req.query.completed === 'true';
    let name = () => {
        if(req.query.name) {
            return req.query.name;
        } else {
            return getTask(req.params.id).name;
        }
    }
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, {name: req.query.name, completed: req.query.completed})
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

module.exports = {
    getAllTasks, updateTask, deleteTask, createTask, getTask
}