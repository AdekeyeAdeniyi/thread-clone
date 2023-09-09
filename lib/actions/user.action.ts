'use server';

import { revalidatePath } from 'next/cache';
import User from '../models/user.model';
import connectToDB from '../mongoose';
import { UserParams } from '@/constants/interface';
import Thread from '../models/thread.model';

const updateUser = async ({
  userId,
  username,
  name,
  bio,
  image,
  path,
}: UserParams): Promise<void> => {
  connectToDB();

  try {
    await User.findOneAndUpdate(
      { id: userId },
      {
        username: username.toLowerCase(),
        name,
        bio,
        image,
        onboarded: true,
      },
      { upsert: true }
    );

    if (path === '/profile/edit') {
      revalidatePath(path);
    }
  } catch (error: any) {
    throw new Error(`Failed to create/update user: ${error.message}`);
  }
};

const fetchUser = async (userId: string) => {
  try {
    connectToDB();
    return await User.findOne({ author: userId });
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
};

const fetchUserThreads = async (userId: string) => {
  try {
    connectToDB();

    const threads = await User.findOne({ id: userId }).populate({
      path: 'threads',
      model: Thread,
      populate: {
        path: 'children',
        model: Thread,
        populate: {
          path: 'author',
          model: User,
          select: 'name image id',
        },
      },
    });

    return threads;
  } catch (error: any) {
    throw new Error('Failed to fetch thread created by user');
  }
};

export { updateUser, fetchUser, fetchUserThreads };
