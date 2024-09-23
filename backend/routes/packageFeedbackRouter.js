const express = require('express');
const router = express.Router();
const controller = require('../controllers/packageFeedbackController');

//Create router links
router.get('/package-feedbacks', controller.getFeedbacks);
router.get('/selected-package-feedbacks', controller.getSelectedFeedback);
router.post('/create-package-feedbacks', controller.addFeedback);
router.post('/update-package-feedbacks', controller.updateFeedback);
router.post('/delete-package-feedbacks', controller.deleteFeedback);
router.get('/get-package-feedbacks-maxid', controller.getMaxId);



module.exports = router;