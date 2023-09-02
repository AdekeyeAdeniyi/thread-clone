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

export type { SidebarValue, GroupValue, UserData };
