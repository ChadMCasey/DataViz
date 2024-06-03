import React, { useEffect, useState } from 'react'
import { createViewTopbarOptions } from '../../random'
import { useGlobalContext } from '../../context'

function CreateTopbar() {
  const {chartSelection, setChartSelection} = useGlobalContext();
  // testing to see if we can select buttons and set state
  // see random folder to change / set the information for the button list

  useEffect(() => {
    if (chartSelection === "none") {
      setChartSelection(createViewTopbarOptions[0].title)
    }
  }, [])

  return (
    <div className='create-topbar'>
      <h1>Chart Selection</h1>
      <div className='create-topbar-selections'>
        {createViewTopbarOptions.map((option, index) => {
          const {title} = option;
          return (
            <button onClick={() => setChartSelection(title)} 
                  className={title === chartSelection ? 
                  'create-topbar-selection--active' : 
                  'create-topbar-selection' }
                  key={index}>
              {title}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default CreateTopbar
