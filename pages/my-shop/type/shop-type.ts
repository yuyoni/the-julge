// shopRequest body data
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

// shopRequest Response data
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
        name?: string; // optional
        phone?: string; // optional
        address?: string; // optional
        bio?: string; // optional
      };
      href: string;
    };
  };
  links: Links[];
}

// createPresigned의 response data
interface CreatePresignedURLData {
  item: {
    url: "string"; // Presigned URL
  };
  links: Links[];
}

export type { ShopInfo, ShopData };
