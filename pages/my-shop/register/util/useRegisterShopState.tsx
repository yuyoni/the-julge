import { useState, useEffect, useRef } from "react";

import { ShopInfo, ShopData } from "../../type/shop-type";

export default function useRegisterShopState({
  variant = "default",
  shop,
}: {
  variant?: string;
  shop?: ShopData;
}) {
  const [shopName, setShopName] = useState<string>(shop?.item.name || "");
  const [category, setCategory] = useState<ShopInfo["category"] | string>(
    shop?.item.category || "",
  );
  const [address, setAddress] = useState<ShopInfo["address1"] | string>(
    shop?.item.address1 || "",
  );
  const [detailAddress, setDetailAddress] = useState<string>(
    shop?.item.address2 || "",
  );
  const [defaultHourlyWage, setDefaultHourlyWage] = useState<
    number | undefined
  >(shop?.item.originalHourlyPay);
  const [selectedImage, setSelectedImage] = useState<string>(
    shop?.item.imageUrl || "",
  );
  const preselectedImageRef = useRef<HTMLImageElement>(null);
  const [description, setDescription] = useState<string>(
    shop?.item.description || "",
  );
  const [isAllFilled, setIsAllFilled] = useState<boolean>(false);

  useEffect(() => {
    if (variant === "funnel") return;
    if (
      shopName &&
      category &&
      address &&
      detailAddress &&
      (selectedImage || preselectedImageRef.current) &&
      defaultHourlyWage &&
      description
    ) {
      setIsAllFilled(true);
    } else {
      setIsAllFilled(false);
    }
  }, [
    address,
    category,
    defaultHourlyWage,
    description,
    detailAddress,
    selectedImage,
    shopName,
    variant,
  ]);

  return {
    shopName,
    setShopName,
    category,
    setCategory,
    address,
    setAddress,
    detailAddress,
    setDetailAddress,
    defaultHourlyWage,
    setDefaultHourlyWage,
    selectedImage,
    setSelectedImage,
    preselectedImageRef,
    description,
    setDescription,
    isAllFilled,
    setIsAllFilled,
  };
}
