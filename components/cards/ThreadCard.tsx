import { ThreadProps } from '@/constants/interface';

const ThreadCard = ({
  key,
  id,
  currentUserId,
  parentId,
  content,
  author,
  community,
  createdAt,
  comments,
}: ThreadProps) => {
  return (
    <article className="flex">
      <h2 className="text-small-regular text-light-2">{content}</h2>
    </article>
  );
};

export default ThreadCard;
