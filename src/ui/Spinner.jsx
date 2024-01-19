import { LineWave } from "react-loader-spinner";

function Spinner() {
  return (
    <div className="fixed top-0 left-0 h-screen w-full bg-slate-900/20 z-50 backdrop-blur-sm transition-all duration-300">
      <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition-all duration-300 px-5">
        <LineWave
          visible={true}
          height="200"
          width="200"
          color="#312e81"
          ariaLabel="line-wave-loading"
          wrapperStyle={{}}
          wrapperClass=""
          firstLineColor=""
          middleLineColor=""
          lastLineColor=""
        />
      </div>
    </div>
  );
}

export default Spinner;
