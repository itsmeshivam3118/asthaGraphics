import Navbar from "../components/Navbar";
import Container from "../components/ui/Container";

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "50K+", label: "Products Delivered" },
  { value: "500+", label: "Happy Clients" },
  { value: "30+", label: "Ribbon Varieties" },
];

function About() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white pt-36 pb-24">
        <Container>
          <div className="mb-14 text-center">
            <span className="rounded-full bg-rose-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-rose-700">
              Our Story
            </span>
            <h1 className="mt-6 text-4xl font-black text-gray-900 lg:text-5xl">
              About Us
            </h1>
          </div>

          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="space-y-6">
              <p className="text-lg leading-8 text-gray-600">
                Astha Graphics is a premium ribbon manufacturer dedicated to
                crafting beautiful, high-quality decorative ribbons for gifting,
                packaging, branding, and fashion.
              </p>
              <p className="text-lg leading-8 text-gray-600">
                With years of experience in the industry, we take pride in our
                attention to detail, wide variety of materials, and unwavering
                commitment to excellence.
              </p>
              <p className="text-lg leading-8 text-gray-600">
                From elegant satin to rich velvet, our ribbons are loved by
                businesses and individuals alike across the country.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-white p-6 text-center shadow-md"
                >
                  <p className="text-3xl font-black text-rose-700">{stat.value}</p>
                  <p className="mt-2 text-sm font-medium text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}

export default About;
