import { fetchCommunities } from '@/lib/actions/community.actions';
import React from 'react';
import UserCard from '../cards/UserCard';
import { currentUser } from '@clerk/nextjs';

const Rightsidebar = async () => {
  const suggestedCommunities = await fetchCommunities({ searchString: ' ' });
  const user = await currentUser();

  return (
    <section className="custom-scrollbar rightsidebar">
      <div className="flex flex-1 flex-col justify-start">
        <h3 className="text-heading4-medium text-light-1">
          Suggested Communities
        </h3>

        <div className="mt-7 flex w-[350px] flex-col gap-9">
          {suggestedCommunities.communities.length > 0 ? (
            <>
              {suggestedCommunities.communities.map((community) =>
                community.createdBy.id !== user?.id ? (
                  <UserCard
                    key={community.id}
                    id={community.id}
                    name={community.name}
                    username={community.username}
                    imgUrl={community.image}
                    personType="Community"
                  />
                ) : (
                  <p className="!text-base-regular text-light-3">
                    No communities yet
                  </p>
                )
              )}
            </>
          ) : (
            <p className="!text-base-regular text-light-3">
              No communities yet
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Rightsidebar;
