import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import React, { useState } from "react";
import blogs from "../data/blogs.json";

const PAGE_SIZES = [15, 25, 50, 100];

function BlogList() {
  const [currentPage,setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const [recs, setRecs] = useState({'firstRecord':0,'lastRecord':15});

  const totalCount = blogs.posts.length;
  
  const currentPaginationData = 
            blogs.posts.slice(recs['firstRecord'], recs['lastRecord']);
 

  const updateRowsPerPage = (choosedSize) => {
    setCurrentPage(1);
    setRowsPerPage(+choosedSize);
    setRecs({'firstRecord':0,'lastRecord':choosedSize});
  };

  const updatePage = (pageNum) => {
    pageNum > 0 && pageNum <= Math.ceil(totalCount/rowsPerPage)
    ? setCurrentPage(pageNum) : "";
    setRecs({ 'firstRecord' : (pageNum - 1) * rowsPerPage, 
              'lastRecord' : (pageNum * rowsPerPage < totalCount)
                           ? pageNum * rowsPerPage : totalCount });
      
  };

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalCount={blogs.posts.length}
        pageSize={rowsPerPage}
        pageSizeOptions={PAGE_SIZES}
        onPageChange={updatePage}
        onPageSizeOptionChange={updateRowsPerPage}
      />
      <ul
        // Do not remove the aria-label below, it is used for Hatchways automation.
        aria-label="blog list"
      >
        {currentPaginationData.map((blog) => (
          <BlogPost
            key={blog.id}
            author={blog.author}
            title={blog.title}
            excerpt={blog.excerpt}
            featureImage={blog.image}
          />
        ))}
      </ul>
    </div>
  );
}

export default BlogList;