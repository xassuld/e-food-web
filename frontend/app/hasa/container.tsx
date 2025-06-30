"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

function Account() {
  const [email, setEmail] = useState("");
  const [wasSubmitted, setWasSubmitted] = useState(false);
  const router = useRouter();

  const isValidFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isGmail = email.endsWith("@gmail.com");
  const isValidEmail = isValidFormat && isGmail;
  const showError = wasSubmitted && !isValidEmail;

  const handleSubmit = () => {
    setWasSubmitted(true);
    if (!isValidEmail) return;

    router.push("/sign-up/password");
  };

  return (
    <div className="flex w-[416px] flex-col justify-center items-start gap-6">
      {/* ICON */}
      <button className="w-[36px] h-[36px] px-[8px] py-[16px] border rounded-[6px] flex items-center justify-center hover:cursor-pointer">
        <ChevronLeft />
      </button>

      {/* HEADER */}
      <div className="flex flex-col items-start gap-1">
        <h3 className="text-[24px] font-[600]">Create your account</h3>
        <p className="text-[16px] font-[400] text-[#71717A]">
          Sign up to explore your favorite dishes.
        </p>
      </div>

      {/* EMAIL */}
      <div className="w-full flex flex-col gap-1">
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border w-full px-2 py-[12px] rounded-[6px] hover:cursor-pointer"
        />
        {showError && (
          <p className="text-red-500 text-sm">
            Invalid email. Use a format like example@gmail.com
          </p>
        )}
      </div>

      {/* LET'S GO */}
      <button
        onClick={handleSubmit}
        disabled={!email}
        className={`flex h-[36px] py-[32px] justify-center items-center w-full rounded-[6px] hover:cursor-pointer transition
          ${
            isValidEmail
              ? "bg-[#1b1b1b] text-white hover:bg-[#303030]"
              : "bg-[#242424] text-gray-300"
          }`}
      >
        <p className="text-[14px] font-[500]">Let's Go</p>
      </button>

      {/* SIGN UP? */}
      <div className="flex justify-center items-center gap-3 w-full">
        <p className="text-[16px] font-[400] text-[#71717A]">
          Already have an account?
        </p>
        <p className="text-[16px] font-[400] text-[#2563EB] hover:cursor-pointer">
          Log in
        </p>
      </div>
    </div>
  );
}

export default Account;
