"use client";

import { Button } from "@/app/components/reusable/Button";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  id: string | number;
  name: string;
}


export default function ProductCard({ id, name } : ProductCardProps) {
  const router = useRouter();

  return (
    <div
      className=" p-4 border"
    >
      <h3>{name}</h3>
      <Button onClick={() => router.push(`/about/${id}`)} label="Dynamic" variant={"primary"} size={"sm"} fullWidth={false} className="cursor-pointer"/>

      <h1>Products</h1>
    </div>
  );
}
