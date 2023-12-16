const Pagination = ({
  totalPost,
  postPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((page, index) => (
        <span
          key={index}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setCurrentPage(page);
          }}
          className={`py-1 px-3 rounded font-bold cursor-pointer  mx-2 ${
            page === currentPage
              ? "border-black border-2 bg-black text-white"
              : "border "
          }`}
        >
          <a className="text-gray-500 hover:text-gray-800">{page}</a>
        </span>
      ))}
    </div>
  );
};

export default Pagination;
