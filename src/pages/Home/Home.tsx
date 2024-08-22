import { useLocation, useNavigate } from "react-router";
import { doSignOut } from "../../firebaseAuth/auth";
import "./Home.css";
const Home = () => {
  const navigate = useNavigate(); // Initialize navigate
  const { email, password } = useLocation().state;
  return (
    <div style={{ color: "black" }}>
      <h1>
        Hello {email} {password}
      </h1>
      <button
        onClick={() => {
          doSignOut();
          navigate("/");
        }}
      >
        Sign Out
      </button>
    </div>
  );
};

export default Home;
