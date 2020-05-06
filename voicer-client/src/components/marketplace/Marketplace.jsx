import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import axios from "axios";
import JobsCard from "./JobsCard";
import { jobs } from "../../fakedata/jobs";

import Hero from "../hero/Hero";

export default function Marketplace() {
  const [jobMatchesDB, setJobMatchesDB] = useState(true);

  const { token, data, setData, url } = useContext(DataContext);

  const jobId = useParams().jobId;
  console.log(jobId);

  // useEffect(() => {
  //   if (jobId) {
  //     console.log("we are in 'detail mode'")
  //     axios.get(url)
  //       .then(result => {
  //         setData(result)

  //         if (result.data[0]) {
  //           setJobMatchesDB(true);
  //         } else {
  //           setJobMatchesDB(false)
  //         }
  //       })
  //       .catch(err => {
  //         console.log(err)
  //         setJobMatchesDB(true)
  //       })
  //     } else {
  //       axios.get(url)
  //         .then(result => {
  //           setData(result.data)
  //           console.log(data)

  //           setJobMatchesDB(false)
  //         })
  //         .catch(err => {
  //           console.log(err)
  //           setJobMatchesDB(false)
  //         })

  //     }
  //   },[])

  useEffect(() => {
    setData(jobs);
  }, []);
  console.log(data);

  // setData(jobs);

  return (
    <section className="marketplace">
      {!token && jobId === undefined && <Hero />}

      {!jobMatchesDB && jobId !== undefined && (
        <article className="error">
          The job you are looking for does not exist
        </article>
      )}
      {jobId !== undefined && jobMatchesDB ? (
        <>
          {data.map((job) => (
            <JobsCard key={job.id} data={job} token={token} />
          ))}
        </>
      ) : (
        <>
          {data.map((job) => (
            <a className="jobLink" key={job.id} href={`/job/${job.id}`}>
              <JobsCard data={job} token={token} />
            </a>
          ))}
        </>
      )}
    </section>
  );
}
