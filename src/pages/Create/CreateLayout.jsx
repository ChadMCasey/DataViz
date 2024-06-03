import React from 'react'
import "./create.css"
import {CreateDisplayGraphs, 
        CreateTopbar, 
        CreateRowsAndColumsInputFields, 
        FilteringAndCustimization, 
        CreateMeasuresAndFields} from "./createIndex"

function Create() {

  return (
    <div className='create-layout'>

      <div className='create-layout-top-bar'>
        <CreateTopbar/>
      </div>

      <div className='create-layout-main-section'>
        <div className='create-layout-left-column'>
          <CreateMeasuresAndFields/>
          <FilteringAndCustimization/>
        </div>
        <div className='create-layout-right-column'>
          <CreateRowsAndColumsInputFields/>
          <CreateDisplayGraphs/>
        </div>
      </div>

    </div>
   
  )
}

export default Create
