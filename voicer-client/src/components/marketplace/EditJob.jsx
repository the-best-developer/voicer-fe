import React, { useState, useEffect } from "react"
import { token, url, refreshAppHandler } from "../../context/DataContext"
import { Button, Card, Form, InputGroup, FormControl } from "react-bootstrap"
import { useInputControl } from "../../hooks/useInputControl"

const EditJob = ({ setEdit, data, token }) => {
  // ----------------------------------------------------------------
  // ***********DESCRIPTION***************
  // This component displays when the creator_id of the job
  // and the id of the current token match. It allows users to
  // edit their job posts or delete them entirely.
  // ----------------------------------------------------------------

  // going to use this variable to confirm with the user
  // whether they really want to delete the job.
  // If yes, this changes to true (and job deletion is executed)

  const jobUpdate = {}
  console.log(data, token)

  const titleInput = useInputControl(data.title)
  const descriptionInput = useInputControl(data.description)
  const payrateInput = useInputControl(data.payrate)

  jobUpdate.title = titleInput.value
  jobUpdate.description = descriptionInput.value
  jobUpdate.payrate = payrateInput.value

  const submitForm = (e) => {
    e.preventDefault()
    console.log("submitted form")
    setEdit(false)
  }

  const cancelForm = (e) => {
    console.log("cancelled form")
    setEdit(false)
  }

  const deleteForm = (e) => {
    window.confirm("Are you sure you want to delete this job?")
      ? setEdit(false)
      : console.log("Didn't delete")
  }

  return (
    <Form onSubmit={submitForm}>
      <InputGroup>
        <FormControl />
      </InputGroup>

      <InputGroup>
        <FormControl />
      </InputGroup>

      <InputGroup>
        <FormControl />
      </InputGroup>

      <Button type="submit">Submit</Button>
      <Button onClick={cancelForm}>Cancel</Button>
      <Button onClick={deleteForm}>Delete Job</Button>
    </Form>
  )
}

export default EditJob
