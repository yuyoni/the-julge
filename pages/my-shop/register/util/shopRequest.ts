import fetchData from "@/lib/apis/fetchData";
import useCookie from "@/hooks/useCookies";
import { ShopData, ShopInfo } from "../../type/shop-type";
import { useUser } from "@/contexts/UserContext";

const registerShop = async (shopInfo: ShopInfo) => {
  const { userInfo } = useUser();
  const { jwt: token } = useCookie();

  try {
    const response = await fetchData<ShopData>({
      param: "/shops",
      method: "post",
      requestData: shopInfo,
      token: token,
    });
    return response;
  } catch (error) {
    console.error("Error: ", error);
  }
};

const updateShopInfo = async (shopId: string, shopInfo: ShopInfo) => {
  const { jwt: token } = useCookie();

  try {
    const response = await fetchData<ShopData>({
      param: `/shops/${shopId}`,
      method: "put",
      requestData: shopInfo,
      token: token,
    });
    return response;
  } catch (error) {
    console.error("Error: ", error);
  }
};

export { registerShop, updateShopInfo };
