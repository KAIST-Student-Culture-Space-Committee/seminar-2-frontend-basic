"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface ReservationType {
  id: number;
  roomId: number;
  roomName: string;
  reservationName: string;
  userName: string;
}

const reservationList: ReservationType[] = [
  // 강의실 A 예약
  ...Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    roomId: 1,
    roomName: "강의실 A",
    reservationName: `예약 A-${i + 1}`,
    userName: `사용자 A${i + 1}`,
  })),

  // 강의실 B 예약
  ...Array.from({ length: 10 }, (_, i) => ({
    id: i + 11,
    roomId: 2,
    roomName: "강의실 B",
    reservationName: `예약 B-${i + 1}`,
    userName: `사용자 B${i + 1}`,
  })),

  // 강의실 C 예약
  ...Array.from({ length: 10 }, (_, i) => ({
    id: i + 21,
    roomId: 3,
    roomName: "강의실 C",
    reservationName: `예약 C-${i + 1}`,
    userName: `사용자 C${i + 1}`,
  })),
];

export default function ReservationDetailPage() {
  const params = useParams();
  const id = parseInt(params.id as string, 10); // URL의 [id] 부분을 숫자로 변환

  if (isNaN(id) || id <= 0 || id >= 18) {
    // 18 is the number of spaces
    // id가 유효한 숫자가 아닌 경우 처리
    return <p>Invalid ID provided.</p>;
  }

  const [reservations, setReservations] = useState<ReservationType[]>([]);

  useEffect(() => {
    // 마운트 시 예약 목록을 가져오는 예시
    // setReservations(reservationList);
    setReservations(reservationList.filter((r) => r.roomId === id));
    // TODO: 예약 목록중 reservation list에서 roomId 에 맞게 reservations 만들기 (hint: filter 사용)
    console.log("예약 목록이 로드되었습니다.", reservationList);
  }, []);

  return (
    <table className="table manage">
      <thead>
        <tr>
          <th>id</th>
          <th>roomId</th>
          <th>roomName</th>
          <th>reservationName</th>
          <th>userName</th>
        </tr>
      </thead>

      <tbody>
        {
          // 예시 row
        }
        <tr>
          <td>0</td>
          <td>0</td>
          <td>방이름</td>
          <td>예약 예시</td>
          <td>예약자명 예시</td>
        </tr>

        {
          // TODO: reservations 를 활용해서 row 만들기
          // hint: map 활용
          reservations.map((r) => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.roomId}</td>
              <td>{r.roomName}</td>
              <td>{r.reservationName}</td>
              <td>{r.userName}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}
