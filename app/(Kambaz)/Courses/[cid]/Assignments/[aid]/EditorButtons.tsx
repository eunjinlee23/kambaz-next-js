import React from 'react'
import { Button } from 'react-bootstrap'

export default function EditorButtons() {
  return (
    <div className="mt-2 mb-3">
        <Button variant="danger" size="lg" className="me-1 text-nowrap float-end">
            Save
        </Button>

        <Button variant="secondary" size="lg" className="me-1 text-nowrap float-end">
            Cancel
        </Button>
    </div>
  )
}
