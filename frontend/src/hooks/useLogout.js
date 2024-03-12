import { useCookies } from "react-cookie"; // to check if we have user logged in 
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from '../redux/slices/userSlice';

export const useLogout = () => {
    const [cookies, setCookies] = useCookies(['access_token']);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const logout = () => {
        // set the cookie to be empty
        setCookies('access_token', "");
        // remove the userId from local storage
        localStorage.removeItem('userID');
        // Update the global state (user)
        dispatch(logoutUser());
        // Navigate to login page
        navigate('/login');
    };

    return { logout };

};