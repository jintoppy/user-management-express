import { Schema, model } from 'mongoose';
import { IProfile } from './Profile';
export interface IUser {
    name: string;
    industry: string;
    profile: IProfile
}

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true,
        minlength: 10
    },
    industry: String,
    profile: {
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    }
});

const UserModel = model<IUser>('User', userSchema, 'users');

export default UserModel;