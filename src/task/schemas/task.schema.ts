
import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
    nome: { type: String, unique: true },
    inicio: Date,
    fim: Date,
    tag: String,
    totalTime: Number
});
