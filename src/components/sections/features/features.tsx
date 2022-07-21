import { useId } from "react";
import { FeatureCard } from "@/components/cards/feature/feature-card";
import IconSnappy from "@/assets/icon-snappy-process.svg";
import IconAffordable from "@/assets/icon-affordable-prices.svg";
import IconPeople from "@/assets/icon-people-first.svg";

export const FeaturesSection: React.FC = () => {
  const title = useId();

  return (
    <section aria-labelledby={title} className="container mt-[8.75rem] xl:mt-[9.375rem]">
      <div className="w-[9.375rem] mx-auto h-0 border-b border-primary-100 xl:mx-0"></div>
      <h2 id={title} className="mt-10 text-center title-md text-neutral-800 xl:text-left xl:mt-[3.9375rem]">
        We're different
      </h2>
      <ul className="mt-20 flex flex-col items-center gap-14 xl:mt-24 xl:flex-row xl:justify-between xl:gap-0">
        <FeatureCard li={true} title="Snappy Process" icon={IconSnappy}>
          <p>
            Our application process can be completed in minutes, not hours. Don't get stuck
            filling in tedious forms.
          </p>
        </FeatureCard>
        <FeatureCard li={true} title="Affordable Prices" icon={IconAffordable}>
          <p>
            We don't want you worrying about high monthly costs. Our prices may be low, but
            we still offer the best coverage possible.
          </p>
        </FeatureCard>
        <FeatureCard li={true} title="People First" icon={IconPeople}>
          <p>
            Our plans aren't full of conditions and clauses to prevent payouts. We make sure
            you're covered when you need it.
          </p>
        </FeatureCard>
      </ul>
    </section>
  );
};
