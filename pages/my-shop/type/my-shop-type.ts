export interface IData {
  item: {
    id: string;
    email: string;
    type: "employer" | "employee";
    name: string;
    phone: string;
    address: string;
    bio: string;
    shop: {
      item: {
        id: string;
        name: string;
        category: string;
        address1: string;
        address2: string;
        description: string;
        imageUrl: string;
        originalHourlyPay: number;
      };
    };
  };
}
