import css from "./TransactionHistory.module.css"

export default function TransactionHistory({transactions}) {
    const transactionTable = transactions.map(transaction =>
        <tr key={transaction.id}>
        <td className={css.typeText}>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
        </tr>
    );

    return (
<table className={css.table}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
{transactionTable}
  </tbody>
</table>
    )
}