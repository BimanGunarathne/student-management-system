import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4 bg-gray-100">
        {children}
      </main>
      <Footer />
    </div>
  );
}
