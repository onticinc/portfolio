// Pagination Component
import React from "react";

export default function Pagination({ totalPages, currentPage, onPageChange }) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex items-center justify-between px-4 sm:px-0">
      <div className="-mt-px flex w-0 flex-1">
        <a
          href="#"
          className={`inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium ${
            currentPage === 1
              ? "text-gray-300 cursor-not-allowed"
              : "text-indigo-500 hover:text-indigo-700 dark:text-orange-500 dark:hover:text-orange-700"
          }`}
          onClick={(e) => {
            e.preventDefault();
            if (currentPage > 1) onPageChange(currentPage - 1);
          }}
        >
          Previous
        </a>
      </div>
      <div className="hidden md:-mt-px md:flex">
        {pageNumbers.map((pageNumber) => (
          <a
            key={pageNumber}
            href="#"
            className={`inline-flex items-center border-b-2 p-3 ${
              currentPage === pageNumber
                ? "dark:border-orange-500 dark:text-orange-600 text-indigo-500 border-indigo-500"
                : "border-transparent text-indigo-500 hover:text-indigo-700 dark:text-orange-400 dark:hover:text-orange-700"
            } px-4 pt-4 text-sm font-medium`}
            onClick={(e) => {
              e.preventDefault();
              onPageChange(pageNumber);
            }}
            aria-current={currentPage === pageNumber ? "page" : undefined}
          >
            {pageNumber}
          </a>
        ))}
      </div>
      <div className="-mt-px flex w-0 flex-1 justify-end">
        <a
          href="#"
          className={`inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium ${
            currentPage === totalPages
              ? "text-gray-300 cursor-not-allowed"
              : "text-indigo-500 hover:text-indigo-600 dark:text-orange-500 dark:hover:text-orange-700"
          }`}
          onClick={(e) => {
            e.preventDefault();
            if (currentPage < totalPages) onPageChange(currentPage + 1);
          }}
        >
          Next
        </a>
      </div>
    </nav>
  );
}
