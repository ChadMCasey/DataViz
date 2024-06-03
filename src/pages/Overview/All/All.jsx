import React, { useEffect, useState } from 'react'
import { SummaryWidgetsAll } from '../../../components'
import { useGlobalContext } from '../../../context';
import SecondRowGraphsAll from './SecondRowGraphsAll';
import  ThirdRowGraphsAll from "./ThirdRowGraphsAll"

function All() {

  const getHeight = (element) => {
    const viewPortheight = window.innerHeight;
    const elementtop = element.getBoundingClientRect().top;
    const bottom = viewPortheight - elementtop - 20;
    element.style.height = bottom + "px";
  }

  useEffect(() => {
    getHeight(document.querySelector(".all-display-wrapper"))
  }, [])

  return (
    <div className='all-display-wrapper'>
        <SummaryWidgetsAll/>
        <SecondRowGraphsAll/>
        <ThirdRowGraphsAll/>
    </div>

  )
}

export default All
