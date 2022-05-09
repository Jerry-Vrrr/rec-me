import "./_SingleArtist.scss";
import { DataContext } from "../../contexts/DataContext";
import { useContext, useEffect } from "react";
import RelatedArtist from "../RelatedArtist/RelatedArtist";
import { Link, useHistory } from "react-router-dom";

const SingleArtist = ({ name }) => {
  const data = useContext(DataContext);
  const mainItem = data.data.mainItem;
  const relatedItems = data.data.relatedItems;
  const history = useHistory();

  const createSimilarList = () => {
    return relatedItems.map((item, index) => {
      item.id = `blerb${(index += 1)}`;
      return (
        <Link to={`/artists/${item.Name}`}>
          <RelatedArtist
            name={item.Name}
            id={item.id}
            key={(index += 1)}
            setQuery={data.setQuery}
          />
        </Link>
      );
    });
  };

  useEffect(() => {
    history.listen((location) => {
      const path = location.pathname;
      data.setQuery(path.substring(9));
    });
  }, [history]);

  useEffect(() => {
    data.setQuery(name);
  }, []);

  return (
    <section className="single-artist-page">
      {data && (
        <div className="header-section">
          <h1 className="single-artist-header">{name}</h1>
          <Link to="/" style={{ textDecoration: "none" }}>
            <button
              className="back-to-main"
              onClick={() => data.setQuery(mainItem.Name)}
            >
              <span className="text">Back to Main</span>
            </button>
          </Link>
        </div>
      )}
      <div className="video-list-container">
        <div className="youtube-vid">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${mainItem.yID}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen="allowfullscreen"
          ></iframe>
        </div>
        <div className="related-artists">
          {" "}
          <label>Related Artists</label>
          {createSimilarList()}
        </div>
      </div>
      <div className="article-box">
        {!mainItem.wTeaser ? (
          <article className="article">
            No info to display for this artist.
          </article>
        ) : (
          <article className="article">{mainItem.wTeaser}</article>
        )}
      </div>
      <div className="wiki-art">
        {mainItem.wTeaser && (
          <a
            className="wiki-link"
            href={mainItem.wUrl}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            Read More About {mainItem.Name} HERE on Wikipedia!
          </a>
        )}
      </div>
    </section>
  );
};

export default SingleArtist;
