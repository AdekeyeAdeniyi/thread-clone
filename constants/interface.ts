interface SidebarValue {
  imgURL: string;
  route: string;
  label: string;
}

interface GroupValue {
  value: string;
  label: string;
  icon: string;
}

interface UserData {
  id?: string;
  objectId: string;
  username: string;
  name: string;
  bio: string;
  image: string;
}

interface UserParams {
  userId: string;
  username: string;
  name: string;
  bio: string;
  image: string;
  path: string;
}
interface ThreadParams {
  text: string;
  author: any;
  communityId: string | null;
  path: string;
}

interface ThreadProps {
  _id?: string;
  key: string;
  id: string;
  content: string;
  author: {
    name: string;
    image: string;
    id: string;
  };
  community: {
    id: string;
    name: string;
    image: string;
  } | null;
  createdAt: string;
  comments: {
    author: {
      image: string;
    };
  }[];
  isComment?: boolean;
}

interface CommentProps {
  threadId: string;
  currentUserImg: string;
  currentUserId: string;
}

interface ProfileProps {
  accountId: string;
  authUserId: string;
  name: string;
  username: string;
  imageUrl: string;
  bio: string;
  type?: 'User' | 'Community';
}
interface ThreadTabProps {
  currentUserId: string;
  accountId: string;
  accountType: string;
}

interface UserCardProps {
  key: string;
  id: string;
  name: string;
  username: string;
  imgUrl: string;
  personType: string;
}

interface CommunityProps {
  id: string;
  name: string;
  username: string;
  imgUrl: string;
  bio: string;
  members: {
    image: string;
  }[];
}

export type {
  SidebarValue,
  GroupValue,
  UserData,
  UserParams,
  ThreadParams,
  ThreadProps,
  CommentProps,
  ProfileProps,
  ThreadTabProps,
  UserCardProps,
  CommunityProps,
};
