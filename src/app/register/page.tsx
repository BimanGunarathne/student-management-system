import StudentForm from "../../components/StudentForm";
import { Toaster } from "react-hot-toast";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-100 p-4">
        <div className="container mx-auto">
          <Toaster />
          <StudentForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
