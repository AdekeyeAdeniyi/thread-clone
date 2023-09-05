import PostThread from '@/components/forms/PostThread';
import { fetchUser } from '@/lib/actions/user.action';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

const page = async () => {
  const user = await currentUser();

  if (!user) return;

  const userInfo = await fetchUser(user.id);

  if (!userInfo?.onboarded) redirect('/onboarding');

  return (
    <>
      <h1 className="head-text">Create Thread</h1>

      <PostThread userId={JSON.stringify(userInfo._id)} />
    </>
  );
};

export default page;
