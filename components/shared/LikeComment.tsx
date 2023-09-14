'use client';
import { LikeThreadProps } from '@/constants/interface';
import { useUser } from '@clerk/nextjs';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { use, useState } from 'react';

const LikeThread = ({ likeState, onLikeState }: LikeThreadProps) => {
  const [like, setLike] = useState(likeState);
  const pathname = usePathname();
  const { user } = useUser();

  return (
    <button
      onClick={() => {
        user && setLike((prev) => !prev);
        user && onLikeState(likeState, pathname);
      }}
    >
      <Image
        src={`${like ? `/assets/heart-filled.svg` : `/assets/heart-gray.svg`}`}
        alt="heart"
        width={24}
        height={24}
        className="cursor-pointer object-contain"
      />
    </button>
  );
};

export default LikeThread;
