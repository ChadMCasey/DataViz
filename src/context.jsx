

import React, { createContext, useContext, useEffect, useState } from "react";
import { useFetcher } from "react-router-dom";

const AppContext = createContext();

const AppProvider = ({children}) => {

    // overview handling
    const [MarketSegment, SetMarketSegment] = useState("all");
    const [ProductCategory, SetProductCategory] = useState("all");
    const [region, SetRegion] = useState("all");
    const [shipMode, SetShipMode] = useState("all");
    const [yearOrdered, SetYearOrdered] = useState("twenty seventeen");

    const [AllpieChartData, SetAllPieChartData] = useState([
        { name: 'Group A', value: 600 },
        { name: 'Group B', value: 200 },
        { name: 'Group C', value: 300 },
      ]
    );

    // saving the dragged element name 
    const [draggingElement, setDraggingElement] = useState(null);
    const [measureSelection, setMeasureSelection] = useState(null);
    const [fieldSelelection, setFieldSelection] = useState(null);

    // chart selection on create page
    const [chartSelection, setChartSelection] = useState("none")

    // data for the create page
    const [createViewData, SetCreateViewData] = useState();

    // data for the overview page
    const [AllWidgetData, SetAllWidgetData] = useState(
            {totalSales: 0, 
            ConsumerSales: 0, 
            CorporateSales: 0, 
            OfficeSales: 0, 
            totalSalesChange: 0, 
            consumerSalesChange: 0, 
            corporateSalesChange: 0,
            officeSalesChange: 0,
            topMonthlySales: 0,
            totalSalesByMonth: {},
            ConsumerSalesByMonth: {},
            OfficeSalesByMonth: {},
            CorporateSalesByMonth: {},
            QuantityOrderedConsumer: 0,
            QuantityOrderedCorporate: 0,
            QuantityOrderedOffice: 0}
            );

    return (
        <AppContext.Provider value={
            {
                MarketSegment,
                SetMarketSegment,
                ProductCategory,
                SetProductCategory,
                region,
                SetRegion,
                shipMode,
                SetShipMode,
                AllWidgetData,
                SetAllWidgetData,
                yearOrdered,
                SetYearOrdered,
                AllpieChartData,
                SetAllPieChartData,
                draggingElement,
                setDraggingElement,
                measureSelection,
                setMeasureSelection,
                fieldSelelection,
                setFieldSelection,
                chartSelection,
                setChartSelection,
                createViewData,
                SetCreateViewData
            }
        }>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider }