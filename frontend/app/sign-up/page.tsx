import Account from "../components/container";
export default function Home() {
  return (
    <div className="w-screen h-screen flex bg-white items-center justify-around">
      <div>
        <Account />
      </div>
      <div>
        <img
          src="kai-pilger-tL92LY152Sk-unsplash 1.png"
          className="w-[856px] h-[904px] rounded-2xl"
        />
      </div>
    </div>
  );
}
