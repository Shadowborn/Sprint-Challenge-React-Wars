import React from "react";
import CharacterItem from "./CharacterItem"

function PlanetList(props) {
  console.log(props)
return (
  <div className="character-list">
    {props.starwarsPlanets.map(item => (
      <CharacterItem key={item.created} item={item} />
    ))}
  </div>
);
}

export default PlanetList;