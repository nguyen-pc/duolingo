import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export const Quests = () => {
  return (
    <div className="border-2 rounded-2xl p-4 space-y-4">
      <div className="flex items-center justify-between w-full space-y-2">
        <h3 className="font-bold text-lg">Quests</h3>
        <Link href="/quest">
          <Button size="sm" variant="primaryOutline">
            View all
          </Button>
        </Link>
      </div>
    </div>
  );
};
