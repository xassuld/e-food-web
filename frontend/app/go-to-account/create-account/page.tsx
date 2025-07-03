import Account from "../../hasa/account";
export default function Home() {
  return (
    <div className="w-screen h-screen flex bg-white items-center justify-around">
      <div>
        <Account text="Create your account" />
      </div>
      <div>
        <img src="/hero.png" className="w-[1200px] h-[1000px] rounded-2xl" />
      </div>
    </div>
  );
}
