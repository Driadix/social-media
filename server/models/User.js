import mongoose from 'mongoose';
import { URL_REGEX, EMAIL_REGEXP } from '../utils/constants.js';

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: [2, 'Длина поля должна составлять минимум 2 символа, получена строка {VALUE}'],
      maxlength: [30, 'Длина поля должна составлять максимум 30 символов, получена строка {VALUE}'],
    },
    lastName: {
      type: String,
      required: true,
      minlength: [2, 'Длина поля должна составлять минимум 2 символа, получена строка {VALUE}'],
      maxlength: [30, 'Длина поля должна составлять максимум 30 символов, получена строка {VALUE}'],
    },
    email: {
      type: String,
      required: true,
      maxlength: [30, 'Длина поля должна составлять максимум 30 символов, получена строка {VALUE}'],
      unique: true,
      validate: EMAIL_REGEXP,
    },
    password: {
      type: String,
      required: true,
      minlength: [3, 'Длина поля должна составлять минимум 2 символа, получена строка {VALUE}'],
      select: false,
    },
    imageLink: {
      type: String,
      required: true,
      default: '',
      validate: URL_REGEX,
    },
    friendsList: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId, ref: 'user',
        },
      ],
      default: [],
    },
    address: {
      type: String,
    },
    job: {
      type: String,
    },
    profileViews: {
      type: Number,
      default: 0,
    },
    totalLikes: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true, versionKey: false },
);

const User = mongoose.model('user', UserSchema);

export default User;
