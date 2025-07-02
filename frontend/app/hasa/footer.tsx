export default function Footer() {
  return (
    <div className="w-full h-[755px] bg-black flex flex-col items-center">
      <div className="bg-[#EF4444] flex mt-[60px] w-full h-[92px] justify-center">
        <div className="flex items-center gap-[34px] text-[30px] font-[600] text-white">
          <p>Fresh fast delivered</p>
          <p>Fresh fast delivered</p>
          <p>Fresh fast delivered</p>
          <p>Fresh fast delivered</p>
        </div>
      </div>
      {/* SECTIONS */}
      <div className="flex gap-[220px] mt-[76px] w-[1264px]">
        <div className="flex flex-col items-center w-[88px]">
          <img src="logo.png" className="w-[46px]" />
          <div className="flex flex-col items-center">
            <p className="text-white flex text-[20px] font-[600]">
              Nom<span className="text-red-500">Nom</span>
            </p>
            <p className="text-white text-[12px] font-[400]">Swift Delivery</p>
          </div>
        </div>
        <div className="flex gap-[112px]">
          <div className="flex flex-col gap-4 text-[16px]">
            <p className="text-[#71717A]">NOMNOM</p>
            <p className="text-[16px] text-white flex flex-col gap-4">
              <span>Home</span>
              <span>Contact us</span>
              <span>Delivery zone</span>
            </p>
          </div>
          <div className="flex gap-[56px]">
            <div>
              <div className="flex flex-col gap-4 text-[16px]">
                <p className="text-[#71717A]">MENU</p>
                <p className="text-[16px] text-white flex flex-col gap-4">
                  <span>Appetizers</span>
                  <span>Salads</span>
                  <span>Pizzas</span>
                  <span>Main Dishes</span>
                  <span>Desserts</span>
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-end gap-4 text-[16px] h-full">
                <p className="text-[16px] text-white flex flex-col gap-4">
                  <span>Side Dish</span>
                  <span>Brunch</span>
                  <span>Desserts</span>
                  <span>Beverages</span>
                  <span>Fish & Sea foods</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[#71717A]">FOLLOW US</p>
            <div className="flex gap-4">
              <img src="fb.png" className="w-[28px]" />
              <img src="ig.png" className="w-[28px]" />
            </div>
          </div>
        </div>
      </div>
      {/* DOOD TAL */}
      <div className="w-[1264px] flex items-center gap-12 py-8 border-t border-t-[#71717A] mt-[104px] text-[#71717A]">
        <div className="flex gap-1">
          <p>Copy right 2024</p>
          <p>©</p>
          <p>Nomnom LLC</p>
        </div>
        <p>Privacy policy</p>
        <p>Terms and condition</p>
        <p>Cookie policy</p>
      </div>
    </div>
  );
}
