import mongoose from 'mongoose'

const Schema = mongoose.Schema

const amiiboSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    game: {
        type: String,
        required: false
    },
    image: {
        type: Object,
        required: false
    },
    id: {
        type: String,
        required: true
    },
    release: {
        type: String,
        required: false
    }
})

export const Amiibo = mongoose.model('Amiibo', amiiboSchema)