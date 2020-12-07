const catchAsync = require('../utils/catchAsync');

exports.createOne = (Model) =>
    catchAsync(async (req, res, next) => {
        // Call the 'create' method on the model using async await. 'req.body' is the data we want to pass to the database.
        console.log(req.body);
        const doc = await Model.create(req.body);
        // 201 code means 'written'
        res.status(201).json({
            status: 'success',
            data: {
                data: doc
            }
        });
    });