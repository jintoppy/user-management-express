import { Schema, model } from 'mongoose';
import { IProfile } from './Profile';
export interface IUser {
    name: string;
    industry: string;
    profile: IProfile;
    actor?: string;
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
//name: Salman Khan industry: Boolywood  actor: Salman Khan from Bollywood
userSchema.virtual('actor')
    .get(function(this: IUser){
        return this.name + ' from ' + this.industry;
    });
userSchema.set('toObject', { virtuals: true });
userSchema.set('toJSON', { virtuals: true });

const UserModel = model<IUser>('User', userSchema, 'users');

export default UserModel;