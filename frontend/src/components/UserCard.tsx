import React, { useState, useEffect } from "react";
import "../stylesheets/UserCard.css";

interface Props {
  name: string;
  description?: string | null;
}

const UserCard = ({ name, description = null }: Props): React.ReactElement => {
  const [img, setImg] = useState<string>("");

  useEffect(() => {
    fetch("https://picsum.photos/300/300")
      .then((response) => setImg(response.url))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="UserCard">
      <h1 className="UserCard-title">{name}</h1>
      {description ? <p className="UserCard-desc">{description}</p> : null}
      <img className="UserCard-img" src={img} alt="user image profile" />
    </div>
  );
};

export default UserCard;
