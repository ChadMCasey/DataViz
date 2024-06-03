import React, { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts';
import { useGlobalContext } from '../../../context';
import { PIE_CHART_COLORS, ITER, MONTHS } from '../../../random';



function ThirdRowGraphsAll() {
    const [monthlySalesByMarket, setmonthlySalesByMarket] = useState();
    const [ordersByMarket, setOrdersByMarket] = useState([{name: "consumer", value: 10}]);
    const [worstMonth, setWorstMonth] = useState(0);

    const { ProductCategory, 
        region, 
        shipMode,  
        MarketSegment,
        yearOrdered,
        AllWidgetData } = useGlobalContext();


    useEffect(() => {
        let lineChartUpdatedData = [
            {name: "january",
            consumer: AllWidgetData.ConsumerSalesByMonth.january,
            office: AllWidgetData.OfficeSalesByMonth.january,
            corporate: AllWidgetData.CorporateSalesByMonth.january},
            {name: "february", 
            consumer: AllWidgetData.ConsumerSalesByMonth.february,
            office: AllWidgetData.OfficeSalesByMonth.february,
            corporate: AllWidgetData.CorporateSalesByMonth.february},
            {name: "march", 
             consumer: AllWidgetData.ConsumerSalesByMonth.march,
             office: AllWidgetData.OfficeSalesByMonth.march,
             corporate: AllWidgetData.CorporateSalesByMonth.march},
            {name: "april", 
             consumer: AllWidgetData.ConsumerSalesByMonth.april,
            office: AllWidgetData.OfficeSalesByMonth.april,
            corporate: AllWidgetData.CorporateSalesByMonth.april},
            {name: "may", 
            consumer: AllWidgetData.ConsumerSalesByMonth.may,
            office: AllWidgetData.OfficeSalesByMonth.may,
            corporate: AllWidgetData.CorporateSalesByMonth.may},
            {name: "june", 
            consumer: AllWidgetData.ConsumerSalesByMonth.june,
            office: AllWidgetData.OfficeSalesByMonth.june,
            corporate: AllWidgetData.CorporateSalesByMonth.june},
            {name: "july", 
            consumer: AllWidgetData.ConsumerSalesByMonth.july,
            office: AllWidgetData.OfficeSalesByMonth.july,
            corporate: AllWidgetData.CorporateSalesByMonth.july},
            {name: "august",
            consumer: AllWidgetData.ConsumerSalesByMonth.august,
            office: AllWidgetData.OfficeSalesByMonth.august,
            corporate: AllWidgetData.CorporateSalesByMonth.august},
            {name: "september",
            consumer: AllWidgetData.ConsumerSalesByMonth.september,
            office: AllWidgetData.OfficeSalesByMonth.september,
            corporate: AllWidgetData.CorporateSalesByMonth.september},
            {name: "october",
            consumer: AllWidgetData.ConsumerSalesByMonth.october,
            office: AllWidgetData.OfficeSalesByMonth.october,
            corporate: AllWidgetData.CorporateSalesByMonth.october},
            {name: "november",
            consumer: AllWidgetData.ConsumerSalesByMonth.november,
            office: AllWidgetData.OfficeSalesByMonth.november,
            corporate: AllWidgetData.CorporateSalesByMonth.november},
            {name: "december",
            consumer: AllWidgetData.ConsumerSalesByMonth.december,
            office: AllWidgetData.OfficeSalesByMonth.december,
            corporate: AllWidgetData.CorporateSalesByMonth.december},
        ]

        let RadialBarUpdatedInformation = [
            {name: "Consumer", 
            value: AllWidgetData.QuantityOrderedConsumer,
            "fill": "#497bf9"},
            {name: "Corporate", 
            value: AllWidgetData.QuantityOrderedCorporate,
            "fill": "#1b59f8"
            },
            {name: "Office", 
            value: AllWidgetData.QuantityOrderedOffice,
            "fill": "#7c7c7c"
        }
        ].sort((a,b) => {
            return b.value - a.value
        })


        let worstMonthData = lineChartUpdatedData.map((item, index) => {
            const {consumer, corporate, office} = item;
            return consumer+corporate+office
        })

        let worstMonthDataIndex = worstMonthData.indexOf(Math.min(...worstMonthData))       

        setWorstMonth(MONTHS[worstMonthDataIndex])
        setOrdersByMarket(RadialBarUpdatedInformation);
        setmonthlySalesByMarket(lineChartUpdatedData);

    }, [AllWidgetData])


console.log(ordersByMarket)

  return (
    <div className='third-row-container'>
        {/* line chart */}
      <div className='graph-container-row-three first-container'>
        <div className='heading-container'>
            <span>Segment Sales By Month</span>
            <div className='main-kpi'>
                Worst Month: {worstMonth}
            </div>
        </div>   
        <div className='line-graph-container'>
            <ResponsiveContainer height="100%" width={650}>
                <LineChart width={600} height={200} data={monthlySalesByMarket}
                margin={{
                    top: 5,
                    right: 20,
                    left: -20,
                    bottom: 0,
                }}
                >
                    <XAxis  fontSize={".7rem"} dataKey="name" padding={{ top: 5, right: 20, left: 20, bottom: 5 }} />
                    <YAxis fontSize={"0.6rem"}/>
                    <Tooltip />
                    <Line strokeWidth={2} type="monotone" dataKey="consumer" stroke={PIE_CHART_COLORS[0]}/>
                    <Line strokeWidth={2} type="monotone" dataKey="corporate" stroke={PIE_CHART_COLORS[1]} />
                    <Line strokeWidth={2} type="monotone" dataKey="office" stroke="#7c7c7c" />
                </LineChart>
            </ResponsiveContainer>
        </div>
      </div>
      <div className='graph-container-row-three third-container'>
        <div className='heading-container'>
            <span>Order Quantity By Segment</span>
            <div className='main-kpi'>
                Total Orders: {(AllWidgetData.QuantityOrderedConsumer +
                                AllWidgetData.QuantityOrderedCorporate + 
                                AllWidgetData.QuantityOrderedOffice) 
                                .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </div>
        </div>   
        <div className='radial-bar-container'>
            <ResponsiveContainer width={200} height={200}>
                <RadialBarChart className='radial-bar'
                width={200} 
                height={200} 
                innerRadius="5%" 
                outerRadius="100%" 
                data={ordersByMarket} 
                startAngle={360} 
                endAngle={10}
                >
                    <RadialBar background={false} clockWise={true} dataKey='value' />
                    <Tooltip />
                </RadialBarChart>
            </ResponsiveContainer>
            <div className='radial-bar-legend'>
                {ordersByMarket.map((segment, index) => {
                    const {name, value, fill} = segment;
                    return (
                        <div key={index} className="legend-item-radial-bar">
                            <div className="radial-bar-legend-color" style={{backgroundColor: fill}}>
                            </div>
                            <span>{name} Orders:</span>{value}
                        </div>
                    )
                })}
            </div>
        </div>
      </div>
    </div>
  )
}

export default ThirdRowGraphsAll
