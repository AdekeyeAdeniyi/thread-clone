import { currentUser } from '@clerk/nextjs';
import Image from 'next/image';
import { communityTabs } from '@/constants';
import ProfileHeader from '@/components/shared/ProfileHeader';
import ThreadTab from '@/components/shared/ThreadTab';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { fetchCommunityDetails } from '@/lib/actions/community.actions';
import UserCard from '@/components/cards/UserCard';
import Thread from '@/lib/models/thread.model';

const Page = async ({ params }: { params: { id: string } }) => {
  const user = await currentUser();

  if (!user) return;

  const communityInfo = await fetchCommunityDetails(params.id);
  return (
    <section>
      <ProfileHeader
        accountId={communityInfo.id}
        authUserId={user.id}
        name={communityInfo.name}
        username={communityInfo.username}
        imageUrl={communityInfo.image}
        bio={communityInfo.bio}
        type="Community"
      />

      <div className="mt-9">
        <Tabs defaultValue="threads" className="w-full">
          <TabsList className="tab">
            {communityTabs.map((tab) => {
              return (
                <TabsTrigger key={tab.label} value={tab.value} className="tab">
                  <Image
                    src={tab.icon}
                    alt={tab.label}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                  <p className="max-sm:hidden">{tab.label}</p>
                  {tab.label === 'Threads' && (
                    <p className="ml-1 rounded-sm bg-light-4 px-2 py-1 !text-tiny-medium text-light-2">
                      {communityInfo?.threads?.length}
                    </p>
                  )}
                </TabsTrigger>
              );
            })}
          </TabsList>

          <TabsContent value="threads" className="w-full text-light-1">
            <ThreadTab
              currentUserId={user.id}
              accountId={communityInfo._id}
              accountType="Community"
            />
          </TabsContent>
          <TabsContent value="members" className="w-full text-light-1">
            <section className="mt-9 flex flex-col gap-10">
              {communityInfo?.members?.map((member: any) => {
                return (
                  <UserCard
                    key={member.id}
                    id={member.id}
                    name={member.name}
                    username={member.username}
                    imgUrl={member.image}
                    personType="User"
                  />
                );
              })}
            </section>
          </TabsContent>
          <TabsContent
            value="request"
            className="w-full text-light-1"
          ></TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Page;
