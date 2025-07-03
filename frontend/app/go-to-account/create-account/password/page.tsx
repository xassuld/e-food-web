import { ChevronLeft } from "lucide-react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const passSchema = yup.object({
  password: yup
    .string()
    .matches(/@gmail\.com$/, "Email must be a Gmail address")
    .required("Please enter your email"),
});

type EmailFormData = yup.InferType<typeof passSchema>;

export default function Password() {
  return (
    <div className="w-screen h-screen flex bg-white items-center justify-around">
      <div className="flex w-[416px] flex-col justify-center items-start gap-6">
        {/* ICON */}
        <button className="w-[36px] h-[36px] px-[8px] py-[16px] border rounded-[6px] flex items-center justify-center hover:cursor-pointer">
          <ChevronLeft />
        </button>

        {/* HEADER */}
        <div className="flex flex-col items-start gap-1">
          <h3 className="text-[24px] font-[600]">Create a strong password</h3>
          <p className="text-[16px] font-[400] text-[#71717A]">
            Sign up to explore your favorite dishes.
          </p>
        </div>

        {/* PASSWORD FORM */}
        <form className="w-full flex flex-col gap-4">
          <div className="w-full flex flex-col gap-3">
            <input
              type="password"
              placeholder="Enter your password"
              className="border w-full px-2 py-[12px] rounded-[6px]"
            />
            <input
              type="password"
              placeholder="Confirm password"
              className="border w-full px-2 py-[12px] rounded-[6px]"
            />
          </div>

          {/* LET'S GO */}
          <button
            type="submit"
            className="bg-black flex h-[36px] py-[32px] justify-center items-center w-full rounded-[6px] hover:cursor-pointer hover:bg-[#434343] transition"
          >
            <p className="text-[14px] font-[500] text-white">Let's Go</p>
          </button>
        </form>

        {/* SIGN UP? */}
        <div className="flex justify-center items-center gap-3 w-full">
          <p className="text-[16px] font-[400] text-[#71717A]">
            Already have an account?
          </p>
          <div>
            <p className="text-[16px] font-[400] text-[#2563EB] hover:cursor-pointer hover:underline">
              Log in
            </p>
          </div>
        </div>
      </div>
      <img src="/hero.png" className="w-[1200px] h-[1000px] rounded-md" />
    </div>
  );
}
