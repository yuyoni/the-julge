import { Shop } from "../../type/my-shop-type";
import { registerShop, updateShopInfo } from "./shopRequest";
import fetchData from "@/lib/apis/fetchData";
import { ShopData } from "../../components/MyshopForm/shop-type";
import { useUser } from "@/contexts/UserContext";
import useCookie from "@/hooks/useCookies";

export const sendRegisterShopRequest = async (
  shopName: string,
  category: string,
  address: string,
  detailAddress: string,
  defaultHourlyWage: string,
  selectedImage: string,
  description: string,
  token: string,
) => {
  const requestData = {
    name: shopName,
    category: category,
    address1: address,
    address2: detailAddress,
    originalHourlyPay: defaultHourlyWage,
    imageUrl: selectedImage,
    description: description,
    token,
  };

  try {
    const response = await fetchData<ShopData>({
      param: "/shops",
      method: "post",
      requestData: requestData,
      token: token,
    });
    return response;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
};
