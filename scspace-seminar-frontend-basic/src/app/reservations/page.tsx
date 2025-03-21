"use client";

// pages/reservations/index.tsx
import { useState } from "react";
import Link from "next/link";
import LinkButton from "@/components/linkButton";

const reservationList = [
  { id: 1, name: "강의실 A" },
  { id: 2, name: "강의실 B" },
  { id: 3, name: "강의실 C" },
];

export default function ReservationsPage() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div>
      <h1>📌 공간 예약하기</h1>
      <ul>
        {reservationList.map(room => (
          <li
            key={room.id}
            style={{
              padding: "8px",
              margin: "4px",
              cursor: "pointer",
              backgroundColor: selectedId === room.id ? "#cceeff" : "#eeeeee",
            }}
            onClick={() => setSelectedId(room.id)}
          >
            <Link href={`/reservations/${room.id}`}>{room.name}</Link>
          </li>
        ))}
      </ul>
      {
        // TODO: LinkButton 컴포넌트를 활용하여 about 으로 가는 링크 버튼을 만들기
        <LinkButton
          text = "about"
        />
      } 
    </div>
  );
}
