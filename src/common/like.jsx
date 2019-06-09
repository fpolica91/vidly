import React from "react";

const Like = props => {
  let style = props.liked ? "fa fa-heart" : "fa fa-heart-o";

  return (
    <i
      className={style}
      aria-hidden="true"
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
    />
  );
};

export default Like;
