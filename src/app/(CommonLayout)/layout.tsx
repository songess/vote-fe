export default function layout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return <div className="w-full sm:w-[640px] bg-backgroundColor h-dvh relative">
    {children}
    {modal}
  </div>;
}
