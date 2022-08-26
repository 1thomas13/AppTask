import express from 'express'

const Router = express.Router()

Router.get('/:id')
Router.post('/all')
Router.post('/:id')
Router.put('/:id')
Router.put('/:id')
Router.delete('/:id')

Router.post('/id/comment')
Router.delete('/:id/comment/:comment')

export default Router