
const Entry = require('../models/entry')

function getAll () {
  return Entry.find()
}

function create (entryData) {
  return Entry.create(entryData)
}

function updateById (id, newData) {
  return Entry.findByIdAndUpdate(id, newData)
}

function deleteById (id) {
  return Entry.findByIdAndRemove(id)
}

module.exports = {
  getAll,
  create,
  updateById,
  deleteById
}
