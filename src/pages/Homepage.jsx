import HomepageNav from "../features/HomepageNav";
import Button from "../ui/Button";
import { IoCheckmarkCircle } from "react-icons/io5";

function Homepage() {
  return (
    <div className="md:mx-20 mx-3">
      <header>
        <HomepageNav />
      </header>
      <main className="w-sreen mx-auto px-3 md:mx-auto md:w-[1080px]">
        <section className="flex h-screen flex-col items-center justify-center">
          <h1 className="md:text-8xl text-3xl font-bold text-slate-900">
            Trade Today.
          </h1>
          <h2 className="md:text-8xl text-3xl font-bold text-slate-900">
            Get Instant Payment.
          </h2>
          <p className="text-center mt-4 mb-4 text-slate-500 font-medium">
            Take pleasure in a flawless experience with our platform, where your
            peace of mind is ensure of mind is ensured by our commitment to safe
            and secure transactions.
          </p>
          <Button type="primary" to="/register">
            Get started
          </Button>
          <div className="flex items-center justify-between gap-1 sm:gap-40 mt-10">
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
        </section>
      </main>
    </div>
  );
}

export default Homepage;
