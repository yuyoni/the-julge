import Button from "@/components/Button/Button";
import useFetchData from "@/hooks/useFetchData";
import { NoticeList } from "@/lib/types/NoticeTypes";
import { UserData } from "@/lib/types/userType";
import { useRouter } from "next/router";

interface EmployerButtonProps {
  isMyNotice: boolean;
  token: string;
  userInfo: UserData | null;
}

export default function EmployerButton({
  isMyNotice,
  token,
  userInfo,
}: EmployerButtonProps) {
  const router = useRouter();
  const { shopId, noticeId } = router.query;
  const { data } = useFetchData<NoticeList>(
    `/shops/${shopId}/notices/${noticeId}`,
    "noticeEditable",
  );

  const handleEditButtonClick = () => {
    router.push(`/shops/${shopId}/notices/${noticeId}/edit`);
  };

  return (
    <>
      {isMyNotice && !data?.item.closed ? (
        <Button
          text="공고 편집하기"
          color="white"
          handleClick={handleEditButtonClick}
        />
      ) : (
        <Button text="공고 편집하기" color="gray" />
      )}
    </>
  );
}
