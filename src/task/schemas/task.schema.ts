
import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
    nome: String,
    inicio: Date,
    fim: Date,
    tag: String,
    totalTime: Number
});
