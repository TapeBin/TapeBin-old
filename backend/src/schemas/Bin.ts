import mongoose from "mongoose";

const bin = new mongoose.Schema({
    binId: {
        unique: true,
        required: true,
        type: String
    },

    createdAt: {
        required: true,
        type: Date
    },

    ownerId: {
        required: false,
        type: String
    },

    title: {
        required: false,
        type: String
    },

    description: {
        required: false,
        type: String
    },

    languageExtension: {
        required: true,
        type: String
    },

    languageId: {
        required: true,
        type: Number
    },

    fileName: {
        required: false,
        type: [String]
    },

    text: {
        required: true,
        type: [String]
    }

});

export default mongoose.model("Bin", bin);