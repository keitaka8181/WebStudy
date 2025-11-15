import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "SmartFlow",
  description: "フリーランス向けタスク管理アプリ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-gray-50">
        <Header />
        <main className="max-w-3xl mx-auto px-4 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
