const express = require('express');
const router = express.Router();
const problemController = require('../../controller/admin');

// POST /problem
router.post('/problem', problemController.createProblem);

// GET /problem/:id
router.get('/problem/:id', problemController.getProblem);

// PUT /problem/:id
router.put('/problem/:id', problemController.updateProblem);

// DELETE /problem/:id
router.delete('/problem/:id', problemController.deleteProblem);

module.exports = router;

