const express = require('express');
const router = express.Router();
const controller = require('../controllers/instructFeedbackController');

//Create router links
router.get('/instruct-feedbacks', controller.getFeedbacks);
router.get('/selected-instruct-feedbacks', controller.getSelectedFeedback);
router.post('/create-instruct-feedbacks', controller.addFeedback);
router.post('/update-instruct-feedbacks', controller.updateFeedback);
router.post('/delete-instruct-feedbacks', controller.deleteFeedback);
router.get('/get-instruct-feedbacks-maxid', controller.getMaxId);



module.exports = router;