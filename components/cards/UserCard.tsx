'use client';
import { UserCardProps } from '@/constants/interface';
import Image from 'next/image';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

const UserCard = ({
  key,
  id,
  name,
  username,
  imgUrl,
  personType,
}: UserCardProps) => {
  const router = useRouter();
  return (
    <article key={key} className="user-card">
      <div className="user-card_avatar">
        <div className="relative h-14 w-14 object-cover">
          <Image
            src={imgUrl}
            alt="Profile image"
            fill
            className="rounded-full object-cover"
          />
        </div>

        <div className="flex-1 text-ellipsis">
          <h4 className="text-base-semibold text-light-1">{name}</h4>
          <p className="text-small-medium text-gray-1">{username}</p>
        </div>
      </div>

      <Button
        className="user-card_btn"
        onClick={
          personType == 'Community'
            ? () => router.push(`communities/${id}`)
            : () => router.push(`profile/${id}`)
        }
      >
        View
      </Button>
    </article>
  );
};

export default UserCard;
