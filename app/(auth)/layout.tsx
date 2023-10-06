export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center h-full">
      <div>{children}</div>
    </div>
  );
}
