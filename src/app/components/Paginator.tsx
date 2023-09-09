"use client";
import { Pagination } from "@nextui-org/react";
import { useRouter } from "next/navigation";
type Props = {
  topic: string;
  page: number;
  totalPages: number;
};

export default function Paginator({ topic, page, totalPages }: Props) {
  const router = useRouter();

  const changePage = (page: string) => {
    router.push(`/results/${topic}/${page}`);
  };
  if (!totalPages) return null;

  return (
    <div className="flex justify-center">
      <Pagination
        total={totalPages}
        initialPage={page}
        onChange={(e) => changePage(String(e))}
        loop showControls
      />
    </div>
  );
}
