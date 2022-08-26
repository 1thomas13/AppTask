import mongoose from './connection';
const { Schema } = mongoose;

const projectSchema = new Schema ({
    title: { type: String, require: true },
    description: { type: String, require: true },
    date: { type: Date, default: Date.now },
    collaborator: [
        {
            username: String,
            email: String,
            creator: {type: Boolean, default: false}
        }
    ]
});

export const Project = mongoose.model('Project', projectSchema);
