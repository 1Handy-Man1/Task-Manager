// Express Router Setup
const express = require('express')
const router = express.Router()

// Import Controllers
const {getAllTasks, updateTask, deleteTask, createTask, getTask} = require('../controllers/tasks')

// router.get('/', getThing)
// router.post('/', creatingThing)
// router.post('/postman', creatingThing)
// router.put('/', updateThing)
// router.delete('/:id', deleteThing)

// OR

// router.route('/').get((req, res) => {
//     res.send('All Items')
// }).post(updateList)

// router.route('/').get(getAllTasks)
// router.route('/postman').post(createPostmanThing)
// roter.route('/:id').get(updateThing).delte(deleteThing)

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router;