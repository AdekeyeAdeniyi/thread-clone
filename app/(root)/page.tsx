import ThreadCard from '@/components/cards/ThreadCard';
import { fetchThreads } from '@/lib/actions/thread.action';
import { UserButton, currentUser } from '@clerk/nextjs';
import Image from 'next/image';

const Home = async () => {
  const threadsData = await fetchThreads(1, 30);
  const threads = threadsData.threads;
  const user = await currentUser();

  return (
    <>
      <h1 className="head-text text-left">Home</h1>

      <section className="mt-9 flex flex-col gap-10">
        {threads.length == 0 ? (
          <p className="no-result">No threads found</p>
        ) : (
          <>
            {threads.map((thread) => {
              return (
                <ThreadCard
                  key={JSON.stringify(thread._id)}
                  id={thread.id}
                  currentUserId={user?.id}
                  parentId={thread.parentId}
                  content={thread.text}
                  author={thread.author}
                  community={thread.community}
                  createdAt={thread.createdAt}
                  comments={thread.children}
                />
              );
            })}
          </>
        )}
      </section>
    </>
  );
};

export default Home;
