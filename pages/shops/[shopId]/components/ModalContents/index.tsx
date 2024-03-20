import Modal from "@/components/Modal";
import { FormDataType } from "@/lib/types/FormDataType";

interface ModalContentProps {
  formData: FormDataType;
  handleYesClick: () => void;
  handleNoClick: () => void;
}

export default function ModalContent({
  formData,
  handleYesClick,
  handleNoClick,
}: ModalContentProps) {
  const { hourlyPay, startsAt, workhour, description } = formData;
  return (
    <Modal
      modalIcon="check"
      modalText={`시급: ${hourlyPay}원
              시작 일시: ${startsAt}
              업무 시간: ${workhour}
              공고 설명: ${description}
              
              등록하시겠습니까?
            `}
      handleYesClick={handleYesClick}
      handleNoClick={handleNoClick}
    />
  );
}
