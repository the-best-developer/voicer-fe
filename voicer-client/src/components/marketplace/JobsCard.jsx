import React, { useEffect, useState } from "react"

const JobsCard = ({ token, data }) => {
  const [edit, setEdit] = useState(false)
  const [crud, setCrud] = useState(false)

  useEffect(() => {
    if (token && token.user_id === data.creator_id) {
      setCrud(true)
    }
  })

  return edit ? (
    <article className="jobCard">
      {crud && (
        <>
          <button
            onClick={(e) => {
              e.preventDefault()
              setEdit(!edit)
            }}
          >
            Cancel
          </button>
          <button>Delete Job</button>
        </>
      )}
    </article>
  ) : (
    <article className="jobCard">
      <div className="jobTitle">
        <h3>{data.title}</h3>
      </div>
      <div className="jobBody">
        <div className="jobImage">
          <img
            className="jobCardStockImage"
            src={`https://picsum.photos/id/${data.id}/87/87?grayscale`}
            alt="Stock image for beautification"
          />
        </div>
        <div className="jobInfo">
          <p>This job pays ${data.payrate}/hour</p>
          <p>Job poster: {data.creator_id}</p>
          <button type="button" className="applyButton">
            Apply
          </button>
        </div>
      </div>
      <div className="jobDescription">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit quam
          saepe minus reiciendis error consequuntur incidunt commodi delectus
          quas assumenda!
        </p>
      </div>
    </article>
  )
}

export default JobsCard
