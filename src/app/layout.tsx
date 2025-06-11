import Cabecalho from '@/components/Cabecalho';
import '@/styles/globals.css';
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'], // escolha os pesos que vai usar
  variable: '--font-poppins',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={poppins.variable}>
      <body
        className="min-w-80 max-w-3xl m-auto border border-red-500 font-sans"
      >
        <header>
          <Cabecalho />
        </header>
        {children}
      </body>
    </html>
  );
}
