interface Links {
  rel: string;
  description: string;
  method: string;
  href: string;
  query?: object[];
  body?: object;
}

interface ShopInfo {
  name: string;
  category: string;
  address1: string;
  address2: string;
  description: string;
  imageUrl: string;
  originalHourlyPay: number;
}

interface ShopData {
  item: {
    id: string;
    name: string;
    category: string;
    address1: string;
    address2: string;
    description: string;
    imageUrl: string;
    originalHourlyPay: number;
    user: {
      item: {
        id: string;
        email: string;
        type: string;
        name?: string;
        phone?: string;
        address?: string;
        bio?: string;
      };
      href: string;
    };
  };
  links: Links[];
}

interface CreatePresignedURLData {
  item: {
    url: "string";
  };
  links: Links[];
}

export type { ShopInfo, ShopData };
