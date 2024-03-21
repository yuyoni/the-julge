export interface IData {
  item: {
    id: string;
    email: string;
    type: "employer" | "employee";
    name: string; // optional
    phone: string; // optional
    address: string; // optional
    bio: string; // optional
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
    }; // 또는 null
  };
}
