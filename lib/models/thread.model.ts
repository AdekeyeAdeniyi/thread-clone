import { Schema, model, models } from 'mongoose';

const threadScheme = new Schema({
  text: { type: String, required: true },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  community: {
    type: Schema.Types.ObjectId,
    ref: 'Community',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  parentId: {
    type: String,
  },
  children: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thread',
    },
  ],
  liked: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

const Thread = models.Thread || model('Thread', threadScheme);

export default Thread;
