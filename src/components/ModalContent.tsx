import { User } from "../types";

type ModalContentProps = {
  post: User
  onClose: () => void;
};

export default function ModalContent({ post, onClose }: ModalContentProps) {
  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  return (
    <>
      <div className="modal-details" key={post.id} onClick={handleContentClick}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <p>Autor: <span>{post.name}</span></p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </>
  );
}
