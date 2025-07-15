import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear(); // remove token and userId
    navigate("/login");
  }, []);

  return null;
};

export default Logout;
