import TableBtn from "../../ui/TableBtn";

function WalletTableRow() {
  return (
    <div className="grid grid-cols-4 md:grid-cols-4 text-sm items-center justify-center text-center gap-x-2.5 px-1.5 py-2.5 last:border-b last:border-slate-300">
      <h2>Access</h2>
      <h2>John olasebikan</h2>
      <h2>432887383733</h2>
      <TableBtn>Edit</TableBtn>
    </div>
  );
}

export default WalletTableRow;
