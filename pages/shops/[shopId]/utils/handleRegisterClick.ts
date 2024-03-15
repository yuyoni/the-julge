import { NextRouter } from "next/router";
import { FormDataType } from "../types/types";
import { ShowToastType } from "@/contexts/ToastContext";

export default function handleRegisterClick(
  formData: FormDataType,
  showToast: ShowToastType,
  router: NextRouter,
) {
  if (
    formData.wage.trim() === "" ||
    formData.start_at.trim() === "" ||
    formData.work_time.trim() === "" ||
    formData.description.trim() === ""
  ) {
    showToast("모든 필드를 작성해주세요.");
    return;
  }
  if (isNaN(Number(formData.wage)) || isNaN(Number(formData.work_time))) {
    showToast("시급과 업무 시간은 숫자로 입력해주세요.");
    return;
  }

  const confirmed = window.confirm(
    `\n시급: ${formData.wage}\n시작 일시: ${formData.start_at}\n업무 시간: ${formData.work_time}\n공고 설명: ${formData.description}\n\n등록하시겠습니까?`,
  );
  if (confirmed) {
    router.push("/"); // 공고 등록 한 후 id를 이용해 shops/${shopId}/notices/${noticeId}로 이동해야함
    showToast("등록되었습니다!");
  }
}
