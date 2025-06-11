import '@/styles/globals.css';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className="min-w-80 max-w-3xl m-auto border border-red-500"
      >
        {children}
      </body>
    </html>
  );
}
