import { addUser } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/users/addusers/addusers.module.css"
const Adduser = () => {

    return (
        <div className={styles.container}>
            <form action={addUser} className={styles.form}>
                <input type="text" placeholder="Username" name="username" required />
                <input type="email" placeholder="Email" name="email" required />
                <input type="password" placeholder="Password" name="password" required />
                <input type="phone" placeholder="Phone" name="phone" />
                <select name="isAdmin" id="isAdmin" className={styles.select}>
                    <option value={false} >Admin</option>
                    <option value={true}>yes</option>
                    <option value={false}>no</option>
                </select>
                <select name="isActive" id="isActive" className={styles.select}>
                    <option value={true} >Admin</option>
                    <option value={true}>yes</option>
                    <option value={false}>no</option>
                </select>
                <textarea name="address"
                    id="address"
                    rows="16"
                    placeholder="Address">
                </textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default Adduser;