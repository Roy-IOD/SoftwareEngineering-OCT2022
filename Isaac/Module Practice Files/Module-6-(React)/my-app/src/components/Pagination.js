function Pagination(props) {
      const prevPage = props.currentPage === 1 ? null : <button onClick={() => props.changePageHandler(props.currentPage - 1)}>Previous Page</button>;
   
       return (
          <div className="Pagination">
            {prevPage}
              <span className="current"> {props.currentPage} </span>
              <button onClick={() => props.changePageHandler(props.currentPage + 1)}>Next Page</button>
          </div>
       )
   }
   
   export default Pagination;