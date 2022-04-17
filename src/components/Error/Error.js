import './_Error.scss';
import { Link } from 'react-router-dom';


const Error = ({error}) => {
  return (
    <section className="error-container">
      <h2>Whoops! Something went wrong.</h2>
      {error && `Whoops! Something went wrong: ${error}`}
      <Link to="/">
        <button>Back to Home</button>      
      </Link>
    </section>
  );
}

export default Error;
