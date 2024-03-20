import Button from "@/components/Button/Button";
import { useState } from "react";

export default function EmployerButton() {
  const [isMyNotice, setIsMyNotice] = useState(false);

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
