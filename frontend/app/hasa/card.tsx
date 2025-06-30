export default function Card() {
  return (
    <div className="w-[397px] p-4 bg-white flex flex-col gap-5 rounded-[20px]">
      <img src="prod.png" />
      <div className="flex flex-col gap-2">
        <div className="flex justify-between font-[600]">
          <p className="text-red-500 text-[24px]">Finger Food</p>
          <p className="text-[18px]">$12.99</p>
        </div>
        <p>
          Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.
        </p>
      </div>
    </div>
  );
}
