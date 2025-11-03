"use client";

import Link from 'next/link'
import React from 'react'
import { Button } from 'react-bootstrap'

export default function EditorButtons({prev, updateAssignment, cancelAssignment}: { prev: string; updateAssignment: () => void;
    cancelAssignment: () => void;
}) {
  

  return (
    <div className="mt-2 mb-3">
        <Link onClick={updateAssignment} href={`/Courses/${prev}/Assignments`} className="btn btn-danger btn-lg me-1 text-nowrap float-end">
            Save
        </Link>

        <Link onClick={cancelAssignment} href={`/Courses/${prev}/Assignments`} className="btn btn-secondary btn-lg me-1 text-nowrap float-end">
            Cancel
        </Link>
    </div>
  )
}