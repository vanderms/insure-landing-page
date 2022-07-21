interface ActionLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const ActionLink: React.FC<ActionLinkProps> = ({ href, children, className }) => {
  return (
    <a
      href={href}
      className={`px-6 h-10 w-max grid place-items-center border border-neutral-50 text-neutral-50 body-sm 
      ${className ?? ""} hover:bg-neutral-50 hover:text-neutral-800 xl:px-[1.7813rem]`}
    >
      {children}
    </a>
  );
};
