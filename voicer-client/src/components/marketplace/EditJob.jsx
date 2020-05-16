import React, { useState, useEffect } from "react"
import { token, url, refreshAppHandler } from "../../context/DataContext"
import { Button, Card, Form, InputGroup, FormControl } from "react-bootstrap"
import { useInputControl } from "../../hooks/useInputControl"

const EditJob = ({ data }) => {
  // ----------------------------------------------------------------
  // ***********DESCRIPTION***************
  // This component displays when the creator_id of the job
  // and the id of the current token match. It allows users to
  // edit their job posts or delete them entirely.
  // ----------------------------------------------------------------

  const jobUpdate = {}
  const titleInput = useInputControl(data.title)
  const descriptionInput = useInputControl(data.description)
  const payrateInput = useInputControl(data.payrate)

  jobUpdate.title = titleInput.value
  jobUpdate.description = descriptionInput.value
  jobUpdate.payrate = payrateInput.value

  const submitForm = (e) => {
    console.log("submitted form")
  }

  const cancelForm = (e) => {
    console.log("cancelled form")
  }

  const deleteForm = (e) => {
    console.log("deleted form")
  }

  return (
    <Form onSubmit={submitForm}>
      <FormControl>
        <InputControl {...descriptionInput}></InputControl>
      </FormControl>

      <FormControl>
        <InputControl></InputControl>
      </FormControl>

      <FormControl>
        <InputControl></InputControl>
      </FormControl>

      <Button>Cancel</Button>
      <Button type="submit">Submit</Button>
      <Button>Delete Job</Button>
    </Form>
  )
}
