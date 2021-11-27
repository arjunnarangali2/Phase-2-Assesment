const express = require('express');
const router = express.Router();
const travelRequestController = require('../controller/travelRequest.controller');

router.post('/', travelRequestController.addTravelRequest);
router.get('/', travelRequestController.findTravelRequests);
router.get('/:request_id', travelRequestController.findTravelRequestByRequestId);
router.put('/:request_id', travelRequestController.updateTravelRequest);
router.delete('/:request_id', travelRequestController.deleteByRequestId);

module.exports = router;