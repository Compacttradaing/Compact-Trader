import HomepageNav from "../features/HomepageNav";
import Button from "../ui/Button";
import { IoCheckmarkCircle } from "react-icons/io5";

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
          <p className="text-center px-2 md:w-1/2 mt-4 mb-4 text-slate-500 font-medium">
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
        <section className="md:px-40">
          <h1 className="text-3xl font-bold text-center text-slate-900 py-20">
            Our Reputaion
          </h1>
        </section>
      </main>
    </div>
  );
}

export default Homepage;
