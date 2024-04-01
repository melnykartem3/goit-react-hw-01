import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead className={css.tableHead}>
        <tr>
          <th className={css.headItems}>Type</th>
          <th className={css.headItems}>Amount</th>
          <th className={css.headItems}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr className={css.tableBody} key={item.id}>
            <td className={css.bodyItems}>{item.type}</td>
            <td className={css.bodyItems}>{item.amount}</td>
            <td className={css.bodyItems}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
