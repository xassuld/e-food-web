import { MapPin, ChevronRight } from "lucide-react";
export default function Location() {
  return (
    <div className="w-[251px] h-[36px] bg-white border rounded-full flex items-center px-2">
      <div className="flex gap-1 items-center">
        <MapPin className="h-[20px] w-[20px] " />
        <p className="text-[12px] font-[400] text-red-500">Delivery address:</p>
        <p className="text-[12px] font-400 text-[#71717A]">Add Location</p>
        <ChevronRight />
      </div>
    </div>
  );
}
