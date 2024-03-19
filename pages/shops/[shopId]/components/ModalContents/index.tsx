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
  return (
    <Modal
      modalIcon="check"
      modalText={`시급: ${formData.hourlyPay}원
              시작 일시: ${formData.startsAt}
              업무 시간: ${formData.workhour}
              공고 설명: ${formData.description}
              
              등록하시겠습니까?
            `}
      handleYesClick={handleYesClick}
      handleNoClick={handleNoClick}
    />
  );
}
