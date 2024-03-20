import { Data } from "@/components/Table";
import { ApplicantItem } from "@/lib/types/Application";

export default function transformItems(items: ApplicantItem[]): Data[] {
  const newItems = items.map((element) => ({
    id: element.item.user.item.id,
    name: element.item.user.item.name,
    bio: element.item.user.item.bio,
    phone: element.item.user.item.phone,
    status: element.item.status,
    applicationId: element.item.id,
  }));
  return newItems;
}
