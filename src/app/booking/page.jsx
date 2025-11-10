import BookingForm from "../../components/BookingForm";

export default function BookingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="max-w-lg mx-auto">
        <h2 className="text-3xl font-serif mb-4 text-brown">
          Book an Appointment
        </h2>
        <BookingForm />
      </section>
    </div>
  );
}