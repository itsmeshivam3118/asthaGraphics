import Navbar from "../components/Navbar";
import Container from "../components/ui/Container";
import Button from "../components/ui/Buttons";

function Contact() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white pt-36 pb-24">
        <Container>
          <div className="mb-14 text-center">
            <span className="rounded-full bg-rose-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-rose-700">
              Get In Touch
            </span>
            <h1 className="mt-6 text-4xl font-black text-gray-900 lg:text-5xl">
              Contact Us
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-gray-500">
              Have a question or want to place an order? We&apos;d love to hear
              from you.
            </p>
          </div>

          <div className="mx-auto max-w-2xl rounded-3xl bg-white p-8 shadow-xl lg:p-12">
            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 outline-none transition focus:border-rose-500 focus:ring-2 focus:ring-rose-100"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 outline-none transition focus:border-rose-500 focus:ring-2 focus:ring-rose-100"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 outline-none transition focus:border-rose-500 focus:ring-2 focus:ring-rose-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 outline-none transition focus:border-rose-500 focus:ring-2 focus:ring-rose-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your requirement..."
                  className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-gray-900 outline-none transition focus:border-rose-500 focus:ring-2 focus:ring-rose-100"
                />
              </div>

              <Button size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </Container>
      </main>
    </>
  );
}

export default Contact;
