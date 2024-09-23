import s from "./SearchBar.module.css";
const SearchBar = () => {
  return (
    <div className={s.wrapper}>
      <header>
        <form className={s.form}>
          <input
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </form>
      </header>
    </div>
  );
};

export default SearchBar;
