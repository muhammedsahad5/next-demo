import styles from "@/app/ui/login/login.module.css"
const Login = () => {

    return (
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <h1>Login</h1>
                <input type="text" placeholder="Username" />
                <input type="Password" placeholder="Password" />
                <button >Login</button>
            </form>
        </div>
    );

}
export default Login;