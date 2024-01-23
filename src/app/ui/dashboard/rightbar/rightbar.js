import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md';
import styles from './rightbar.module.css';

const Rightbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.bgcontainer}>
                    <img src="kkk.png" alt="" fill className={styles.bg} />
                </div>
                <div className={styles.texts}>
                    <span className={styles.notification}>Available Now </span>
                    <h3 className={styles.title}>How to use the new vertion of the admin dashboard ?</h3>
                    <span className={styles.subtitle}>Takes a 4 minutes to learn</span>
                    <p className={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <button className={styles.button}>
                        <MdPlayCircleFilled />
                        Watch
                    </button>
                </div>
            </div>
            <div className={styles.item}>

                <div className={styles.texts}>
                    <span className={styles.notification}>Coming soon </span>
                    <h3 className={styles.title}>New server actions are Available, partial pre-rendering is coming up !</h3>
                    <span className={styles.subtitle}>Boost your productivity</span>
                    <p className={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        ,</p>
                    <button className={styles.button}>
                        <MdReadMore />
                        Learn
                    </button>
                </div>
            </div>

        </div>

    );
}
export default Rightbar;