export default function Logo() {
  return (
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
  );
}
