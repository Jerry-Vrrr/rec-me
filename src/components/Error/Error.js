import "./_Error.scss";
import { Link } from "react-router-dom";

const Error = ({ error }) => {
  return (
    <section className="error-container">
      <h2>Whoops! Looks like you Rec'D Me...</h2>
      {error && `Whoops! Something went wrong: ${error}`}
      <Link to="/">
        <button className="error-button">
          <span class="text">Back to Main</span>
        </button>
      </Link>
    </section>
  );
};

export default Error;
