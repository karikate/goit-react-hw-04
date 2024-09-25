import { Field, Form, Formik } from "formik";
import s from "./SearchBar.module.css";
const SearchBar = ({ setQuery }) => {
  const initialValue = {
    query: "",
  };
  const handlerSubmit = (values) => {
    setQuery(values.query);
  };
  return (
    <div className={s.wrapper}>
      <header>
        <div className={s.form}>
          <Formik initialValues={initialValue} onSubmit={handlerSubmit}>
            <Form>
              <Field
                name="query"
                className={s.input}
                // type="text"
                // autoComplete="off"
                // autoFocus
                placeholder="Search images and photos"
              ></Field>
              <button type="submit">Search</button>
            </Form>
          </Formik>
        </div>
      </header>
    </div>
  );
};

export default SearchBar;
