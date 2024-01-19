import { ThreeCircles } from "react-loader-spinner";

function XSpinner() {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <ThreeCircles
        visible={true}
        height="50"
        width="50"
        color="#312e81"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      <p className="text-xl mt-2 text-indigo-900">Loading...</p>
    </div>
  );
}

export default XSpinner;
