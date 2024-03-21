import Button from "@/components/Button/Button";
import useFetchData from "@/hooks/useFetchData";
import { NoticeList } from "@/lib/types/NoticeTypes";
import { UserData } from "@/lib/types/userType";
import { useRouter } from "next/router";

interface EmployerButtonProps {
  isMyNotice: boolean;
  isClosed: boolean;
  isOutdated: boolean;
  token: string;
  userInfo: UserData | null;
}

export default function EmployerButton({
  isMyNotice,
  isClosed,
  isOutdated,
  token,
  userInfo,
}: EmployerButtonProps) {
  const router = useRouter();
  const { shopId, noticeId } = router.query;

  const handleEditButtonClick = () => {
    router.push(`/shops/${shopId}/notices/${noticeId}/edit`);
  };

  if (isMyNotice) {
    if (isClosed || isOutdated) {
      return <Button text="공고 마감 및 만료" color="gray" />;
    }
    return (
      <Button
        text="공고 편집하기"
        color="white"
        handleClick={handleEditButtonClick}
      />
    );
  } else {
    return <Button text="공고 편집하기" color="gray" />;
  }
}
