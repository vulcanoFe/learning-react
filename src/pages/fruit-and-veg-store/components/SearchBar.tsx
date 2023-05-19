const SearchBar = () => {
  return (
    <>
      <form>
        <input type="text" placeholder="Search..." />
        <label htmlFor="onlyinstore">
          <input id="onlyinstore" type="checkbox" />
          {' '}
          Only show product in stock
        </label>
      </form>
    </>
  );
}
export default SearchBar;