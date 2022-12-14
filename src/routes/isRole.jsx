import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const isRole = (props) => {
    const { setIsLoading, user } = useContext(AuthContext)
    console.log(user.role);
    if (user.role === 'Gallerist') {
        return props.children;
    } else {
        return <Navigate to='/auth/login' />
    }
}

export default isRole