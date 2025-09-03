"use client";

import { useDebounce } from "@/hooks/useDebounce";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SearchResults from "./SearchResults";

const Search = ({ docs }) => {
  const [searchResult, setSearchResult] = useState([]);
  const [term, setTerm] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    const value = e.target.value;
    setTerm(value);
    doSearch(value);
  };

  const doSearch = useDebounce((term) => {
    const found = docs.filter(
      (doc) =>
        doc.title.toLowerCase().includes(term.toLowerCase()) ||
        doc.contentHtml.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResult(found);
  }, 500);

  const closeSearchResults = (e) => {
    setTerm("");
    setSearchResult([]);
    router.push(e.target.href);
  };

  return (
    <>
      <div className="lg:block lg:max-w-full lg:flex-auto">
        <button
          type="button"
          className="focus:[&amp;:not(:focus-visible)]:outline-none hidden w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-800 dark:hover:ring-zinc-900/40 lg:flex">
          <Image src="/search.svg" alt="Search" className="h-5 w-5" width={50} height={50} />
          <input
            type="text"
            value={term}
            placeholder="Search..."
            onChange={handleChange}
            className="flex-1 focus:border-none focus:outline-none h-8"
          />
        </button>
      </div>
      {term && term.trim().length > 0 && (
        <SearchResults results={searchResult} term={term} closeSearchResults={closeSearchResults} />
      )}
    </>
  );
};

export default Search;
