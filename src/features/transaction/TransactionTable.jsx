function TransactionTable({ children, type }) {
  const base = "bg-white mt-5 overflow-y-auto drop-shadow-sm";

  const styles = {
    primary: base + " md:h-80 h-96",
    secondary: base + " md:h-96 h-[550px]",
  };

  return <div className={styles[type]}>{children}</div>;
}

export default TransactionTable;
