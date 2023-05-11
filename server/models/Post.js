import mongoose from 'mongoose';
import { IMAGE_REGEX } from '../utils/constants.js';

const PostSchema = new mongoose.Schema(
  {
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    description: { type: String },
    postImage: {
      type: String,
      validate: IMAGE_REGEX,
    },
    likes: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
        },
      ],
      default: [],
    },
    comments: {
      type: Array,
      default: [],
    },

  },
  { timestamps: true, versionKey: false },
);

const Post = mongoose.model('post', PostSchema);

export default Post;
