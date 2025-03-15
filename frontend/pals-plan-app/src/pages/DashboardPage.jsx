import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DashboardPage = () => {
  const { hangoutId } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState(null);

  useEffect(() => {
    // Get the user's name from cookies
    const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
      const [key, value] = cookie.split("=");
      acc[key] = value;
      return acc;
    }, {});

    if (cookies[`hangout_${hangoutId}_user`]) {
      console.log("no redirecting")
      setName(cookies[`hangout_${hangoutId}_user`]);
    } else {
      console.log("redirecting")
      navigate(`/dashboard/${hangoutId}/login`); // Redirect to login if no name found
    }
  }, [hangoutId, navigate]);

  return <h1>Welcome {name} to Hangout {hangoutId}</h1>;
};

export default DashboardPage;
