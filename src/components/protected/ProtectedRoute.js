
import { Navigate } from "react-router-dom";
import { auth } from "../../firebase";

const ProtectedRoute = ({children}) => {
    console.log("USER", auth.currentUser);
    if (auth.currentUser?.email !== "admin@gmail.com") {
        return <Navigate to="/login" replace />
    }

    return children;
}

export default ProtectedRoute