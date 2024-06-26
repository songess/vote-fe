export default function LoginSignupLayout({
  children,
  loginmodal
}: {
  children: React.ReactNode;
  loginmodal: React.ReactNode;
}) {
  return (
    <div className="w-full sm:w-[640px] bg-backgroundColor h-dvh flex flex-col overflow-y-scroll">
      {children}
      {loginmodal}
    </div>
  );
}
