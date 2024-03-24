import { SelectedLocationList } from "@/components/Filter/types/types";
import { NoticeItem } from "@/lib/types/NoticeTypes";

interface BasicHeaderActions {
  handleCategoryChange: (category: string) => void;
  handleToggleModal: () => void;
}

export interface AllNoticeHeaderProps extends BasicHeaderActions {
  sortStr: string;
  isModalVisible: boolean;
  onApplyFilter: (
    locations: SelectedLocationList,
    startsAt: string,
    hourlyPay: string,
  ) => void;
  keyword?: string;
}

export interface HeaderButtonsProps extends BasicHeaderActions {
  sortStr: string;
}

export interface AllNoticeProps {
  keyword: string;
  initialPage: number;
}

export interface PostListProps {
  isRecommend: boolean;
  noticeArray: NoticeItem[];
  address?: string;
}
