import { useId } from "react";
import { ActionLink } from "@/components/buttons/action-link/action-link";

export const CallToActionSection: React.FC = () => {
  const title = useId();
  return (
    <section aria-labelledby={title} className="mt-[8.75rem] container xl:mt-[9.875rem]">
      <div className="relative call-to-action-pattern bg-primary py-[4.5rem] px-6 flex flex-col items-center gap-10 xl:flex-row xl:justify-between xl:px-20 xl:py-[4.3125rem]">
        <h2 id={title} className="title-md text-neutral-50 text-center xl:text-left">
          Find out more <br /> about how we work
        </h2>
        <ActionLink className="relative z-10" href="/#">HOW WE WORK</ActionLink>
      </div>
    </section>
  );
};
