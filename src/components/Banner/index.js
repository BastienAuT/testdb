import TypeIt from "typeit-react";
import "./styles.scss";
import bastien1 from "./bastien1.jpg";

const Banner = () => {
  return (
    <div className="banner">
      <img
        className="banner__image"
        src={bastien1}
        alt="autreimagedeBastien"
      ></img>
      <div className="banner__text">
      <p> Bienvenue, je suis Bastien Autem, developpeur web front-end  
      </p>
        <TypeIt className="typeit"
          options={{
            speed: 75,
            lifeLike: true,
            breakLines: false,
            loop: true,
          }}
          getBeforeInit={(instance) => {
            instance
              .type(
                "JavaScript"
              )
              .pause(800)
              .delete(12)
              .pause(800)
              .type("React")
              .pause(800)
            // Remember to return it!
            return instance;
          }}
        />
      </div>
    </div>
  );
};

export default Banner;
