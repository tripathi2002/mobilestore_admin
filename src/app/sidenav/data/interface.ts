export interface Interface {
}

export interface SideNavToggle {
    screenWidth: number;
    collapsed: boolean;
}

export interface ItemsNavbarData {
    routeLink: string;
    icon?: string;
    label: string;
    expanded?: boolean;
    items?: ItemsNavbarData[];
}