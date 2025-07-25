"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Clicked({ onClose }: { onClose: () => void }) {
  const [quantity, setQuantity] = useState(1);

  const handleMinus = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleAdd = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-[black]/40">
      <div className="w-[826px] h-[412px] flex p-6 gap-6 bg-white rounded-[20px] relative">
        <img
          src="prod-click.png"
          className="w-full h-full object-cover rounded-[12px]"
          alt="Product"
        />
        <div className="h-full w-full flex flex-col">
          <div className="w-full flex justify-end">
            <Button
              onClick={onClose}
              className="bg-[#FFF] text-black border border-[#e5e5e5] hover:bg-[#a7a7a7ee] rounded-full h-[36px] w-[36px] p-0"
            >
              x
            </Button>
          </div>
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col gap-3">
              <p className="text-[#EF4444] text-[30px] font-[600]">
                Sunshine Stackers
              </p>
              <p className="text-[16px]">
                Fluffy pancakes stacked with fruits, cream, syrup, and powdered
                sugar.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex justify-between">
                <div>
                  <p className="text-[16px]">Total price</p>
                  <p className="text-[24px] font-[600]">
                    ${(12.99 * quantity).toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    className="w-[44px] h-[44px] rounded-full bg-white border text-black hover:bg-[#a7a7a7ee] p-0 text-[20px]"
                    onClick={handleMinus}
                  >
                    -
                  </Button>
                  <p className="text-[18px] w-[24px] text-center">{quantity}</p>
                  <Button
                    className="w-[44px] h-[44px] rounded-full bg-white border text-black hover:bg-[#a7a7a7ee] p-0 text-[20px]"
                    onClick={handleAdd}
                  >
                    +
                  </Button>
                </div>
              </div>
              <Button className="h-[44px] px-[32px] py-[8px] rounded-full">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
