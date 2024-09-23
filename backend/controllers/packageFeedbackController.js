const Feedback = require('../models/packageFeedback');

//Get all Feedback Details
const getFeedbacks = (req, res, next) => {
    Feedback.find()
        .then(response => {
            res.json({ response })
        })
        .catch(error => {
            res.json({ error })
        });
};


const getSelectedFeedback = (req, res, next) => {
    const { pfID } = req.query; // Use query parameter to get specific Service data

    if (pfID) {
        // If pfID is provided, find the specific Service
        Feedback.findOne({ pfID: pfID })
            .then(response => {
                if (response) {
                    res.json({ response });
                } else {
                    res.status(404).json({ message: 'Feedback not found' });
                }
            })
            .catch(error => {
                console.error('Error fetching Service data:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            });
    } else {
        // If no pfID is provided, return all Service
        Feedback.find()
            .then(response => {
                res.json({ response });
            })
            .catch(error => {
                console.error('Error fetching Feedback data:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            });
    }
};
//Create new Feedback
const addFeedback = (req, res, next) => {
    const { pfID, cusName, cusEmail, pName, pfType, pfRate, pfNote, pfDate } = req.body;

    const feedback = new Feedback({
        pfID: pfID,
        cusName: cusName,
        cusEmail: cusEmail,
        pName: pName,
        pfType: pfType,
        pfRate: pfRate,
        pfNote: pfNote,
        pfDate: pfDate,
    });

    feedback.save()
        .then(response => {
            res.json({ response });
        })
        .catch(error => {
            console.error('Error adding Feedback:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
};

//Update existing Feedback Details
const updateFeedback = (req, res, next) => {
    const { pfID, cusName, cusEmail, pName, pfType, pfRate, pfNote, pfDate } = req.body;
    
    Feedback.updateOne({ pfID: pfID }, { $set: { cusName: cusName, cusEmail: cusEmail, pName: pName, pfType: pfType, pfRate: pfRate, pfNote:pfNote, pfDate:pfDate } })
        .then(response => {
            res.json({ response })
        })
        .catch(error => {
            res.json({ error })
        });
};

//Delete existing Feedback
const deleteFeedback = (req, res, next) => {
    const pfID = req.body.pfID;
    Feedback.deleteOne({pfID: pfID})
        .then(response => {
            res.json({ response })
        })
        .catch(error => {
            res.json({ error })
        });
};

//Getting Feedback max id for add next Feedback in the CRM system
const getMaxId = (req, res, next) => {
    Feedback.find({}, { pfID: 1 }).sort({ pfID: -1 }).limit(1)
      .then(response => {
        const maxId = response.length > 0 ? response[0].pfID : 0;
        res.json({ maxId }); 
      })
      .catch(error => {
        res.json({ error });
      });
  };
  

//Export all

exports.getFeedbacks = getFeedbacks;
exports.addFeedback = addFeedback;
exports.updateFeedback = updateFeedback;
exports.deleteFeedback = deleteFeedback;
exports.getMaxId = getMaxId;
exports.getSelectedFeedback = getSelectedFeedback;