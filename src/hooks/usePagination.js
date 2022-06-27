export const DOTS = "...";

function usePagination({currentPage,  totalCount,  pageSize}) {
  /*
    Rewrite the logic here to map out the pagination to be displayed

    !!!!!! ATTENTION !!!!!!
    Please replace this comment here with a description of this hook.
    
  */
  const numPages = Math.ceil(totalCount/pageSize);

  currentPage == 1 ? currentPage++ : "";//first page
  currentPage == numPages ? currentPage--: "";//last page

  const sibling = [
    1, 
    DOTS, 
    currentPage-1, 
    currentPage, 
    currentPage +1, 
    DOTS, 
    numPages
  ];
  
  currentPage <= 2 ? sibling.splice(0,2) : "";//first & second page
  currentPage >= numPages-1 ? sibling.splice(-2) : ""; //prelast & last page

  return sibling;
}

export default usePagination;