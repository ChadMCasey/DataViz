import React, { useEffect, useState } from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip, BarChart, CartesianGrid, XAxis, YAxis, Legend, Bar } from 'recharts';
import { PIE_CHART_COLORS, ITER as iter, years } from '../../../random';
import { useGlobalContext } from '../../../context';
import { AllQueryPieData } from '../../../data/QueryData';

// data contains values with the group and value
// each value is in an object

function SecondRowGraphsAll() {
    const [TopSalesPieChart, setTopSalesPieChart] = useState({})
    const [monthlySales, setMonthlySales] = useState({})
    const [topSalesBarChart, setTopSalesBarChart] = useState(100)

    const { ProductCategory, 
           region, 
           shipMode,  
           MarketSegment,
           yearOrdered,
           AllpieChartData,
           SetAllPieChartData,
           AllWidgetData } = useGlobalContext();


    useEffect(() => {
        let {data, topSales} = AllQueryPieData(AllWidgetData);
        SetAllPieChartData(data);
        setTopSalesPieChart(topSales)
        let monthlySalesDataPrepared = [
            {name: "january", value: AllWidgetData.totalSalesByMonth.january},
            {name: "february", value: AllWidgetData.totalSalesByMonth.february},
            {name: "march", value: AllWidgetData.totalSalesByMonth.march},
            {name: "april", value: AllWidgetData.totalSalesByMonth.april},
            {name: "may", value: AllWidgetData.totalSalesByMonth.may},
            {name: "june", value: AllWidgetData.totalSalesByMonth.june},
            {name: "july", value: AllWidgetData.totalSalesByMonth.july},
            {name: "august", value: AllWidgetData.totalSalesByMonth.august},
            {name: "september", value: AllWidgetData.totalSalesByMonth.september},
            {name: "october", value: AllWidgetData.totalSalesByMonth.october},
            {name: "november", value: AllWidgetData.totalSalesByMonth.november},
            {name: "december", value: AllWidgetData.totalSalesByMonth.december},
        ]
        setMonthlySales(monthlySalesDataPrepared)
        let MonthlySalesMax = monthlySalesDataPrepared.map((item) => {return item.value;});
        setTopSalesBarChart(Math.max(...MonthlySalesMax))
    }, [AllWidgetData])


  return (
    <div className='second-row-container'>
        <div className='second-row--graph-one-container'>
            <div className='second-row--graph-one-left-column'>
                <div className='second-row--graph-one-heading-container'>
                    <span className='graph-heading'>Sales By Percent</span>
                    <div className='main-KPI'>
                        <span>{TopSalesPieChart[0]}:</span>{TopSalesPieChart[1]}%
                    </div>
                </div>
                <div className='second-row--graph-one-legend-container'>
                    <div className='pie-legend'>
                        {AllpieChartData.map((item, index) => {
                            const {name, value} = item;
                            return (
                                <div key={index} className='pie-legend-item'>
                                    <div className={`legend-color ${iter[index]}`}></div>
                                    <div>
                                        {((value / AllWidgetData.totalSales) * 100).toFixed(0)}%
                                    </div>
                                    <span>{name}</span>
                                </div>
                            )
                        })}
    
                    </div>
                </div>
            </div>
            <div className='second-row--graph-one-right-column'>
                <PieChart width={200} height={150} className='pie'>
                    <Pie
                    data={AllpieChartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={30}
                    outerRadius={70}
                    paddingAngle={4}
                    fill="#8884d8"
                    dataKey="value"
                    >
                    <Tooltip/>
                    {AllpieChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} 
                        className="pie-slice"
                        onMouseEnter={() => 
                        {document.querySelector((`.legend-color.${iter[index]}`)).classList.add("active")}}
                        onMouseLeave={() => 
                        {document.querySelector((`.legend-color.${iter[index]}`)).classList.remove("active")}}
                        fill={PIE_CHART_COLORS[index % PIE_CHART_COLORS.length]} />
                    ))}
                    </Pie>
                </PieChart>
            </div>
        </div>
        <div className='second-row--graph-two-container'>
            <div className='second-row--graph-two-heading-container'>
                <span className='graph-heading'>
                Total Sales By Month - {yearOrdered.startsWith("all") ? "all time" : yearOrdered}
                </span>
                <span className='peak-sales-monthly-header'>
                    Peak Sales: ${topSalesBarChart.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
            </div>
            <div className='bar-chart-container'>
                <ResponsiveContainer width="100%" height={150}>
                    <BarChart className='barchart'
                        data={monthlySales}
                        height={150}
                        margin={{
                            top: 5,
                            right: 20,
                            left: -20,
                            bottom: 0,
                        }}
                        barSize={35}
                        >
                        <XAxis dataKey="name"  fontSize={".7rem"} padding={{ left: 0}} />
                        <YAxis fontSize={"0.6rem"}/>
                        <Tooltip/>
                        <Bar dataKey="value" fill="#1b59f8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>

    </div>
    
  )
}

export default SecondRowGraphsAll
