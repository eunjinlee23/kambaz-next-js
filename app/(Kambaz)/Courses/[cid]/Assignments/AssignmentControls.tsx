import React from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap'
import InputGroupText from 'react-bootstrap/esm/InputGroupText'
import { CiSearch } from 'react-icons/ci'
import { FaPlus } from 'react-icons/fa6'

export default function AssignmentControls() {
  return (
    <div className="mt-2 mb-3">
        <InputGroup size="lg" className="w-50 float-start">
            <InputGroupText className="bg-white pe-2 ps-2 border-right-none"><CiSearch className="fs-4"/></InputGroupText>
            <FormControl className="border-left-none ps-0" placeholder="Search..." />
        </InputGroup>


        <Button variant="danger" size="lg" className="me-1 text-nowrap float-end">
             <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} /> Assignment
        </Button>

        <Button variant="secondary" size="lg" className="me-1 text-nowrap float-end">
             <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} /> Group
        </Button>
    </div>
  )
}
