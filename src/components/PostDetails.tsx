import { useEffect, useState } from "react";
import { useUsersIdApi } from "../hooks/useUserIdApi";
import { User, UsersPost } from "../types";

type PostDetailsProps = {
  posts: UsersPost[];
  setSelectedPost: (post: User) => void;
  openModal: () => void;
};

export default function PostDetails({
  posts,
  setSelectedPost,
  openModal
}: PostDetailsProps) {
  const { fetchUser, user } = useUsersIdApi();
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  useEffect(() => {
    if (selectedPostId !== null && user) {
      const post = posts.find((post) => post.id === selectedPostId);
      if (post) {
        const combinedData = { ...post, name: user.name };
        setSelectedPost(combinedData);
        openModal();
      }
    }
  }, [user, selectedPostId])

  const handleCardClick = async (id: number) => {
    setSelectedPostId(id);
    await fetchUser(id);
  };

  return (
      <div className="card-container">
        {posts.map((user: UsersPost) => (
          <div
            className="card"
            key={user.id}
            onClick={() => handleCardClick(user.id)}
          >
            <h2>{user.title}</h2>
            <p>{user.body}</p>
          </div>
        ))}
      </div>
  );
}
