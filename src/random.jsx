

// this file holds random data that might be used throughout the project
// constants, styles that i didnt want to define inside components etc.

const iconStyles = {
    padding: "0px",
    marginRight: "12px",
    verticalAlign: "middle",
}

const activeSidebarLinkStyles = {
    backgroundColor: "#e8eefe",
    color: '#1b59f8',
}

const OverviewActiveSelection = {
    color: "#000",
    fontWeight: "400",
    backgroundColor: "#fff",
    boxShadow: "1px 1px 5px 1px #e9e9e9",
};

const overviewSubmenus = [
    {
        title: "category",
        dropdownOptions: [
            "all-categories",
            "office-supplies",
            "furniture",
            "technology"
        ]
    },
    {   
        title: "region",
        dropdownOptions: [
            "all-regions",
            "central",
            "east",
            "south",
            "west",
        ]
    },
    {
        title: "shipmode",
        dropdownOptions: [
            "all-shipmodes",
            "first-class",
            "same-day",
            "second-class",
            "standard-class"
        ]
    },

]

const MEASURES = [
    {
        title: "Sales"
    },
    {
        title: "Profit"
    },
    {
        title: "Discount"
    },
    {
        title: "quantity"
    }
]

const MEASURES_LIST = [
    "Sales", "Profit", "Discount", "quantity"
]

const FIELDS_LIST = [
    "Shipmode", "Segment", "Region", "Category", "Sub-Category"
]

const FIELDS = [
    {
        title: "Shipmode"
    },
    {
        title: "Segment"
    },
    {
        title: "Region"
    },
    {
        title: "Category"
    },
    {
        title: "Sub-Category"
    }

]

const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const createViewTopbarOptions = [
    {
        title: "Bar Chart",
    },
    {
        title: "Pie Chart",
    }

]

const PIE_CHART_COLORS = ['#1b59f8', '#497bf9', '#e5e5e5'];
const PIE_CHART_COLORS_CREATE_VIEW = ["#1b59f8", "#2c65f6", "#3d70f5", "#4e7cf3", "#5e88f2", "#6f93f0", "#809fee", "#91abed", "#a2b6eb", "#b3c2ea", "#c3cee8", "#d4d9e7", "#e5e5e5"]

let ITER =  ["one", "two", "three"];
let years = {"twenty fourteen": "2014",
            "twenty fifteen": "2015", 
            "twenty sixteen": "2016",
            "twenty seventeen": "2017", 
            "all years": "All Years"}


export {
        iconStyles,
        activeSidebarLinkStyles,
        OverviewActiveSelection,
        overviewSubmenus,
        PIE_CHART_COLORS,
    ITER,
    years,
    MONTHS, 
    createViewTopbarOptions,
    MEASURES,
    FIELDS,
    MEASURES_LIST,
    FIELDS_LIST,
    PIE_CHART_COLORS_CREATE_VIEW}