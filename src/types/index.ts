export type UsersPost = {
  id: number;
  userId: number;
  body: string;
  title: string;
};

export type User = UsersPost & {
  name: string;
};
