import React from 'react'
import AccordionLayout from './AccordionLayout'
import { useState } from 'react'

const UpdatesAccordion = () => {
  const [activeIdx, setActiveIdx] = useState([])

  return (
    <div className="accordion mt-4 mb-6">
      <AccordionLayout
        date="March 31, 2022"
        activeIdx={activeIdx}
        setActiveIdx={setActiveIdx}
        index={0}
      >
        The IRC’s CNPP website is live! Check back soon for updates and get connectedto a CNPP counselor.
      </AccordionLayout>

      {/* <AccordionLayout
        date="March 25, 2022"
        index={1}
        activeIdx={activeIdx}
        setActiveIdx={setActiveIdx}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </AccordionLayout> */}
    </div>
  )
}

export default UpdatesAccordion