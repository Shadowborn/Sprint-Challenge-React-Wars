import React from "react";

function CharacterItem(props) {
  // this constructs the className attribute for the div below conditional
  // on whether this item's props.item.purchased is true or false
  let classNames = "item";
  

  return (
    <div className={classNames}>
      <p>{props.item.name}</p>
    </div>
  );
}

export default CharacterItem;