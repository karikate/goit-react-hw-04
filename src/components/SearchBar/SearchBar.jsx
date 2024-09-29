import { Field, Form, Formik } from "formik";
import s from "./SearchBar.module.css";
import { IoIosSearch } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ setQuery }) => {
  const initialValue = {
    query: "",
  };
  const handlerSubmit = (values) => {
    if (!values.query) {
      toast("Please enter text to search for an image");
    }
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
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
              ></Field>
              <button type="submit" className={s.icon}>
                <Toaster
                  position="top-right"
                  toastOptions={{
                    style: {
                      border: "1px solid #713200",
                      padding: "16px",
                      color: "#713200",
                    },
                  }}
                />

                <IoIosSearch />
              </button>
            </Form>
          </Formik>
        </div>
      </header>
    </div>
  );
};

export default SearchBar;
