import './_SingleArtist.scss';
import { DataContext } from "../../contexts/DataContext";
import { useContext } from 'react';

const SingleArtist = ({name}) => {
  const data = useContext(DataContext);
  const mainItem = data.data.mainItem;
  return (
    <div className="App">
      {data && <p>{name}</p>}
    </div>
  );
}

export default SingleArtist;
