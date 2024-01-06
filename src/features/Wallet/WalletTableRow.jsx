import { IoTrash } from "react-icons/io5";

function WalletTableRow() {
  return (
    <div className="md:mx-10 gap-y-3 px-2 mt-4 grid grid-cols-1 md:grid-cols-3">
      <div className="bg-yellow-400 md:w-80 px-6 rounded-2xl py-5 text-white">
        <div className="flex items-center justify-between mb-5">
          <h1>Access Bank</h1>
          <button>
            <IoTrash className="text-lg" />
          </button>
        </div>
        <p className="mb-5 text-xl">8216783456</p>
        <p>
          Account name: <span>John Olasebikan</span>
        </p>
      </div>

      <div className="bg-yellow-400 md:w-80 px-6 rounded-2xl py-5 text-white">
        <div className="flex items-center justify-between mb-5">
          <h1>Access Bank</h1>
          <button>
            <IoTrash className="text-lg" />
          </button>
        </div>
        <p className="mb-5 text-xl">8216783456</p>
        <p>
          Account name: <span>John Olasebikan</span>
        </p>
      </div>

      <div className="bg-yellow-400 md:w-80 px-6 rounded-2xl py-5 text-white">
        <div className="flex items-center justify-between mb-5">
          <h1>Access Bank</h1>
          <button>
            <IoTrash className="text-lg" />
          </button>
        </div>
        <p className="mb-5 text-xl">8216783456</p>
        <p>
          Account name: <span>John Olasebikan</span>
        </p>
      </div>
    </div>
  );
}

export default WalletTableRow;
