import Password from "@/app/hasa/log-in";
export default function Home() {
  return (
    <div className="w-screen h-screen flex bg-white items-center justify-around">
      <div className="flex justify-around w-full h-full items-center">
        <Password text="Log into your account" />
        <img src="/hero.png" className="w-[1200px] h-[1000px] rounded-2xl" />
      </div>
    </div>
  );
}
