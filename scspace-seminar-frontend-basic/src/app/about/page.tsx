"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <h1>About 페이지 입니다!</h1>
      <Link href={`/reservations`}>예약으로 돌아가기</Link>
    </>
  );
}
