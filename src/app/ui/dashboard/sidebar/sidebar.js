import styles from "../sidebar/sidebar.module.css"
import {
    MdPeople,
    MdLogout,
    MdWork,
    MdDashboard,
    MdSupervisedUserCircle,
    MdOutlineSettings,
    MdAttachMoney,
    MdAnalytics,
    MdShoppingBag,
    MdHelpCenter,
} from "react-icons/md";
import Menulink from "./menulink/menulink";
const menuitems = [
    {
        title: "pages",
        list: [
            {
                title: "Dashboard",
                path: "/Dashboard",
                icon: <MdDashboard />
            },
            {
                title: "Users",
                path: "/Dashboard/users",
                icon: <MdSupervisedUserCircle />
            },
            {
                title: "Products",
                path: "/Dashboard/products",
                icon: <MdShoppingBag />
            },
            {
                title: "Transactions",
                path: "/Dashboard/transactions",
                icon: <MdAttachMoney />
            },
        ]
    },
    {
        title: "Analytics",
        list: [
            {
                title: "Revenue",
                path: "/Dashboard/revenue",
                icon: <MdWork />
            },
            {
                title: "Reports",
                path: "/Dashboard/reports",
                icon: <MdAnalytics />
            },
            {
                title: "Teams",
                path: "/Dashboard/teams",
                icon: <MdPeople />
            },

        ]
    },
    {
        title: "User",
        list: [
            {
                title: "Settings",
                path: "/Dashboard/settings",
                icon: <MdOutlineSettings />
            },
            {
                title: "Help",
                path: "/Dashboard/help",
                icon: <MdHelpCenter />
            },


        ]
    }
]


const Sidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <img className={styles.userImage} src="https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/ce8a56ff-35f2-4609-840f-f78b567b2800/thumbnail?v=2023111915" alt="" width="50" height="50" />
                <div className={styles.userDetails}>
                    <span className={styles.userName}>John Joe</span>
                    <span className={styles.userTitle}>Administrator</span>
                </div>
            </div>
            <ul className={styles.list}>
                {menuitems.map(cat => (
                    <li key={cat.title}>
                        <span className={styles.cat}>{cat.title}</span>
                        {cat.list.map(item => (
                            <Menulink item={item} key={item.title} />
                        ))}

                    </li>

                ))}
            </ul>
            <button className={styles.logout}>
                <MdLogout />
                Logout</button>
        </div  >

    );
}
export default Sidebar;