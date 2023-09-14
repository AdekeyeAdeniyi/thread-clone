import { ThreadTabProps } from '@/constants/interface';
import { fetchUserThreads } from '@/lib/actions/user.action';
import { redirect } from 'next/navigation';
import ThreadCard from '../cards/ThreadCard';
import { fetchCommunityPosts } from '@/lib/actions/community.actions';
import { isMatch } from '@/lib/utils';

const ThreadTab = async ({ accountId, accountType }: ThreadTabProps) => {
  let threads: any;

  if (accountType === 'Community') {
    threads = await fetchCommunityPosts(accountId);
  } else {
    threads = await fetchUserThreads(accountId);
  }

  if (!threads) redirect('/');

  return (
    <section className="mt-9 flex flex-col gap-10">
      {threads.threads.map((thread: any) => {
        const state = isMatch(thread.liked, accountId);
        return (
          <ThreadCard
            key={JSON.stringify(thread._id)}
            id={JSON.stringify(thread._id)}
            content={thread.text}
            author={
              accountType === 'User'
                ? {
                    id: threads.id,
                    name: threads.name,
                    image: threads.image,
                  }
                : {
                    id: thread.author.id,
                    name: thread.author.name,
                    image: thread.author.image,
                  }
            }
            community={thread.community}
            isLiked={state}
            createdAt={thread.createdAt}
            comments={thread.children}
          />
        );
      })}
    </section>
  );
};

export default ThreadTab;
