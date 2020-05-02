
const express = require('express')

const entry = require('../usecases/entry')

const auth = require('../middleware/auth')

const router = express.Router()

router.get('/', async (request, response) => {
  try {
    const allEntries = await entry.getAll()
    response.json({
      message: 'All entriess',
      data: {
        entry: allEntries
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.post('/', auth, async (request, response) => {
  try {
    const newEntry = await entry.create(request.body)
    response.json({
      success: true,
      message: 'New entry created',
      data: {
        entry: newEntry
      }
    })
  } catch (error) {
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.patch('/:id', auth, async (request, response) => {
  try {
    const { id } = request.params
    const entryUpdate = await entry.updateById(id, request.body)
    response.json({
      success: true,
      message: `Entry with id ${id} updated`,
      data: {
        entry: entryUpdate
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.delete('/:id', auth, async (request, response) => {
  try {
    const { id } = request.params
    const entryDeleted = await entry.deleteById(id)
    response.json({
      success: true,
      message: `Entry with id ${id} deleted`,
      data: {
        entry: entryDeleted
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

module.exports = router
