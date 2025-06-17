
const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true,'Title is required'],
        trim: true,
    },
    description: {
        type: String,
        required: [true,'Description is required'],
    },
    difficulty: {
        type: String,
        enum: ['Easy', 'Medium', 'Hard'],
        required: true,
        default: 'Easy',
    },
    testCases: [
        {
            input: {
                type: String,
                required: true,
            },
            output: {
                type: String,
                required: true,
            },
        },
    ],
    editorial : {
        type : String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Problem = mongoose.model('Problem', problemSchema);

module.exports = Problem;
