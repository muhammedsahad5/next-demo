import { UpdateUser } from "@/app/lib/actions";
import { fetchUser } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/users/singleuser/singleuser.module.css"
const Singleuserpage = async ({ params }) => {

    const { id } = params;
    const user = await fetchUser(id);
    return (
        <div className={styles.container}>
            <div className={styles.infocontainer}>
                <div className={styles.imgcontainer}>
                    <img src={user.img || "https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/ce8a56ff-35f2-4609-840f-f78b567b2800/thumbnail?v=2023111915"} alt="" fill ></img>
                </div>
                {user.username}
            </div>
            <div className={styles.formcontainer}>
                <form action={UpdateUser} className={styles.form}>

                    <input type="hidden" name="id" value={user.id} />
                    <label>Username</label>
                    <input type="text" name="username" placeholder={user.username} />
                    <label>Email</label>
                    <input type="email" name="email" placeholder={user.email} />
                    <label>Password</label>
                    <input type="password" name="password" />
                    <label>Phone</label>
                    <input type="text" name="phone" placeholder={user.phone} />
                    <label>Textarea</label>
                    <input type="text" name="Address" placeholder={user.address} />
                    <label>Is Admin?</label>
                    <select name="isAdmin" id="isAdmin" >
                        <option value={true} selected={user.isAdmin} >yes</option>
                        <option value={false} selected={!user.isAdmin} >no</option>
                    </select>
                    <label>Is Active?</label>

                    <select name="isActive" id="isActive" >
                        <option value={true} selected={user.isActive}>yes</option>
                        <option value={false} selected={!user.isActive}>no</option>
                    </select>
                    <button >Update</button>
                </form>
            </div>
        </div>
    )
}
export default Singleuserpage;