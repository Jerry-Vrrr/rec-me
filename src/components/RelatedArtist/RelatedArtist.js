import './_RelatedArtist.scss';

const RelatedArtists = ({name, id}) => {
  return (
    <div className="related-item" id={id}>
      <h2>{name}</h2>
    </div>
  );
}

export default RelatedArtists;
