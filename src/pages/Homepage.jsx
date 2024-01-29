import HomepageNav from "../features/HomepageNav";
import Button from "../ui/Button";
import {
  IoCalculatorOutline,
  IoCheckmarkCircle,
  IoFlashOutline,
  IoTimeOutline,
} from "react-icons/io5";

function Homepage() {
  return (
    <div className="">
      <header className="h-screen bg-gradient-to-r to-gray-50 from-stone-100">
        <HomepageNav />

        <div className="w-sreen pt-40 mx-auto flex flex-col items-center justify-center ">
          <h1 className="md:text-8xl text-3xl font-bold text-slate-900">
            Trade Today.
          </h1>
          <h2 className="md:text-8xl text-3xl font-bold text-slate-900">
            Get Instant Payment.
          </h2>
          <p className="text-center text-wrap px-2 md:w-1/2 mt-4 mb-4 text-slate-500 font-medium">
            Take pleasure in a flawless experience with our platform, where your
            peace of mind is ensure of mind is ensured by our commitment to safe
            and secure transactions.
          </p>
          <Button type="primary" to="/register">
            Get started
          </Button>
          <div className="flex px-1 items-center sm:justify-between gap-1 sm:gap-40 mt-10">
            <div className="flex items-center gap-1 sm:gap-2 justify-center">
              <IoCheckmarkCircle className="text-green-500" />
              <p className="text-sm text-slate-500">Quickly transaction</p>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 justify-center">
              <IoCheckmarkCircle className="text-green-500" />
              <p className="text-sm text-slate-500">Trusted by users</p>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 justify-center">
              <IoCheckmarkCircle className="text-green-500" />
              <p className="text-sm text-slate-500">Fast trade</p>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="md:px-40 py-20 grid place-items-center">
          <h1 className="text-3xl font-bold text-center text-slate-900">
            Our Reputaion
          </h1>
          <ul className="sm:flex gap-4 items-center justify-center sm:gap-10 sm:justify-between mt-16">
            <li className="ring-1 ring-indigo-200 sm:mb-0 mb-5 rounded-sm drop-shadow-sm p-4 w-80">
              <IoCalculatorOutline className="text-3xl text-indigo-900" />
              <h2 className="font-bold text-lg text-slate-900 py-2">
                Best Rates
              </h2>
              <p className="text-slate-500 text-sm">
                Nullam senectus porttitor in eget. Eget rutrum leo interdum.
              </p>
            </li>
            <li className="ring-1 ring-indigo-200 sm:mb-0 mb-5 rounded-sm drop-shadow-sm p-4 w-80">
              <IoFlashOutline className="text-3xl text-indigo-900" />
              <h2 className="font-bold text-lg text-slate-900 py-2">
                Fast Trade
              </h2>
              <p className="text-slate-500 text-sm">
                Nullam senectus porttitor in eget. Eget rutrum leo interdum.
              </p>
            </li>
            <li className="ring-1 ring-indigo-200 rounded-sm drop-shadow-sm p-4 w-80">
              <IoTimeOutline className="text-3xl text-indigo-900" />
              <h2 className="font-bold text-lg text-slate-900 py-2">
                Instant Payment
              </h2>
              <p className="text-slate-500 text-sm">
                Nullam senectus porttitor in eget. Eget rutrum leo interdum.
              </p>
            </li>
          </ul>
        </section>
        <section className="md:px-40 px-2 py-20 bg-indigo-500">
          <ul className="flex gap-4 items-center justify-center sm:gap-10 sm:justify-between ">
            <li className="text-center">
              <h2 className="font-bold text-lg text-slate-50 py-2">4000+</h2>
              <p className="text-slate-50 text-sm">Number of users 4000+</p>
            </li>
            <li className="text-center">
              <h2 className="font-bold text-lg text-slate-50 py-2">$50,000+</h2>
              <p className="text-slate-50 text-sm">Everyday trading $50,000+</p>
            </li>
            <li className="text-center">
              <h2 className="font-bold text-lg text-slate-50 py-2">2021</h2>
              <p className="text-slate-50 text-sm">Founded in 2021</p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Homepage;
