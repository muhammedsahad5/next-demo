"use client"

import styles from "@/app/ui/dashboard/pagination/pagination.module.css"
import { usePathname, useSearchParams, useRouter } from 'next/navigation'

const Pagination = ({ count }) => {

    const searchparams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();

    const page = searchparams.get("page") || 1;

    const params = new URLSearchParams(searchparams)
    const ITEMS_PER_PAGE = 4

    const hasPrev = ITEMS_PER_PAGE * (parseInt(page) - 1) > 0
    const hasNext = ITEMS_PER_PAGE * (parseInt(page) - 1) + ITEMS_PER_PAGE < count

    const handleChangePage = (type) => {
        type === "prev"
            ? params.set("page", parseInt(page) - 1)
            : params.set("page", parseInt(page) + 1)
        replace(`${pathname}?${params}`);
    }

    return (
        <div className={styles.container}>
            <button className={styles.button} disabled={!hasPrev} onClick={() => handleChangePage("prev")}>Previous</button>
            <button className={styles.button} disabled={!hasNext} onClick={() => handleChangePage("next")}>Next</button>
        </div>
    )
}
export default Pagination