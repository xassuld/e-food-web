import { User } from "lucide-react";
export default function Email() {
  return (
    <div className="w-[251px] h-[36px] bg-white border rounded-full flex items-center px-2">
      <div className="flex gap-1 items-center">
        <User className="w-[20px] h-[20px]" />
        <p className="text-[12px] font-400 text-[#71717A]">Test@gmail.com</p>
      </div>
    </div>
  );
}
