import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import  {UserContext} from '../UserContext'


const ProtectedRoute = ({ children }:any) => {
    const token = localStorage.getItem("Authorization")

    if (!token) {
      return <Navigate to="/login" replace />;
    }
  
    return children;
  };

export default ProtectedRoute