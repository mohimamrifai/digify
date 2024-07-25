export default function FaqTitleAndText() {
  return (
    <div className="flex flex-col space-y-5 md:w-6/12">
      <h2 className="text-4xl font-semibold">Digify FAQs</h2>
      <p className="md:text-xl">
        As a top digital marketing agency, we are committed to offering
        extensive educational resources and addressing common questions to
        assist our clients.
      </p>
      <div>
        <button className="py-2 px-4 rounded-full border-2 text-sm font-semibold hover:bg-blue-500 transition-all duration-300 hover:text-white">
          More Questions
        </button>
        <button className="py-2 px-4 text-sm underline font-semibold">
          Contanct Us
        </button>
      </div>
    </div>
  );
}
