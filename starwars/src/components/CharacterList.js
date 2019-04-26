import React from "react";
import CharacterItem from "./CharacterItem"

function CharacterList(props) {
  return (
    <div className="character-list">
      {props.starwarsChars.map(item => (
        <CharacterItem key={item.height} item={item} />
      ))}
    </div>
  );
}

export default CharacterList;