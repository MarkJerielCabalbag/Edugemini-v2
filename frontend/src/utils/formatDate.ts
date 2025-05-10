import { formatDistanceToNow } from "date-fns";

export function formatTimestampToRelativeTime(timestamp: string) {
  return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
}
