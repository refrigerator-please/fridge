import dayjs from "dayjs";

const getDueDate = ({ date }: { date: string }) => {
  const today = dayjs().startOf("day");
  const targetDate = dayjs(date).startOf("day");
  const dueDate = targetDate.diff(today, "day");

  return { dueDate };
};

export { getDueDate };
