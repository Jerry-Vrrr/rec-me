import "./_BigBubble.scss";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import { Route, Link } from "react-router-dom";

const BigBubble = () => {
  const data = useContext(DataContext);
  const mainItem = data.data.mainItem;
  console.log(mainItem);
  return (
    <Link to={`/${mainItem.Name}`}>
      <div className="bubble-wrap">
        <article className="big-bubs">
          <img
            className="image"
            src="https://studiosol-a.akamaihd.net/letras/500x500/fotos/a/7/6/b/a76b7ee31a54dde5c98a1cc4cc620e0b.jpg"
          ></img>
        </article>
        <h2>{data && <p>{mainItem.Name}</p>}</h2>
      </div>
    </Link>
  );
};

export default BigBubble;
