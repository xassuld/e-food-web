"use client";
import { useState } from "react";
import Card from "./card";
import Clicked from "./click-food";

export default function Body() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-[#404040] flex flex-col items-center">
      <div className="flex flex-col mt-[88px] gap-[54px] w-[1264px]">
        <h2 className="text-white text-[30px] font-[600]">Appetizers</h2>
        <div className="flex gap-9 flex-wrap">
          <Card onClick={openModal} />
          <Card onClick={openModal} />
          <Card onClick={openModal} />
          <Card onClick={openModal} />
          <Card onClick={openModal} />
          <Card onClick={openModal} />
        </div>

        {isModalOpen && <Clicked onClose={closeModal} />}
      </div>
      <div className="flex flex-col mt-[88px] gap-[54px] w-[1264px]">
        <h2 className="text-white text-[30px] font-[600]">Appetizers</h2>
        <div className="flex gap-9 flex-wrap">
          <Card onClick={openModal} />
          <Card onClick={openModal} />
          <Card onClick={openModal} />
          <Card onClick={openModal} />
          <Card onClick={openModal} />
          <Card onClick={openModal} />
        </div>
      </div>
      <div className="flex flex-col mt-[88px] gap-[54px] w-[1264px]">
        <h2 className="text-white text-[30px] font-[600]">Appetizers</h2>
        <div className="flex gap-9 flex-wrap">
          <Card onClick={openModal} />
          <Card onClick={openModal} />
          <Card onClick={openModal} />
          <Card onClick={openModal} />
          <Card onClick={openModal} />
          <Card onClick={openModal} />
        </div>
      </div>
      <div className="flex flex-col mt-[88px] gap-[54px] w-[1264px]">
        <h2 className="text-white text-[30px] font-[600]">Appetizers</h2>
        <div className="flex gap-9 flex-wrap">
          <Card onClick={openModal} />
          <Card onClick={openModal} />
          <Card onClick={openModal} />
          <Card onClick={openModal} />
          <Card onClick={openModal} />
          <Card onClick={openModal} />
        </div>
      </div>
    </div>
  );
}
