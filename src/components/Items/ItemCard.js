import React from "react";

const ItemCard = props => {
  console.log(props)
  return (
    <a
      className="col-sm-6 col-lg-4 fadeCard"
      href=""
      style={{ textDecoration: "none", color: "#212529" }}
    >
      <div className="card clean-card text-center artistCard">
        <img
          alt={props.name}
          className="card-img-top w-100 d-block artist"
          src={`data:image/png;base64,${props.image}`}
          style={{ pointerEvents: "none" }}
        />
        <div className="copyright waterMark">LemmeSmash</div>
        <div className="card-body info">
          <h4 className="card-title">{props.name}</h4>
          <p className="card-text">{props.desc}</p>
          <p className="card-text">{props.price}£</p>
        </div>
      </div>
    </a>
  );
};

export default ItemCard;
