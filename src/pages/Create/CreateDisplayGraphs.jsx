import React, { useEffect } from 'react'
import { useGlobalContext } from '../../context'
import { BarChart, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { CreateViewQueryData } from '../../data/QueryData';
import {PIE_CHART_COLORS_CREATE_VIEW, PIE_CHART_COLORS} from "../../random";


function CreateDisplayGraphs() {
  const {chartSelection, 
         setChartSelection, 
         measureSelection, 
         fieldSelelection,
         createViewData,
         SetCreateViewData} = useGlobalContext();

      
  useEffect(() => {
    if (measureSelection && fieldSelelection) {
      let updatedData = CreateViewQueryData(measureSelection, fieldSelelection);

      if (chartSelection === "Pie Chart") {
        updatedData.sort((a,b) => {
          return a.value - b.value
        })
      }
      SetCreateViewData(updatedData);
    }
  }, [measureSelection, fieldSelelection])


  if (measureSelection === null || fieldSelelection === null) {
    return (
      <div className='create-display-graph-container'>
        {(!fieldSelelection && !measureSelection) 
          && <span>Select Measure & Field</span>}
        {measureSelection && <span>Select Field</span>}
        {fieldSelelection && <span>Select Measure</span>}
      </div>
    )
  }

  return (
    <div className='create-display-graph-container'>
      {
       (chartSelection !== "Pie Chart") && 
        <div className='y-axis'>
          {measureSelection === "quantity" ? measureSelection + " ordered" : measureSelection}
        </div>
      }
      <div className='chart'>
        {chartSelection === "Bar Chart" && 
        <ResponsiveContainer width="100%" height={675}>
          <BarChart  data={createViewData} margin={{top: 20, right: 20, bottom: 20, left: 10}}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis/>
            <Tooltip />
            <Bar dataKey="value" fill="#1b59f8" />
          </BarChart>
        </ResponsiveContainer>
        }
        {chartSelection === "Pie Chart" && 
        <ResponsiveContainer width="100%" height={675}>
          <PieChart>
            <Pie 
              data={createViewData.filter((item) => item.value > 0)} 
              dataKey="value" 
              nameKey="name" 
              cx="50%" 
              cy="50%" 
              innerRadius={120} 
              outerRadius={250} 
              label
              >
              {createViewData.map((entry, index) => 
              (<Cell key={`cell-${index}`} 
              fill={createViewData.length < 5 ? PIE_CHART_COLORS[index % PIE_CHART_COLORS.length] 
                : PIE_CHART_COLORS_CREATE_VIEW[index % PIE_CHART_COLORS_CREATE_VIEW.length]} /> ))}
            </Pie>
            <Tooltip/>
          </PieChart>
        </ResponsiveContainer>
        }
      {
       (chartSelection !== "Pie Chart") && 
        <div className='x-axis'>{fieldSelelection}</div>

        }
      </div>

    </div>
  )
};

export default CreateDisplayGraphs
