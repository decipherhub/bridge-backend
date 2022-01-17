const express = require('express')
const evaluationService = require('../services/evaluation')

const router = express.Router()

router.post('/', evaluationService.addEvaluation)
router.get('/xchain/:xchainId', evaluationService.getEvaluation)

module.exports = router