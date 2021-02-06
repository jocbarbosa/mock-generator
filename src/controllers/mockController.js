const Mock = require('../models/Mock');

const createMock = async (req, res) => {

    const { returnHeaders, returnBody, returnStatus } = req.body;

    try {
        const mock = await Mock.create({
            returnHeaders,
            returnBody,
            returnStatus
        });

        return res.json({
            mock: mock,
            url: `${process.env.APP_HOST}/${mock._id}`
        });
    } catch (err) {
        return res.status(500).json({ message: err })
    }
}

const getMock = async (req, res) => {
    const mockId = req.params.mockId;

    try {
        const mock = await Mock.findById(mockId);
    } catch (err) {
        res.status(500).json({
            message: err
        })
    }
}

module.exports = {
    getMock,
    createMock
}