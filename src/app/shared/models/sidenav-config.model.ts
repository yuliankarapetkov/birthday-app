export const enum SidenavItemAction {
    SignOut
}

export interface SidenavItem {
    name: string;
    icon: string;
    isLinkItem: boolean;
    link?: string;
    action?: SidenavItemAction;
}

export interface SidenavSection {
    name?: string;
    hasDivider: boolean;
    items: SidenavItem[];
}

export interface SidenavConfig {
    sections: SidenavSection[];
}