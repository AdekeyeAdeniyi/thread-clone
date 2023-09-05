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
  key: string;
  id: string;
  currentUserId?: string;
  parentId: string | null;
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
};
