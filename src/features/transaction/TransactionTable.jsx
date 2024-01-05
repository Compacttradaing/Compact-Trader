function TransactionTable({ children, type }) {
  const base = "bg-white mt-10 overflow-y-auto drop-shadow-sm";

  const styles = {
    primary: base + " h-80",
    secondary: base + " h-96",
  };

  return <div className={styles[type]}>{children}</div>;
}

export default TransactionTable;
