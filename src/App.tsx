import { useEffect, useMemo, useState } from "react";
import PostDetails from "./components/PostDetails";
import { usePostApi } from "./hooks/usePostApi";
import Pagination from "./components/Pagination";
import { User } from "./types";
import Modal from "./components/Modal";
import ModalContent from "./components/ModalContent";

function App() {
  const { posts, fetchPost } = usePostApi();
  const [page, setPage] = useState<number>(1);
  const [selectedPost, setSelectedPost] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    fetchPost(page);
  }, [page]);

  const hasPostData = useMemo(() => posts.length > 0, [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post: User) =>
      post.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [posts, searchValue]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  return (
    <>
      <div className="container">
        <input
          type="text"
          alt="Buscador de posts por titulo"
          className="search"
          placeholder="Buscar por título..."
          value={searchValue}
          onChange={handleSearch}
        />

        {hasPostData ? (
          <PostDetails
            posts={filteredPosts}
            setSelectedPost={setSelectedPost}
            openModal={openModal}
          />
        ) : (
          <p>No hay más usuarios disponibles</p>
        )}
      </div>

      <Pagination page={page} setPage={setPage} hasPostData={hasPostData} searchValue={searchValue} />

      <div className="modal-container">
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          {selectedPost && (
            <ModalContent post={selectedPost} onClose={closeModal} />
          )}
        </Modal>
      </div>
    </>
  );
}

export default App;
