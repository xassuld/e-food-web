import { User } from "lucide-react";
import { MapPin, ChevronRight } from "lucide-react";
export default function Navigation() {
  return (
    <div className="w-full h-[172px] bg-black flex items-center justify-between px-[88px]">
      <div className="flex gap-3">
        <img src="logo.png" alt="hi" className="w-[46px]" />
        <div className="text-white">
          <div className="flex font-[600] text-[20px]">
            <p className="text-white">Nom</p>
            <p className="text-red-500">Nom</p>
          </div>
          <p className="text-[12px] font-[400]">Swift delivery</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="w-[251px] h-[36px] bg-white border rounded-full flex items-center px-2">
          <div className="flex gap-1 items-center">
            <User className="w-[20px] h-[20px] color-red-500" />
            <p className="text-[12px] font-400 text-[#71717A]">
              Test@gmail.com
            </p>
          </div>
        </div>
        <div className="w-[251px] h-[36px] bg-white border rounded-full flex items-center px-2">
          <div className="flex gap-1 items-center">
            <MapPin className="h-[20px] w-[20px] " />
            <p className="text-[12px] font-[400] text-red-500">
              Delivery address:
            </p>
            <p className="text-[12px] font-400 text-[#71717A]">Add Location</p>
            <ChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
}
