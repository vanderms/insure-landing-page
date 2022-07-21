import React from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  children: React.ReactNode;
  key?: any;
  li?: boolean;
}

export const FeatureCard: React.FC<FeatureCardProps> = (props) => {
  return props.li ? (
    <li className="contents">
      <Card {...props} />
    </li>
  ) : (
    <Card {...props} />
  );
};

const Card: React.FC<FeatureCardProps> = (props) => {
  return (
    <article className="flex flex-col items-center max-w-[21.875rem] xl:items-start">
      <div>
        <img src={props.icon} alt="" />
      </div>
      <h3 className="title-sm mt-8 text-neutral-800">{props.title}</h3>
      <div className="mt-6 body-md text-neutral-500 text-center xl:text-left">{props.children}</div>
    </article>
  );
};
