interface ButtonLinkProps {
  children: React.ReactNode;
  outline?: boolean;
}

export function ButtonLink({ outline, children }: ButtonLinkProps) {
  return outline ? (
    <a href="" className="p-4 text-sm text-blue-500 border border-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors">
      {children}
    </a>
  ) : (
    <a href="" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
      {children}
    </a>
  );
}