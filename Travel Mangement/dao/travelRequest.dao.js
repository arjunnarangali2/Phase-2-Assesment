const TravelRequest = require('../models/TravelRequest');
var travelRequestDao = {
    findAll: findAll,
    create: create,
    findByRequestId: findByRequestId,
    deleteByRequestId: deleteByRequestId,
    updateTravelRequest: updateTravelRequest
}

function findAll() {
    return TravelRequest.findAll();
}

function findByRequestId(request_id) {
    return TravelRequest.findByPk(request_id);
}

function deleteByRequestId(request_id) {
    return TravelRequest.destroy({ where: { request_id: request_id} });
}

function create(travelRequest) {
    var newTravelRequest = new TravelRequest(travelRequest);
    return newTravelRequest.save();
}

function updateTravelRequest(travelRequest, request_id) {
    var updateTravelRequest = {
       cause_travel: travelRequest.cause_travel,
       source : travelRequest.source ,
        destination: travelRequest.destination,
        mode: travelRequest.status ,
        from_date: travelRequest.from_date ,
        to_date: travelRequest.to_date ,
        no_days: travelRequest.no_days,
        priority: travelRequest.priority ,
        project_id: travelRequest.project_id ,
        status: travelRequest.status       
    };
    return TravelRequest.update(updateTravelRequest, { where: { request_id: request_id} });
}
module.exports = travelRequestDao;