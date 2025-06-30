import Logo from "../hasa/logo";
import Location from "../hasa/location";
import Email from "../hasa/email";
import Card from "../hasa/card";
export default function First() {
  return (
    <div className="w-screen flex flex-col">
      {/* NAVIGATION */}
      <div className="w-full h-[172px] bg-black flex items-center justify-between px-[88px]">
        <Logo />
        <div className="flex flex-col gap-2">
          <Email />
          <Location />
        </div>
      </div>

      {/* BODY */}
      <div>
        <img src="Image÷.png" alt="" />
      </div>
      {/* APPETIZERS */}
      <div className="bg-[#404040] flex flex-col items-center">
        <div className="flex flex-col mt-[88px] gap-[54px] w-[1264px]">
          <h2 className="text-white text-[30px] font-[600]">Appetizers</h2>
          <div className="flex gap-9 flex-wrap">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="flex flex-col mt-[54px] gap-[54px] w-[1264px]">
          <h2 className="text-white text-[30px] font-[600]">Salads</h2>
          <div className="flex gap-9 flex-wrap">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="flex flex-col mt-[54px] gap-[54px] w-[1264px]">
          <h2 className="text-white text-[30px] font-[600]">Lunch Favorite</h2>
          <div className="flex gap-9 flex-wrap">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="flex flex-col mt-[54px] mb-[88px] gap-[54px] w-[1264px]">
          <h2 className="text-white text-[30px] font-[600]">Salads</h2>
          <div className="flex gap-9 flex-wrap">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      {/* FOOTER */}
      <div className="w-full h-[755px] bg-black">
        <div className="bg-[#EF4444] flex mt-[60px] w-full h-[92px] px-7 py-[98px] justify-center">
          <div className="flex items-center gap-[34px] text-[30px] font-[600] text-white">
            <p>Fresh fast delivered</p>
            <p>Fresh fast delivered</p>
            <p>Fresh fast delivered</p>
            <p>Fresh fast delivered</p>
          </div>
        </div>
      </div>
    </div>
  );
}
