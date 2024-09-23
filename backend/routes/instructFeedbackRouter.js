const express = require('express');
const router = express.Router();
const controller = require('../controllers/instructFeedbackController');

//Create router links
router.get('/instruct-feedbacks', controller.getFeedbacks);
router.get('/selected-instruct-feedback', controller.getSelectedFeedback);
router.post('/create-instruct-feedback', controller.addFeedback);
router.post('/update-instruct-feedback', controller.updateFeedback);
router.post('/delete-instruct-feedback', controller.deleteFeedback);
router.get('/get-instruct-feedbacks-maxid', controller.getMaxId);



module.exports = router;