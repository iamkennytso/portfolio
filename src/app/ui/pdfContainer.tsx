export default function PdfContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-[calc(100vh-4em)]">
      {children}
    </div>
  );
}