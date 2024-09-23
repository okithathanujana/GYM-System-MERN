const Feedback = require('../models/instructFeedback');

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
    const { ifID } = req.query; // Use query parameter to get specific Service data

    if (ifID) {
        // If ifID is provided, find the specific Service
        Feedback.findOne({ ifID: ifID })
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
        // If no ifID is provided, return all Service
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
    const { ifID, cusName, cusEmail, iName, ifType, ifRate, ifNote, ifDate } = req.body;

    const feedback = new Feedback({
        ifID: ifID,
        cusName: cusName,
        cusEmail: cusEmail,
        iName: iName,
        ifType: ifType,
        ifRate: ifRate,
        ifNote: ifNote,
        ifDate: ifDate,
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
    const { ifID, cusName, cusEmail, iName, ifType, ifRate, ifNote, ifDate } = req.body;
    
    Feedback.updateOne({ ifID: ifID }, { $set: { cusName: cusName, cusEmail: cusEmail, iName: iName, ifType: ifType, ifRate: ifRate, ifNote:ifNote, ifDate:ifDate } })
        .then(response => {
            res.json({ response })
        })
        .catch(error => {
            res.json({ error })
        });
};

//Delete existing Feedback
const deleteFeedback = (req, res, next) => {
    const ifID = req.body.ifID;
    Feedback.deleteOne({ifID: ifID})
        .then(response => {
            res.json({ response })
        })
        .catch(error => {
            res.json({ error })
        });
};

//Getting Feedback max id for add next Feedback in the CRM system
const getMaxId = (req, res, next) => {
    Feedback.find({}, { ifID: 1 }).sort({ ifID: -1 }).limit(1)
      .then(response => {
        const maxId = response.length > 0 ? response[0].ifID : 0;
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