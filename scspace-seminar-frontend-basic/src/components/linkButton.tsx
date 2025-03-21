"use client";

import Link from "next/link";

interface LinkBtnProps {
  text: string;
}

const LinkButton: React.FC<LinkBtnProps> = ({ text }: LinkBtnProps) => {
  return (
    <button>
      <Link href="/about">{text}</Link>
    </button>
  );
};

export default LinkButton;
