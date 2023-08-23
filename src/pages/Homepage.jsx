import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      Homepage
      <p>Welcome to COMPACT</p>
      <Link to="/app">Go to dashboard</Link>
    </div>
  );
}

export default Homepage;
