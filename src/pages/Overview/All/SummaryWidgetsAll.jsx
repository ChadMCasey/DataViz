import React, { useEffect } from 'react'
import { useGlobalContext } from '../../../context'
import { SummaryWidgetsQueryAll } from '../../../data/QueryData';
import {BsArrowUpSquareFill} from "react-icons/bs"
import {BsArrowDownSquareFill} from "react-icons/bs"

function SummaryWidgetsAll() {
    const {ProductCategory, 
           region, 
           shipMode, 
           AllWidgetData, 
           SetAllWidgetData,
           MarketSegment,
           yearOrdered} = useGlobalContext();

    useEffect(() => {
        for (let child of document.querySelector(".all-widget-wrapper").children) {
            child.style.height = Math.floor(window.outerHeight *  .13) + "px";
        }
    }, [])

    useEffect(() => {
        let obj = SummaryWidgetsQueryAll({
            MarketSegment: "all",
            ProductCategory: ProductCategory.slice(0,3) === "all" ? "all" : ProductCategory,
            region: region.slice(0,3) === "all" ? "all" : region,
            shipMode: shipMode.slice(0,3) === "all" ? "all" : shipMode,
            yearOrdered: yearOrdered.slice(0,3) === "all" ? "all" : yearOrdered,
        });
        SetAllWidgetData({
            totalSales: obj.totalSales,
            ConsumerSales: obj.ConsumerSales,
            CorporateSales: obj.CorporateSales,
            OfficeSales: obj.OfficeSales,
            totalSalesChange: obj.totalSalesChange,
            consumerSalesChange: obj.consumerSalesChange,
            corporateSalesChange: obj.corporateSalesChange,
            officeSalesChange: obj.officeSalesChange,
            totalSalesByMonth: obj.totalSalesByMonth,
            ConsumerSalesByMonth: obj.MonthlySalesConsumerSegment,
            OfficeSalesByMonth: obj.MonthlySalesOfficeSegment,
            CorporateSalesByMonth: obj.MonthlySalesCorporateSegment,
            QuantityOrderedConsumer: obj.ConsumerOrdersQuantity,
            QuantityOrderedCorporate: obj.CorporateOrdersQuantity,
            QuantityOrderedOffice: obj.OfficeOrdersQuantity,
        })
    }, [ProductCategory, region, shipMode, yearOrdered])

  return (
    <div className='all-widget-wrapper'>
        <div className='widget all-total-sales'>
            <div className='widget-h1'>
                Total Sales
            </div>
            <div className='widget-main-kpi'>
                {"$" + AllWidgetData.totalSales.toFixed(0)
                .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </div>
            <div className='widget-smaller-kpi-wrapper'>
                {(yearOrdered !== "twenty fourteen" 
                && yearOrdered !== "all" 
                && yearOrdered !== "all years" 
                && yearOrdered !== "year") &&
                <div className='widget-smaller-kpi'>
                     <span>YOY Sales:</span>
                    {AllWidgetData.totalSalesChange.toString().charAt(0) === "-" && 
                    <BsArrowDownSquareFill className={ "arrow-negative"}/> }
                    {AllWidgetData.totalSalesChange.toString().charAt(0) !== "-" && 
                    <BsArrowUpSquareFill className={ "arrow-positive"}/> }
                    {(AllWidgetData.totalSalesChange === "0" 
                    || AllWidgetData.totalSalesChange === "NaN" 
                    || AllWidgetData.totalSalesChange === "Infinity"
                    || AllWidgetData.totalSalesChange  === "-Infinity" 
                    || AllWidgetData.totalSalesChange  === "-NaN"  ) && `No Data`} 
                    {!(AllWidgetData.totalSalesChange === "0" 
                    || AllWidgetData.totalSalesChange === "NaN" 
                    || AllWidgetData.totalSalesChange === "Infinity" 
                    || AllWidgetData.totalSalesChange  === "-Infinity"
                    || AllWidgetData.totalSalesChange  === "-NaN" ) && AllWidgetData.totalSalesChange + `%`} 
                </div>
                }
            </div>
        </div>
        <div className='widget all-consumer-sales'>
            <div className='widget-h1'>
                Consumer Sales
            </div>
            <div className='widget-main-kpi'>
            {"$" +  AllWidgetData.ConsumerSales.toFixed(0)
            .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </div>
            <div className='widget-smaller-kpi-wrapper'>
                {(yearOrdered !== "twenty fourteen" 
                && yearOrdered !== "all" 
                && yearOrdered !== "all years" 
                && yearOrdered !== "year"
                ) &&
                <div className='widget-smaller-kpi'>
                   <span>YOY Sales:</span>
                    {AllWidgetData.consumerSalesChange.toString().charAt(0) === "-" && 
                    <BsArrowDownSquareFill className={ "arrow-negative"}/> }
                    {AllWidgetData.consumerSalesChange.toString().charAt(0) !== "-" && 
                    <BsArrowUpSquareFill className={ "arrow-positive"}/> }
                    {(AllWidgetData.consumerSalesChange === "0" 
                    || AllWidgetData.consumerSalesChange === "NaN" 
                    || AllWidgetData.consumerSalesChange === "Infinity"
                    || AllWidgetData.consumerSalesChange  === "-Infinity"
                    || AllWidgetData.consumerSalesChange === "-NaN") && `No Data`} 
                    {!(AllWidgetData.consumerSalesChange === "0" 
                    || AllWidgetData.consumerSalesChange === "NaN" 
                    || AllWidgetData.consumerSalesChange === "Infinity" 
                    || AllWidgetData.consumerSalesChange  === "-Infinity"
                    || AllWidgetData.consumerSalesChange === "-NaN" ) && AllWidgetData.consumerSalesChange + `%`} 
                </div>
                }
            </div>
        </div>
        <div className='widget all-corporate-sales'>
            <div className='widget-h1'>
                Corporate Sales
            </div>
            <div className='widget-main-kpi'>
                {"$" + AllWidgetData.CorporateSales.toFixed(0)
                .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </div>
            <div className='widget-smaller-kpi-wrapper'>
                {(yearOrdered !== "twenty fourteen" 
                    && yearOrdered !== "all" 
                    && yearOrdered !== "all years" 
                    && yearOrdered !== "year") &&
                <div className='widget-smaller-kpi'>
                    <span>YOY Sales:</span>
                    {AllWidgetData.corporateSalesChange.toString().charAt(0) === "-" && 
                    <BsArrowDownSquareFill className={ "arrow-negative"}/> }
                    {AllWidgetData.corporateSalesChange.toString().charAt(0) !== "-" && 
                    <BsArrowUpSquareFill className={ "arrow-positive"}/> }
                    {(AllWidgetData.corporateSalesChange === "0" 
                    || AllWidgetData.corporateSalesChange === "NaN" 
                    || AllWidgetData.corporateSalesChange === "Infinity"
                    || AllWidgetData.corporateSalesChange  === "-Infinity"
                    || AllWidgetData.corporateSalesChange === "-NaN" ) && `No Data`} 
                    {!(AllWidgetData.corporateSalesChange === "0" 
                    || AllWidgetData.corporateSalesChange === "NaN" 
                    || AllWidgetData.corporateSalesChange === "Infinity" 
                    || AllWidgetData.corporateSalesChange  === "-Infinity"
                    || AllWidgetData.corporateSalesChange === "-NaN" ) && AllWidgetData.corporateSalesChange + `%`} 
                </div>
                }
            </div>
        </div>
        <div className='widget all-office-sales'>
            <div className='widget-h1'>
                Office Sales
            </div>
            <div className='widget-main-kpi'>
                {"$" + AllWidgetData.OfficeSales.toFixed(0)
                .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </div>
            <div className='widget-smaller-kpi-wrapper'>
                {(yearOrdered !== "twenty fourteen" 
                && yearOrdered !== "all" 
                && yearOrdered !== "all years" 
                && yearOrdered !== "year") && 
                <div className='widget-smaller-kpi'>
                    <span>YOY Sales:</span>
                    {AllWidgetData.officeSalesChange.toString().charAt(0) === "-" && 
                    <BsArrowDownSquareFill className={ "arrow-negative"}/> }
                    {AllWidgetData.officeSalesChange.toString().charAt(0) !== "-" && 
                    <BsArrowUpSquareFill className={ "arrow-positive"}/> }
                    {(AllWidgetData.officeSalesChange === "0" 
                    || AllWidgetData.officeSalesChange === "NaN" 
                    || AllWidgetData.officeSalesChange === "Infinity"
                    || AllWidgetData.officeSalesChange  === "-Infinity"
                    || AllWidgetData.corporateSalesChange === "-NaN" ) && `No Data`} 
                    {!(AllWidgetData.officeSalesChange === "0" 
                    || AllWidgetData.officeSalesChange === "NaN" 
                    || AllWidgetData.officeSalesChange === "Infinity" 
                    || AllWidgetData.officeSalesChange  === "-Infinity"
                    || AllWidgetData.corporateSalesChange === "-NaN" ) && AllWidgetData.officeSalesChange + `%`} 
                </div>
                }
            </div>
        </div>
    </div>
  )
}

export default SummaryWidgetsAll
