import React, { useEffect } from 'react'
import {RxRows, RxColumns} from 'react-icons/rx'
import {useGlobalContext} from '../../context';
import {ImCancelCircle} from "react-icons/im";
import { MEASURES_LIST, FIELDS_LIST } from '../../random'

function CreateRowsAndColumsInputFields() {
  const {draggingElement, 
         setDraggingElement,
         measureSelection,
         setMeasureSelection,
         fieldSelelection,
         setFieldSelection
        } = useGlobalContext();

  const dragEnter = (e) => {
    e.preventDefault();
    e.target.classList.add("drag-over");
  }

  const dragLeave = (e) => {
    e.target.classList.remove("drag-over");
  }

  const dragOver = (e) => {
    e.preventDefault();
  }

  const dragDrop = (e) => {
    e.target.classList.remove('drag-over');    

    if (
      MEASURES_LIST.includes(draggingElement.id) &&
      e.target.classList.contains("row")) {
      setMeasureSelection(draggingElement.id);
    }
    if (
      FIELDS_LIST.includes(draggingElement.id) &&
      e.target.classList.contains("col")) {
      setFieldSelection(draggingElement.id);
    }
  }


  return (
    <div className='rows-columns-container'>

      <div className='row-col-input row' 
           onDragEnter={(e) => dragEnter(e)}
           onDragOver={(e) => dragEnter(e)}
           onDragLeave={dragLeave}
           onDrop={dragDrop}>
        <div className='measure-field-header'>
          <RxRows color=" #1b59f8"/>
          Measure
        </div>
        {
          measureSelection &&
          <div className="measure-field-selection">
            <span>{measureSelection}</span>
            <ImCancelCircle className='x-icon' onClick={() => setMeasureSelection(null)}/>
          </div>
        }
      </div>

      <div className='row-col-input col'
          onDragEnter={(e) => dragEnter(e)}
          onDragOver={(e) => dragEnter(e)}
          onDragLeave={dragLeave}
          onDrop={dragDrop}>
        <div className='measure-field-header'>
          <RxColumns/>
          Field
        </div>
        {
            fieldSelelection &&
            <div className="measure-field-selection">
              <span>{fieldSelelection}</span>
              <ImCancelCircle className='x-icon' onClick={() => setFieldSelection(null)}/>
            </div>
        }
      </div>

    </div>
  )
}

export default CreateRowsAndColumsInputFields
