// example of Menu - Food, Drinks
export interface Menu {
  id: string;
  categoryName: string;
  imageUrl: string;
}

// example of SubMenu - Appetizers, Snacks, Main Course, Dessert
export interface SubMenu {
  id: string;
  name: string;
  menuList: MenuItem[];
}

export interface MenuItem {
  id?: string;
  name: string;
  price: string;
  description: string;
  isVeg?: boolean;
  imageUrl?: string;
}

export interface VegNonVegProps {
  isVeg?: boolean;
}