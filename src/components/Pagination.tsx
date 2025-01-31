type PaginationProps = {
    page: number;
    setPage: (page: number) => void;
    hasPostData: boolean;
    searchValue: string;
}

export default function Pagination({ page, setPage, hasPostData, searchValue }: PaginationProps) {
  return (
    <div className="pagination">
        <button
          onClick={() => setPage(page > 1 ? page - 1 : 1)}
          disabled={page === 1 || searchValue !== ""}
          className="button"
        >
          Anterior
        </button>
        <button 
            onClick={() => setPage(page + 1)}
            className="button"
            disabled={!hasPostData || searchValue !== ""}
        >
            Siguiente
        </button>
      </div>
  )
}
