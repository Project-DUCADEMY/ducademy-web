import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
const Redirect = ({to}) => {
    const navigate = useNavigate()
    useEffect(() => {
        navigate(to)
    }, [])
    return (
        <></>
    )
}
export default Redirect