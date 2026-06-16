import { SignIn } from "@clerk/nextjs";
import Image from "next/image"

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center
      bg-black
      relative
      overflow-hidden
    ">
      <Image src="/onboarding.png" alt="beehive image" fill/>

      {/* glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3a2400,transparent_10%)]" />

      <SignIn
        appearance={{
          variables: {
            colorBackground: "#111111",
            colorText: "#ffffff",
            colorTextSecondary: "#a1a1aa",
            colorPrimary: "#f59e0b",
            borderRadius: "20px",
          },

          elements: {

            rootBox:
              "relative z-10",

            cardBox:
              "!bg-[#111111]/90 !backdrop-blur-xl !border !border-amber-500/30 !rounded-3xl !shadow-[0_0_60px_rgba(245,158,11,0.18)]",

            card:
              "!bg-transparent !shadow-none !rounded-3xl",

            headerTitle:
              "!text-white !font-bold",

            headerSubtitle:
              "!text-zinc-400",

            socialButtonsBlockButton:
              "!bg-[#1a1a1a] !border !border-zinc-800 hover:!border-amber-500/50 !text-white !rounded-xl",

            socialButtonsBlockButtonText:
              "!text-zinc-200",

            dividerLine:
              "!bg-zinc-800",

            dividerText:
              "!text-zinc-500",

            formFieldLabel:
              "!text-zinc-300",

            formFieldInput:
              "!bg-[#0b0b0b] !border !border-zinc-800 focus:!border-amber-500 !text-white !rounded-xl",

            formButtonPrimary:
              "!bg-amber-500 hover:!bg-amber-400 !text-black !font-semibold !rounded-xl",

            footer:
              "!hidden",
          },
        }}
      />
    </div>
  );
}