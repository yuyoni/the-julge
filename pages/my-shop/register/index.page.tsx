import DropDown from "@/components/DropDown";
import Gnb from "@/components/Gnb";
import { addressArray } from "@/lib/constants/options";
import Input from "../components/Input";

export default function Register() {
  return (
    <>
      <Gnb />
      <h1>가게 정보</h1>
      <Input label="가게 이름*" />
      <Input label="분류*" placeholder="선택" includeImage />
      <Input label="주소*" placeholder="선택" includeImage />
      <Input label="기본 시급*" includeText="원" />
      <Input label="상세 주소*" />
      <Input label="가게 설명" />
      <DropDown label="주소" categories={addressArray} />
    </>
  );
}
