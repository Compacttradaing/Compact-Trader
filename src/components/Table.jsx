import styles from "./Table.module.css";

// function Table() {
//   return (
//     <div className={styles.table}>
//       <div className={styles.tableHead}>
//         <h3>ID</h3>
//         <h3>Type</h3>
//         <h3>Amount</h3>
//         <h3>Status</h3>
//       </div>
//       <History />
//     </div>
//   );
// }

function Table({ children }) {
  return (
    <div className={styles.table}>
      <table className={styles.column}>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

export default Table;
