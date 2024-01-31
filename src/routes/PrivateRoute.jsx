import {useContext} from "react";
import {AuthContext} from "../Providers/AuthProvider";
import {Navigate, useLocation} from "react-router";
import {Spinner} from "react-bootstrap";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const location = useLocation();
  console.log("user in private route", user);

  if (loading) {
    return <Spinner animation="border" variant="primary" />;
  }

  if (user) {
    return children;
  }
  return <Navigate state={{from: location}} to="/login" replace></Navigate>;
};

export default PrivateRoute;
