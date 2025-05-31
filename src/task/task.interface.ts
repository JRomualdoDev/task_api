
import { Document } from 'mongoose';

export interface Task extends Document {
    readonly nome: string;
    readonly inicio: Date;
    readonly fim: Date;
    readonly tag: String;
    readonly totalTime: Number;
}

