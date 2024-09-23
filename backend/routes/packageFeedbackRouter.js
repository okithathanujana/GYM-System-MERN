const express = require('express');
const router = express.Router();
const controller = require('../controllers/packageFeedbackController');

//Create router links
router.get('/package-feedbacks', controller.getFeedbacks);
router.get('/selected-package-feedback', controller.getSelectedFeedback);
router.post('/create-package-feedback', controller.addFeedback);
router.post('/update-package-feedback', controller.updateFeedback);
router.post('/delete-package-feedback', controller.deleteFeedback);
router.get('/get-package-feedbacks-maxid', controller.getMaxId);



module.exports = router;