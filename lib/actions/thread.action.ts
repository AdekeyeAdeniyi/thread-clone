'use server';
import { Types } from 'mongoose';
import { ThreadParams } from '@/constants/interface';
import connectToDB from '../mongoose';
import Thread from '../models/thread.model';
import User from '../models/user.model';
import { revalidatePath } from 'next/cache';

const createThread = async ({
  text,
  author,
  communityId,
  path,
}: ThreadParams) => {
  try {
    connectToDB();

    const creatThread = await Thread.create({
      text,
      author,
      community: null,
    });

    // Update user model
    await User.findByIdAndUpdate(author, {
      $push: { threads: creatThread._id },
    });

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Error creating thread: ${error.message}`);
  }
};

const fetchThreads = async (pageNumber = 1, pageSize = 20) => {
  try {
    connectToDB();

    // Calculate the number of threads to skipp
    const skipAmount = (pageNumber - 1) * pageSize;

    // Fetching top-level threads
    const threadQuery = Thread.find({ parentId: { $in: [null, undefined] } })
      .sort({ createdAt: 'desc' })
      .skip(skipAmount)
      .limit(pageSize)
      .populate({ path: 'author', model: User })
      .populate({
        path: 'children',
        populate: {
          path: 'author',
          model: User,
          select: '_id, parentId, image',
        },
      });

    const totalThreadsCount = await Thread.countDocuments({
      parentId: { $in: [null, undefined] },
    });

    const threads = await threadQuery.exec();

    const isNext = totalThreadsCount > skipAmount + threads.length;

    return { threads, isNext };
  } catch (error: any) {
    throw new Error(
      `Error encounter while fetching thread(s): ${error.message}`
    );
  }
};

const fetchThreadsById = async (id: string) => {
  connectToDB();

  try {
    const thread = await Thread.findById(id)
      .populate({
        path: 'author',
        model: User,
        select: '_id id name image',
      })
      .populate({
        path: 'children',
        populate: [
          {
            path: 'author',
            model: User,
            select: '_id id name parentId image',
          },
          {
            path: 'children',
            model: Thread,
            populate: {
              path: 'author',
              model: User,
              select: '_id id name parentId image',
            },
          },
        ],
      })
      .exec();
    return thread;
  } catch (error: any) {
    throw new Error(`Error fetching thread: ${error.message}`);
  }
};

const addCommentToThread = async ({
  threadId,
  commentText,
  userId,
  path,
}: {
  threadId: string;
  commentText: string;
  userId: string;
  path: string;
}) => {
  connectToDB();
  try {
    // Find original thread by id
    const originalThread = await Thread.findById(threadId);

    if (!originalThread) throw new Error('Thread not found');

    // Create a new thread with comment text
    const commentThread = new Thread({
      text: commentText,
      author: userId,
      parentId: threadId,
    });

    const savedCommentThread = await commentThread.save();

    originalThread.children.push(savedCommentThread._id);

    await originalThread.save();

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Error adding comment to thread: ${error.message}`);
  }
};

export { createThread, fetchThreads, fetchThreadsById, addCommentToThread };
