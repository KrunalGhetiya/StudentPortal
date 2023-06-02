import mongoose, { model } from 'mongoose'
const { Schema } = mongoose

const subjectSchema = new Schema({
    department: {
        type: String,
        required: true
    },
    subjectCode: {
        type: String,
        required: true
    },
    subjectName: {
        type: String,
        required: true,
        trim: true
    },
    totalLectures: {
        type: Number,
        default:30
    },
    year: {
        type: String,
        required: true 
    },
    attendence: {
        type: Schema.Types.ObjectId,
        ref: 'attendence'
    }
})

export default model('subject', subjectSchema)




