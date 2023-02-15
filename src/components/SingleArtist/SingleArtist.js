import "./_SingleArtist.scss";
import { DataContext } from "../../contexts/DataContext";
import { useContext, useEffect, useState } from "react";
import RelatedArtist from "../RelatedArtist/RelatedArtist";
import { Link, useHistory } from "react-router-dom";
import { fetchYouTube } from "../../apiCalls";

const SingleArtist = ({ name }) => {
  const data = useContext(DataContext);
  const mainArtist = data.mainArtist;
  const relatedArtists = data.relatedArtists;
  const history = useHistory();
  const [youtube, setYoutube] = useState("");

  const createSimilarList = () => {
    return relatedArtists.length ? (
      relatedArtists.map((item, index) => {
        item.id = `blerb${(index += 1)}`;
        return (
          <Link to={`/artists/${item.name}`}>
            <RelatedArtist
              name={item.name}
              id={item.id}
              key={(index += 1)}
              setSearchQuery={data.setSearchQuery}
            />
          </Link>
        );
      })
    ) : (
        <RelatedArtist
          name="No Artists Listed"
          id="no-artist"
          key="no-artist"
        />
    );
  };

  useEffect(() => {
    history.listen((location) => {
      const path = location.pathname;
      data.setSearchQuery(path.substring(9));
    });
  }, [history]);

  useEffect(() => {
    data.setSearchQuery(data.mainArtist.name);
    fetchYouTube(name)
      .then((info) => {
        setYoutube(info.items[0].id.videoId);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data.mainArtist.name]);

  return (
    <section className="single-artist-page">
      {data && (
        <div className="header-section">
          <h1 className="single-artist-header">{name}</h1>
          <Link to="/" style={{ textDecoration: "none" }}>
            <button
              className="back-to-main"
              onClick={() => data.setSearchQuery(mainArtist.name)}
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
            src={`https://www.youtube.com/embed/${youtube}`}
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
        {!mainArtist.bio.summary ? (
          <article className="article">
            No info to display for this artist.
          </article>
        ) : (
          <article className="article">{mainArtist.bio.summary}</article>
        )}
      </div>
      <>
        {mainArtist.bio.summary && (
          <a
            className="wiki-link"
            href={mainArtist.bio.links.link.href}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            Read More About {mainArtist.name} HERE on Last.FM!
          </a>
        )}
      </>
    </section>
  );
};

export default SingleArtist;
