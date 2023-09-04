import * as z from 'zod';

const ThreadValidation = z.object({
  thread: z.string().nonempty().min(3, { message: 'Minimun of 3 character' }),
  accountId: z.string(),
});

const CommentValidation = z.object({
  thread: z.string().nonempty().min(3, { message: 'Minimun of 3 character' }),
});

export { ThreadValidation, CommentValidation };
