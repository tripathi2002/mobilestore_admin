import { ItemsNavbarData } from "./items-navbar-data";

export const navbarData: ItemsNavbarData[] = [
    {
        routeLink:'dashboard',
        icon :'fa fa-light fa-house',
        label:'Dashboard',
    },
    {
        routeLink:'products',
        icon :'fa  fa-box-open',
        label:'Products',
        items: [
            {
                routeLink:'products/list',
                label:'Product List'
            },
            {
                routeLink:'products/create',
                label:'Add Product'
            },
        ]
    },
    {
        routeLink:'statistics',
        icon :'fa fa-chart-bar',
        label:'Statistics'
    },
    
    {
        routeLink:'coupens',
        icon :'fa fa-tags',
        label:'Coupens',
        items: [
            {
                routeLink:'coupens/list',
                label:'List Coupens'
            },
            {
                routeLink:'coupens/create',
                label:'Create Coupens'
            },
        ]
    },
    {
        routeLink:'setting',
        icon :'fa fa-cog',
        label:'Setting',
        expanded:true,
        items:[
            {
                routeLink:'seting/profile',
                label:'Profile'
            },
            {
                routeLink:'coupens/customize',
                label:'Customize'
            },
        ]
    },
    {
        routeLink:'orders',
        icon :'fa fa-rectangle-list',
        label:'Orders'
    },
    {
        routeLink:'pages',
        icon :'fa fa-paperclip',
        label:'Pages'
    },
];