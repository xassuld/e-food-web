"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const emailSchema = yup.object({
  email: yup
    .string()
    // .email("Please enter a valid email address")
    .matches(/@gmail\.com$/, "Email must be a Gmail address")
    .required("Please enter your email"),
});

type EmailFormData = yup.InferType<typeof emailSchema>;

function Account({ text }: { text: string }) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<EmailFormData>({
    resolver: yupResolver(emailSchema),
    mode: "onChange",
  });

  const onSubmit = (data: EmailFormData) => {
    console.log("Validated Email Data:", data);
    router.push("/go-to-account/create-account/password");
  };

  const handleBack = () => {
    router.push("/");
  };

  const handleLoginRedirect = () => {
    router.push("/go-to-account/log-in");
  };

  const handleLetsGoRedirect = () => {
    router.push("/");
  };

  return (
    <div className="flex w-[416px] flex-col justify-center items-start gap-6">
      {/* ICON */}
      <button
        onClick={handleBack}
        className="w-[36px] h-[36px] px-[8px] py-[16px] border rounded-[6px] flex items-center justify-center hover:cursor-pointer"
      >
        <ChevronLeft />
      </button>

      {/* HEADER */}
      <div className="flex flex-col items-start gap-1">
        <h3 className="text-[24px] font-[600]">{text}</h3>
        <p className="text-[16px] font-[400] text-[#71717A]">
          Sign up to explore your favorite dishes.
        </p>
      </div>

      {/* EMAIL FORM */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-4"
      >
        <div className="w-full flex flex-col gap-1">
          <input
            type="email"
            placeholder="Enter your email address"
            {...register("email")}
            className={`border w-full px-2 py-[12px] rounded-[6px] ${
              errors.email ? "border-red-400" : ""
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* LET'S GO */}
        <button
          type="submit"
          disabled={!isValid}
          className={`flex h-[36px] py-[32px] justify-center items-center w-full rounded-[6px] hover:cursor-pointer hover:bg-[#434343] transition
            ${
              isValid
                ? "bg-black text-white hover:bg-[#434343]"
                : "bg-black text-white"
            }`}
          onClick={handleLetsGoRedirect}
        >
          <p className="text-[14px] font-[500]">Let's Go</p>
        </button>
      </form>

      {/* SIGN UP? */}
      <div className="flex justify-center items-center gap-3 w-full">
        <p className="text-[16px] font-[400] text-[#71717A]">
          Already have an account?
        </p>
        <div onClick={handleLoginRedirect}>
          <p className="text-[16px] font-[400] text-[#2563EB] hover:cursor-pointer hover:underline">
            Log in
          </p>
        </div>
      </div>
    </div>
  );
}

export default Account;
