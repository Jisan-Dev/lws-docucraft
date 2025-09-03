import Link from "next/link";
import CircleArrowOutUpRight from "./icons/CircleArrowOutUpRight";

export default function SearchResults({ results, term, closeSearchResults }) {
  return (
    <div className="absolute left-0 top-12 z-[999] w-full rounded-md bg-white p-4 shadow-lg shadow-neutral-400 mx-2 dark:bg-zinc-900/90 lg:mx-10 lg:max-w-lg lg:flex-auto dark:text-white">
      <p className="text-sm">
        Showing results for
        <span className="ml-1.5 mb-2 font-semibold text-teal-400">{`"${term}"`}</span> :
      </p>
      <ul role="list" className="divide-y divide-gray-100 [&>*]:py-2">
        {results.map((result) => (
          <li key={result.id} className="flex items-center gap-2">
            <Link
              href={result?.parent ? `/docs/${result.parent}/${result.id}` : `/docs/${result.id}`}
              className="transition-all hover:text-teal-500 flex items-center gap-2 w-full"
              onClick={(e) => closeSearchResults(e)}>
              <CircleArrowOutUpRight />
              <p>{result.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
