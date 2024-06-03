"use client";
import { HoverEffect } from "./card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    image:
      "https://lh3.googleusercontent.com/fife/ALs6j_GD9RgjStlGsCEALP3Yqu0glpfqmICofUjpa1BsXd3D5BK3XpiwyD3QVdaziG72WVu4IbriSBRZlf__wnJE4HnezmMKR6saFjEtmP4-XUhS6x-IyAyTQYo7sncozhjfA-o4ZT8UJMVjGLbp4--wkwsQEQ2e93WkqicjHy8chHjAKL57wDHnyYqGonyyrGtlQEOvT1yclTiTDD_AMtGkVYmOraKQbi83yqUJ8-kZ3HV00tDTSEKUU60RmCA4ln9TdLAppb7Zx6yw7oLfd12QL9UhwMZM2CmHEfHVbsH5N9pMXkPUjZ3mCWtp_c0ej0hH6zX4UFDAqqYbKltfn-ytdwFIgJtqx1HVfB3JXv1MHaRQHQF4cvRYdjHVVlc6EZZwJy9aGT2ondTb19H8nITnizS_PxbYkym8kmJIlG9PSwUoiwAl__cX7vPlBsIEarVy17OZrOxEi6ej-Yov89wNnE2_fCqeK9wUUXCfOhlWk__regur2WLUTGj0kiKI-o0CU3yPuCUGSxv5PPhd7Axi3Oqu6TsusGBi2j-ofvitb6n7Q1zLwmRrzrT_ax_hTtw52qlroZxZ6RFDNJWZ2noruJupvv99jsY5d_6buAmVbMV4CMKZLCmqymKGACs3m1hFHJZebcV1EFeiWsp1ChCgWi28MzEocR4DVWQfShgtY4igbyZucFREUQCGzsQ4kProAhXQL1p_j0msuRDwA87RHZXOyUHvx-WUT8Fnv4slHb_I6VAxhYTbdIT0LW6mtCAKAKI2-0sZpshXlazlqISrYBA8-MiQgmXjVbkDPXRFyLpbp3exhDO47xl1FkjmzfuXE4MA8oArHRW4Zu3nKjKYVoDfFtZ48oBEmvb_YXEE_neWAj8-TN3QCRBirxVSho_jK5Jxt4M1smUSyNNIyvpklUkfN7yPrfKHAWxjiUVTaEZZ3qP6UQw-OA809D3P0i_mmFw7DdHhnd_fwb8rxiHh5kBfPnd8wl82631EXnFyig7xAv8xCmKhBV2-bgGzv5c_Ayg7eNP-aKXrnSpVjNXkrTR4H0CjmHRohfbikF7E9K8CgQDu5-MbfTNWu6b-Fvr61NgYrQktJ3MjSFFHnOj5BL8cL27Axzgr3HFFgYSaMC_NVUOF6I0fNgLAXkLIsisp7qh__EoInkrn7AVTcQX2BOBAI44V7T_uklo0Nru9xg3b3N02rXPz1b5NCtoAh1OyXzbMJ1FVuXu2r7_eo4ytDRCg5pOCxEk-UVkCVdslDyXM7bIlUxBnIL2xNrH-Ona6NWWJgCFjtUuYV6czDelEJKio62OkVebmu-BPUWHdx3-KSLce6sLPKuNR-0w8ZOdVy_8wAN2KyoguUxCU-Zi8udB4qCSiocrg9XTDSxWdbiyDoEfuKDs19cdYR7R6eo70Kd6TXjEqlKFOZ3e2aE0_Vg5-_ktX028qQkrFRdMNbKC2EXgUnSQ8b-aWfhyXfjqrVmq4lrYIWZ7BrhkCd7Yqm0PGeH0fargfSQf68xoTA8fLdxL2kphxrFDHzka64x-pecYVLlhe9c8Cq6nnoBL4UAADdj6tWh2EHsDy91XxC93cc3Z0SBZTqfWP1ycChS_N1Z596336bbJvbzLhgA=w1866-h1594",
    title: "Astrology-practice",
    description:
      "This website is a sample created for those interested in astrology/horoscopes (It is a replica of an existing website).",
    link: "https://astrology-seven.vercel.app/",
  },
  {
    image:
      "https://lh3.google.com/u/0/d/1GNTR4eQO9g5201aTciGszjnw1ettIRm_=w1866-h1594-iv2",
    title: "Capcut-practice",
    description:
      "This website is a sample created for those interested in video editing using Capcut (it is a replica of an existing website).",
    link: "capcut-seven.vercel.app",
  },
  {
    image:
      "https://lh3.google.com/u/0/d/1Z6flCUL476SlRmanXOCrXrAct_GiVTWn=w1866-h1594-iv2",
    title: "Clickup-practice",
    description:
      "This website is a sample created based on the ClickUp website design (it is a replica of an existing website).",
    link: "clickup-two.vercel.app",
  },
  {
    image:
      "https://lh3.google.com/u/0/d/1yV1jSPmW0SJmopRnXwkea7YBTVFjgSZZ=w1866-h1594-iv3",
    title: "Copilot-practice",
    description:
      "This website is a sample created based on the Copilot website design (it is a replica of an existing website).",
    link: "copilot-practice.vercel.app",
  },
  // {
  //   image:
  //     "https://devpro-aceternity.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Fplaceholdertech.png&w=3840&q=75",
  //   title: "PlaceholderTech",
  //   description:
  //     "Your one-stop shop for web app needs tailored to your requirements.",
  //   link: "https://amazon.com",
  // },
];
