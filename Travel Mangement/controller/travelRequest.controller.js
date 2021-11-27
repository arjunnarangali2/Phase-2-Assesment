const travelRequestDao = require('../dao/travelRequest.dao');
var travelRequestController = {
    addTravelRequest: addTravelRequest,
    findTravelRequests: findTravelRequests,
    findTravelRequestByRequestId: findTravelRequestByRequestId,
    updateTravelRequest: updateTravelRequest,
    deleteByRequestId: deleteByRequestId
}

function addTravelRequest(req, res) {
    let travelRequest = req.body;
    travelRequestDao.create(travelRequest).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findTravelRequestByRequestId(req, res) {
    travelRequestDao.findByRequestId(req.params.request_id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteByRequestId(req, res) {
    travelRequestDao.deleteByRequestId(req.params.request_id).
        then((data) => {
            res.status(200).json({
                message: "TravelRequest deleted successfully",
                travelRequest: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateTravelRequest(req, res) {
    travelRequestDao.updateTravelRequest(req.body, req.params.request_id).
        then((data) => {
            res.status(200).json({
                message: "TravelRequest updated successfully",
                travelRequest: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findTravelRequests(req, res) {
    travelRequestDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = travelRequestController;