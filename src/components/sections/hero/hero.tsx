import { useId } from "react";
import ImageDesktop from "@/assets/image-intro-desktop.jpg";
import ImageMobile from "@/assets/image-intro-mobile.jpg";
import { ActionLink } from "@/components/buttons/action-link/action-link";

export const HeroSection: React.FC = () => {
  const title = useId();

  return (
    <section
      aria-labelledby={title}
      className={`relative grid grid-cols-1 xl:container bg-primary xl:grid-cols-2 hero-pattern
      xl:gap-x-[1.875rem] xl:pt-[6.5625rem]`}
    >
      <picture className="relative w-full mx-auto pb-[min(83.1485588%,40.625rem)] xl:order-2 xl:pb-[40.625rem]">
        <source media="(min-width: 25rem)" srcSet={ImageDesktop} />
        <img
          src={ImageMobile}
          alt="A family with a man, a woman and two kids smiling and walking hand in hand"
          className="absolute top-0 left-0 w-full h-full object-center object-cover z-10"
        />
      </picture>
      <header className="relative z-10 container pb-[5.8125rem] pt-[5.8125rem] mx-auto header-pattern">
        <div className="xl:w-[9.375rem] xl:h-0 xl:border-b xl:border-neutral-50"></div>
        <h1
          id={title}
          className="title-xl text-neutral-50 text-center xl:text-left xl:mt-16"
        >
          Humanizing <br /> your insurance.
        </h1>
        <p className="mt-4 body-md text-center text-neutral-50 xl:text-left">
          Get your life insurance coverage easier and faster. We blend our expertise and
          technology to help you find the plan that's right for you. Ensure you and your
          loved ones are protected.
        </p>
        <ActionLink className="mx-auto mt-8 xl:mx-0 xl:mt-6" href="/#">
          VIEW PLANS
        </ActionLink>
      </header>
      <div className="absolute xl:w-full xl:h-[9.6875rem] xl:left-0 xl:bottom-0 bg-neutral-50"></div>
    </section>
  );
};
