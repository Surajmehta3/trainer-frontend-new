// import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// import Dashboard from "../Dashboard/Dashboard";

function Home() {
  const navigate = useNavigate();
  // const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const url = "https://trainer-portal.surajmehta6.repl.co/authenticate";
    const authenticate = async () => {
      const res = await fetch(url, {
        method: "GET",
        credentials: "include",
      });

      if (res.status === 404 && !res.ok) {
        navigate("/login");
      } else if (res.status === 200 && res.ok) {
        // setIsLoggedIn(true);
        navigate("/Dashboard");
      }
    };
    authenticate();
  }, []);

  return (
    <>
     
    </>
  )
}

export default Home;
