const mongoose = require("mongoose");
const { USER_ROLES } = require('../helper/Constants');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: true
    },
    isEmailVerified: {
        type: Date,
        default: null,
    },
    number: {
        type: String,
        trim: true,
        default: null
        // Add validation for phone number format if needed
    },
    isNumberVerified: {
        type: Date,
        default: null,
    },
    password: {
        type: String,
        required: true,
    },
    userType: {
        type: String,
        enum: USER_ROLES, // Using roles from the helper file
        default: USER_ROLES[0], // Default role as 'User'
        required: true
    },
    accountNumber: {
        type: String,
        required: true,
        unique: true,
    },
    language: {
        type: String,
        required: true,
        default: 'en', // Default language is English
    },
    otp: {
        type: Number,
        default: null
    },
    status: {
        type: Boolean,
        default: true,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
    isOnline: {
        type: Boolean,
        default: false,
    },
    profile: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' },
    token: {
        type: String,
    },
    projects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    }],
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }]
}, { timestamps: true });


module.exports = mongoose.model("User", UserSchema);
