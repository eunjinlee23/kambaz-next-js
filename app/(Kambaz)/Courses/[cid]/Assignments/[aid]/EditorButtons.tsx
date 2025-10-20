import Link from 'next/link'
import React from 'react'
import { Button } from 'react-bootstrap'

export default function EditorButtons({prev}: { prev: string}) {
  

  return (
    <div className="mt-2 mb-3">
        <Link href={`/Courses/${prev}/Assignments`} className="btn btn-danger btn-lg me-1 text-nowrap float-end">
            Save
        </Link>

        <Link  href={`/Courses/${prev}/Assignments`} className="btn btn-secondary btn-lg me-1 text-nowrap float-end">
            Cancel
        </Link>
    </div>
  )
}
