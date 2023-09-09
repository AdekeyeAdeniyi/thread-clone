import { ThreadProps, ThreadTabProps } from '@/constants/interface';
import { fetchUserThreads } from '@/lib/actions/user.action';
import { redirect } from 'next/navigation';
import ThreadCard from '../cards/ThreadCard';

const ThreadTab = async ({
  currentUserId,
  accountId,
  accountType,
}: ThreadTabProps) => {
  const threads = await fetchUserThreads(currentUserId);

  if (!threads) redirect('/');

  return (
    <section className="mt-9 flex flex-col gap-10">
      {threads.threads.map((thread: any) => {
        return (
          <ThreadCard
            key={thread._id}
            id={thread.id}
            currentUserId={currentUserId}
            parentId={thread.parentId}
            content={thread.text}
            author={
              accountType === 'User'
                ? {
                    id: threads.id,
                    name: threads.name,
                    image: threads.image,
                  }
                : {
                    id: threads.author.id,
                    name: threads.author.name,
                    image: threads.author.image,
                  }
            }
            community={thread.community}
            createdAt={thread.createdAt}
            comments={thread.children}
          />
        );
      })}
    </section>
  );
};

export default ThreadTab;
