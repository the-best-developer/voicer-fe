import React, { useEffect, useState } from "react";

const JobsCard = ({ token, data }) => {
  console.log(data, token);
  const [edit, setEdit] = useState(false);
  const [crud, setCrud] = useState(false);

  useEffect(() => {
    if (token && token.user_id === data.creator_id) {
      console.log("in business");
    }
  });

  return edit ? (
    <article className="jobCard">
      {crud && (
        <>
          <button
            onClick={(e) => {
              e.preventDefault();
              setEdit(!edit);
            }}
          >
            Cancel
          </button>
          <button>Delete Job</button>
        </>
      )}
    </article>
  ) : (
    <>
      <div className="jobCard">
        <div>
          <h1 className="jobTitle">{data.title}</h1>
          <img
            className="jobCardStockImage"
            src={`https://picsum.photos/id/${data.id}/87/87?grayscale`}
            alt="Stock image for beautification"
          ></img>
          <p>This job pays ${data.payrate}/hour</p>
          <p>Job poster: {data.creator_id}</p>
          <button type="button" className="applyButton">
            Apply
          </button>
        </div>
      </div>
    </>
  );
};

export default JobsCard;
