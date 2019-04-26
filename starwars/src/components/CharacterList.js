import React from "react";
import CharacterItem from "./CharacterItem"

function CharacterList(props) {
  console.log(props)
  return (
    <div className="character-list">
      {props.starwarsChars.map(item => (
        <CharacterItem key={item.created} item={item} />
      ))}
    </div>
  );
}

export default CharacterList;