let FirmModel = require('../Models/Firm');
const createFirm = (req, res) => {

    let db = new FirmModel(req.body);
    FirmModel.find({ email: req.body.email })
        .then((doc) => {
            if (doc.length > 0) {
                res.send("Email already exists");
            }
        })
        .catch(err => {

        })

    db.save()
        .then(doc => {
            res.send(doc)
        })
        .catch(err => {
            res.status(400).send(err)
        })
}


const getAllFirms = (req, res) => {
    FirmModel.find({})
    .populate("agents")
    .populate("adminUser")
    .populate("city")
    .exec((err, results) => {
        res.send(results);
    })
}

const updateFirm = (req, res) => {
    const { agents, ...bodyWithoutAgents } = req.body;
    FirmModel.findOneAndUpdate(
        {
            _id: req.body.id
        },
        agents ?
            {

                ...bodyWithoutAgents,
                $push: { agents: req.body.agents },
                

            }
            : req.body,


        {
            new: true
        }
    )
        .then(doc => res.send(doc))
        .catch(err => res.status(400).send(err))
}
module.exports = { createFirm, getAllFirms, updateFirm };
