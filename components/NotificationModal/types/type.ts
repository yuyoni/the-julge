export type Notification = {
  name: string;
  result: string;
  elapsedTime: string;
  formattedTime: string;
};

export type NotificationItem = {
  item: {
    id: string;
    createdAt: string;
    result: string;
    shop: {
      item: {
        name: string;
      };
    };
    notice: {
      item: {
        startsAt: string;
        workhour: number;
      };
    };
  };
};
