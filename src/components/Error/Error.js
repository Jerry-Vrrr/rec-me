import './_Error.scss';
import { Link } from 'react-router-dom';

const Error = ({error}) => {
  return (
    <section className="error-container">
      <h2>Whoops! Looks like you Rec'D Me...</h2>
      {error && `Whoops! Something went wrong: ${error}`}
      <Link to="/">
        <button className='button-62' >Back to Home</button>      
      </Link>
    </section>
  );
}

export default Error;
