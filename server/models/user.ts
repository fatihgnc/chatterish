import * as mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, trim: true },
    password: { type: String, trim: true },
    birthdate: String,
    nationality: String,
});

export const User = mongoose.model('User', userSchema);
