interface Props {
  filterText:string,
  inStockOnly:boolean,
  onFilterTextChange:Function,
  onInStockOnlyChange:Function
}

const SearchBar = ({filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange}:Props) => {
  return (
    <form id="searchForm">
      <div className="mb-3">
        <label htmlFor="filterText" className="form-label">Search</label>
        <input type="text" className="form-control" id="filterText" value={filterText} placeholder="Search..." 
          onChange={(e) => onFilterTextChange(e.target.value)}/>
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="onlyinstore" checked={inStockOnly} 
          onChange={(e) => onInStockOnlyChange(e.target.checked)} />
        <label className="form-check-label mt-1" htmlFor="onlyinstore">Only show product in stock</label>
      </div>
    </form>
  );
}
export default SearchBar;