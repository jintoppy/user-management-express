import { Schema, model } from 'mongoose';
import { IUser } from './User';

export interface IProfile {
    email: string;
    phone: string;
    user: IUser;
    contact?: string
}

const profileSchema = new Schema<IProfile>({
    email: {
        type: String,
        required: true,
        minlength: 10
    },
    phone: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const ProfileModel = model<IProfile>('Profile', profileSchema, 'profiles');

export default ProfileModel;