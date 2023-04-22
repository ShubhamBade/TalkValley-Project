import React from 'react';
import dummy from "./default.jpg"

function AdCard({ ad }) {
  console.log("Image data ",ad.imageUrl);
  return (
    <>
      <div className="card my-3"  style={{width:"18rem"}}>
        <img src={ad.imageUrl?ad.imageUrl:dummy} className="card-img-top" alt="No Image For Now"/>
          <div className="card-body">
            <h2 className="card-title text-center">{ad.companyName}</h2>
            <p className="card-text"><h3>{ad.headline}</h3><br/><h4>{ad.primaryText}</h4>
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><strong>Description :</strong>{ad.description}</li>
          </ul>
          <div className="card-body">
            <a href={ad.companyUrl} className="card-link" target='_blank'>{ad.CTA}</a>
          </div>
      </div>

    </>

  );
}

export default AdCard;
