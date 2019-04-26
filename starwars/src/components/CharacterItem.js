import React from "react";

function CharacterItem(props) {
  // this constructs the className attribute for the div below conditional
  // on whether this item's props.item.purchased is true or false
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