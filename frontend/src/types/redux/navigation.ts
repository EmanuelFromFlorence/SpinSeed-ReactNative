export interface NavigationState {
  sidebarOpened: boolean;
  activeItem: any;
}

export enum NavigationActionTypes {
  OPEN_SIDEBAR = 'OPEN_SIDEBAR',
  CLOSE_SIDEBAR = 'CLOSE_SIDEBAR',
  CHANGE_ACTIVE_SIDEBAR_ITEM = 'CHANGE_ACTIVE_SIDEBAR_ITEM',
}

interface OpenSidebar {
  type: NavigationActionTypes.OPEN_SIDEBAR;
}

interface CloseSidebar {
  type: NavigationActionTypes.CLOSE_SIDEBAR;
}

interface ChangeActiveSidebarItem {
  type: NavigationActionTypes.CHANGE_ACTIVE_SIDEBAR_ITEM;
  payload: any;
}

export type NavigationAction =
  | OpenSidebar
  | CloseSidebar
  | ChangeActiveSidebarItem;
