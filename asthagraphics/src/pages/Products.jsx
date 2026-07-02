import Navbar from "../components/Navbar";
import Container from "../components/ui/Container";
import hero from "../assets/images/hero.jpg";

const products = [
  {
    name: "Satin Ribbons",
    desc: "Lustrous and smooth satin ribbons perfect for premium gifting and packaging.",
    bg: "bg-rose-50",
    img: hero,
  },
  {
    name: "Grosgrain Ribbons",
    desc: "Sturdy ribbed-texture ribbons ideal for crafts, hair accessories and decoration.",
    bg: "bg-amber-50",
    img: hero,
  },
  {
    name: "Velvet Ribbons",
    desc: "Soft, luxurious velvet ribbons for high-end fashion and upscale gifting.",
    bg: "bg-purple-50",
    img: hero,
  },
  {
    name: "Printed Ribbons",
    desc: "Fully custom-printed ribbons with your logo, text or artwork.",
    bg: "bg-sky-50",
    img: hero,
  },
  {
    name: "Wired Ribbons",
    desc: "Wire-edged ribbons that hold their shape great for bows and floral arrangements.",
    bg: "bg-emerald-50",
    img: hero,
  },
  {
    name: "Organza Ribbons",
    desc: "Sheer, lightweight ribbons that add an elegant touch to any wrapping or decor.",
    bg: "bg-pink-50",
    img: hero,
  },
];

function Products() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white pt-36 pb-24">
        <Container>
          <div className="mb-14 text-center">
            <span className="rounded-full bg-rose-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-rose-700">
              Our Range
            </span>
            <h1 className="mt-6 text-4xl font-black text-gray-900 lg:text-5xl">
              Our Products
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-500">
              Explore our wide range of premium ribbons crafted for every occasion,
              industry and style.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <div
                key={p.name}
                className={`group rounded-2xl ${p.bg} p-8 shadow-sm transition-shadow hover:shadow-md`}
              >
                <img src={p.img} alt={p.name} className="mb-6 h-48 w-full rounded-xl object-cover" />
                <h3 className="text-xl font-bold text-gray-800">{p.name}</h3>
                <p className="mt-3 leading-relaxed text-gray-600">{p.desc}</p>
                <span className="mt-6 inline-block text-sm font-semibold text-rose-700 transition group-hover:underline">
                  Learn more
                </span>
              </div>
            ))}
          </div>
        </Container>
      </main>
    </>
  );
}

export default Products;
