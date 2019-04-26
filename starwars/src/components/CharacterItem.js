import React from "react";

function CharacterItem(props) {
  let classNames = "item";
  

  return (
    <div className={classNames}>
      <p>
        <strong>Identity: </strong>{props.item.name}
      </p>
      <p>
        <strong>Eye Color: </strong>{props.item.eye_color}
      </p>
      <p>
      <strong>Gender: </strong>{props.item.gender} 
      </p>
    </div>
  );
}

export default CharacterItem;