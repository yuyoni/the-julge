import Button from "@/components/Button/Button";
import { UserData } from "@/lib/types/userType";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface EmployerButtonProps {
  token: string;
  userInfo: UserData | null;
}

export default function EmployerButton({
  token,
  userInfo,
}: EmployerButtonProps) {
  const [isMyNotice, setIsMyNotice] = useState(false);
  const router = useRouter();
  const { shopId } = router.query;
  console.log(userInfo);

  useEffect(() => {
    console.log(userInfo?.item.shop?.item.id === shopId);
    if (userInfo?.item.shop?.item.id === shopId) {
      setIsMyNotice(true);
    }
  }, []);

  const handleEditButtonClick = () => {
    // 공고 편집 버튼 클릭 시 실행되는 기능 구현
    // 필요한 로직 구현
  };

  return (
    <>
      {/** 내 공고인 경우 */}
      {isMyNotice && (
        <Button
          text="공고 편집하기"
          color="white"
          handleClick={handleEditButtonClick}
        />
      )}
      {/** 내 공고가 아닌 경우 */}
      {!isMyNotice && (
        <Button
          text="공고 편집하기"
          color="gray"
          handleClick={handleEditButtonClick}
        />
      )}
    </>
  );
}
