const Search = ({
  search,
  setSearch,
  searchForWeather,
}: {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  searchForWeather: () => void;
}) => {
  return (
    <>
      <input
        className="input input-bordered text-white opacity-100 mb-1"
        placeholder="Ex: 35 W Wacker Dr, Chicago, IL 60601"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="btn"
        onClick={() => {
          searchForWeather();
          setSearch("");
        }}
      >
        Search
      </button>
    </>
  );
};

export default Search;
