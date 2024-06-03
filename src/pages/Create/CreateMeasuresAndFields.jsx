import React, { useEffect } from 'react'
import {MdOutlineAbc} from "react-icons/md"
import {AiOutlineNumber} from "react-icons/ai"
import {MdOutlineDragIndicator} from "react-icons/md"
import { MEASURES, FIELDS } from '../../random'
import { useGlobalContext } from '../../context'

function CreateMeasuresAndFields() {
  const {draggingElement, setDraggingElement} = useGlobalContext();

  const dragStart = (e) => {
    setDraggingElement(e.target)
  } 

  return (
    <div className='measures-and-fields-container'>
      <div className='mf-container measures'>
        <div className='mf-heading measures'>Measures</div>
        {MEASURES.map((measure, index) => {
          const {title} = measure;
          return (
            <div className='mf-option measure' draggable="true" 
            id={title} 
            onDragStart={(e) => dragStart(e)} 
            key={index}>
              <div className='mf-icon-and-label'>
              <AiOutlineNumber className='mf-icon field-icon'/>
                <span>{title}</span>
              </div>
              <MdOutlineDragIndicator className='mf-icon drag-icon'/>
            </div>
          )
        })}
      </div>
      <div className='mf-container fields'>
        <div className='mf-heading fields'>Feilds</div>
        {FIELDS.map((field, index) => {
          const {title} = field;
          return (
            <div className='mf-option measure' 
            draggable="true" id={title} 
            onDragStart={(e) => 
            dragStart(e)} key={index}>
              <div className='mf-icon-and-label'>
                <MdOutlineAbc className='mf-icon measure-icon'/>

                <span>{title}</span>
              </div>
                <MdOutlineDragIndicator className='mf-icon drag-icon'/>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CreateMeasuresAndFields
