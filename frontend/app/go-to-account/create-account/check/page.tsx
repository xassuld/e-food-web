"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const passSchema = yup.object({
  password: yup
    .string()
    .required("Please enter your password")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Please confirm your password"),
});

type PassFormData = yup.InferType<typeof passSchema>;

export default function Password({ text }: { text: string }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PassFormData>({
    resolver: yupResolver(passSchema),
  });

  const router = useRouter();

  const handleSigninDirect = () => {
    router.push("/go-to-account/create-account");
  };

  const handleLetsGoRedirect = () => {
    router.push("/home-page");
  };

  const onSubmit = (data: PassFormData) => {
    console.log("Passwords match, data submitted:", data);
  };
  return (
    <div className="w-screen h-screen flex bg-white items-center justify-around">
      <div className="flex w-[416px] flex-col justify-center items-start gap-6">
        {/* ICON */}
        <button className="w-[36px] h-[36px] px-[8px] py-[16px] border rounded-[6px] flex items-center justify-center hover:cursor-pointer">
          <ChevronLeft />
        </button>

        {/* HEADER */}
        <div className="flex flex-col items-start gap-1">
          <h3 className="text-[24px] font-[600]">Enter Your Password</h3>
          <p className="text-[16px] font-[400] text-[#71717A]">
            Log up to explore your favorite dishes.
          </p>
        </div>

        {/* PASSWORD FORM */}
        <form
          className="w-full flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full flex flex-col gap-3">
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password")}
              className="border w-full px-2 py-[12px] rounded-[6px]"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
            <input
              type="password"
              placeholder="Confirm password"
              {...register("confirmPassword")}
              className="border w-full px-2 py-[12px] rounded-[6px]"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* LET'S GO */}
          <button
            type="submit"
            className="bg-black flex h-[36px] py-[32px] justify-center items-center w-full rounded-[6px] hover:cursor-pointer hover:bg-[#434343] transition"
            onClick={handleLetsGoRedirect}
          >
            <p className="text-[14px] font-[500] text-white">Let's Go</p>
          </button>
        </form>

        {/* SIGN UP? */}
        <div className="flex justify-center items-center gap-3 w-full">
          <p className="text-[16px] font-[400] text-[#71717A]">
            Already have an account?
          </p>
          <div onClick={handleSigninDirect}>
            <p className="text-[16px] font-[400] text-[#2563EB] hover:cursor-pointer hover:underline">
              Sign Up
            </p>
          </div>
        </div>
      </div>
      <img src="/hero.png" className="w-[1200px] h-[1000px] rounded-md" />
    </div>
  );
}
