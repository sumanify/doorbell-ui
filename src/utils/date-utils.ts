import moment from "moment";

export const getTimeAgo = (timestamp: string) => {
  const momentTimestamp = moment(timestamp, "YYYYMMDDHHmm");
  const timeAgo = momentTimestamp.fromNow();

  return timeAgo;
};
