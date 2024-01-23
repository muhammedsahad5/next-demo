import styles from './transactions.module.css'
const Transactions = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Latest Transactions</h1>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Date</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <img src="https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/ce8a56ff-35f2-4609-840f-f78b567b2800/thumbnail?v=2023111915"
                                    alt="" width="40" height="40"
                                    className={styles.userimage}
                                />
                                John Doe
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>Pending</span>
                        </td>
                        <td>14.02.2024</td>
                        <td>$3.200</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <img src="https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/ce8a56ff-35f2-4609-840f-f78b567b2800/thumbnail?v=2023111915"
                                    alt="" width="40" height="40"
                                    className={styles.userimage}
                                />
                                John Doe
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.done}`}>done</span>
                        </td>
                        <td>14.02.2024</td>
                        <td>$3.200</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <img src="https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/ce8a56ff-35f2-4609-840f-f78b567b2800/thumbnail?v=2023111915"
                                    alt="" width="40" height="40"
                                    className={styles.userimage}
                                />
                                John Doe
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.cancelled}`}>cancelled</span>
                        </td>
                        <td>14.02.2024</td>
                        <td>$3.200</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <img src="https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/ce8a56ff-35f2-4609-840f-f78b567b2800/thumbnail?v=2023111915"
                                    alt="" width="40" height="40"
                                    className={styles.userimage}
                                />
                                John Doe
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>pending</span>
                        </td>
                        <td>14.02.2024</td>
                        <td>$3.200</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default Transactions;