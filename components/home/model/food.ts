import { Colors } from "@/constants/Colors";
import dayjs from "dayjs";

const 디데이정보_가져오기 = ({ 유효기간 }: { 유효기간: string }) => {
  const 오늘 = dayjs().startOf("day");
  const _유효기간 = dayjs(유효기간).startOf("day");
  const _디데이 = _유효기간.diff(오늘, "day");
  const 디데이 = Math.abs(_디데이);

  const 상태색상 = (() => {
    const 유효기간_지났는가 = _디데이 < 0;
    const 유효기간_임박한가 = _디데이 <= 7;

    if (유효기간_지났는가) {
      return Colors.light.text.danger;
    } else if (유효기간_임박한가) {
      return Colors.light.text.warning;
    }
    return Colors.light.text.primary;
  })();

  const 디데이_상태 = _디데이 < 0 ? "지남" : "남음";

  return { 디데이: 디데이, 디데이_상태, 상태색상 };
};

export { 디데이정보_가져오기 };
