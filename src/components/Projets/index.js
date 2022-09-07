import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../lib/initFirebase";
import Banner from "../Banner";
import "./projets.scss";

export default function Projets () {
  const [projets, setProjets] = useState([]);

  useEffect(() => {
    getProjets();
  }, []);

  useEffect(() => {
    console.log(projets);
  }, [projets]);

  function getProjets() {
    const projetCollectionRef = collection(db, "projects");
    getDocs(projetCollectionRef)
      .then((response) => {
        const prjts = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setProjets(prjts);
      })
      .catch((error) => console.log(error.message));
  }

 
  return (
    <div>
    <Banner/>
    <div className="projets">  
    {projets.map((projet) => (
        <div className="projets__card" key={projet.id} id={projet.id}>
        <img className="projets__image" alt="oui" src={projet.data.image}></img> 
        <span className="projets__title" > {projet.data.name}</span>
          <span className="projets__text"> {projet.data.text}</span>
          <a className="projets__button" href={projet.data.url}> visiter</a>
        </div>
      ))}
      </div>
    </div>
  );
}
