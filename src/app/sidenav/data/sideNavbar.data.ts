import { ItemsNavbarData } from "./interface";
import { animate, keyframes, state, style, transition, trigger } from "@angular/animations";

export const fadeInOut = trigger('fadeInOut', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('350ms',
            style({ opacity: 1 })
        )
    ]),
    transition(':leave', [
        style({ opacity: 1 }),
        animate('350ms',
            style({ opacity: 0 })
        )
    ])
])

export const subMenu = trigger('submenu', [
    state('hidden', style({
        height: '0',
        overflow: 'hidden'
    })),
    state('visible', style({
        height: '*'
    })),
    transition('visible <=> hidden', [style({ overflow: 'hidden' }),
    animate('{{transitionParams}}')]),
    transition('void => *', animate(0))
])

export const rotate = trigger('rotate', [
    transition(':enter', [
        animate('1050ms',
            keyframes([
                style({ transform: 'rotate(0deg)', offset: '0' }),
                style({ transform: 'rotate(1turn)', offset: '1' })
            ]))
    ])
])

export const navbarData: ItemsNavbarData[] = [
    {
        routeLink: 'dashboard',
        icon: 'fa fa-light fa-house',
        label: 'Dashboard',
    },
    {
        routeLink: 'products',
        icon: 'fa  fa-box-open',
        label: 'Products',
        expanded: false,
        items: [
            {
                routeLink: 'products/list',
                label: 'Product List'
            },
            {
                routeLink: 'products/create',
                label: 'Add Product'
            },
        ]
    },
    {
        routeLink: 'category',
        icon: 'fa-solid fa-cubes-stacked',
        label: 'Category',
    },
    {
        routeLink: 'category',
        icon: 'fa-solid fa-cubes-stacked',
        label: 'Category',
        items: [
            {
                routeLink: 'category/list',
                label: 'Category List',
            },
            {
                routeLink: 'category/add',
                label: 'Add Category',
            }
        ]
    },
    {
        routeLink: 'statistics',
        icon: 'fa fa-chart-bar',
        label: 'Statistics',
    },
    {
        routeLink: 'coupens',
        icon: 'fa fa-tags',
        label: 'Coupens',
        expanded: false,
        items: [
            {
                routeLink: 'coupens/list',
                label: 'List Coupens'
            },
            {
                routeLink: 'coupens/create',
                label: 'Create Coupens'
            },
        ]
    },
    {
        routeLink: 'orders',
        icon: 'fa fa-rectangle-list',
        label: 'Orders',
        expanded: false,
    },
    {
        routeLink: 'setting',
        icon: 'fa fa-cog',
        label: 'Setting',
        expanded: false,
        items: [
            {
                routeLink: 'seting/profile',
                label: 'Profile'
            },
            {
                routeLink: 'coupens/customize',
                label: 'Customize'
            },
        ]
    },
    {
        routeLink: 'pages',
        icon: 'fa fa-paperclip',
        label: 'Pages'
    },
];