import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import React, {useState} from "react";
import blogs from "../data/blogs.json";

const PAGE_SIZES = [15, 25, 50, 100];

function BlogList() {
  const [firstBlogID, setFirstBlogID] = useState(0);
  const [lastBlogID, setLastBlogID] = useState(15);
  const currentPaginationData = blogs.posts.slice(firstBlogID, lastBlogID);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(15);

  const updateRowsPerPage = (pageSize) => {
    setPageSize(parseInt(pageSize))
    setLastBlogID(pageSize)
    setFirstBlogID(0)
    setCurrentPage(1)
  };
  const updatePage = (currentPage) => { 
    var lastIDUpdater = currentPage*pageSize;
    var firstIDUpdater = lastIDUpdater-pageSize;
    setPageRangeVals(currentPage,lastIDUpdater,firstIDUpdater)
  };

  const setPageRangeVals = (currentPage,lastIDUpdater,firstIDUpdater) => {
    setCurrentPage(currentPage)
    setLastBlogID(lastIDUpdater)
    setFirstBlogID(firstIDUpdater)
  };

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalCount={blogs.posts.length}
        pageSize={pageSize}
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
