import Card from "./card";

export default function Body() {
  return (
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
  );
}
