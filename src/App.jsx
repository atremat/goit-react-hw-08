import "modern-normalize";
import "./App.css";
import { Route, Routes } from "react-router-dom";
// import { PiUserSquareFill } from "react-icons/pi";
// import ContactForm from "./components/ContactForm/ContactForm";
// import SearchBox from "./components/SearchBox/SearchBox";
// import ContactList from "./components/ContactList/ContactList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { selectError, selectLoading } from "./redux/contacts/selectors";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import HomePage from "./pages/HomePage/HomePage";
import { Layout } from "./components/Layout/Layout";
import { RestrictedRoute } from "./components/RestrictedRoute/RestrictedRoute";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import ContactsPage from "./pages/ContactsPage/ContactsPage";

const App = () => {
  //to /
  // const isLoading = useSelector(selectLoading);
  // const error = useSelector(selectError);

  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegistrationPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Routes>
    </Layout>
  );
};

export default App;
