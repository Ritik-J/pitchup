import { Search } from "lucide-react";
import Form from "next/form";
import SearchFormReset from "@/components/SearchFormReset ";

const Searchbar = ({ query }: { query?: string }) => {
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="search Pitch"
      />

      <div className="flex gap-2">
        {query && <SearchFormReset />}

        <button type="submit" className="search-btn text-white">
          <Search className="size-5" />
        </button>
      </div>
    </Form>
  );
};

export default Searchbar;