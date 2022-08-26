import mongoose from './connection';
const { Schema } = mongoose;

const taskSchema = new Schema({
    tittle: {String, require: true},
    decription: {String, require: true},
    date: { Date, default: Date.now },
    priority: {String, require:true},
    state: {String, require: true},
    creator: {type: mongoose.Types.ObjectId, require: true},
    madeBy: {type: mongoose.Types.ObjectId},
    comment: [
        {
            user: {type: mongoose.Types.ObjectId},
            msg: {String},
            date: { Date, default: Date.now },
        }
    ],
    project: {type: mongoose.Types.ObjectId}
});

export const Task = mongoose.model('task', taskSchema);


