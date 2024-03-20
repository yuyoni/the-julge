import { NoticeList } from "@/lib/types/NoticeTypes";
import PostDetail from "../PostDetail";
import ApplicantList from "./ApplicantList";

export default function Employer({ noticeData }: { noticeData: NoticeList }) {
  return (
    <>
      <PostDetail userType="employer" noticeData={noticeData} />
      <ApplicantList />
    </>
  );
}
