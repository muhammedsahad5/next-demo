import styles from "@/app/ui/dashboard/product/product.module.css"
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import { fetchProducts } from "@/app/lib/data";
import { deleteProducts } from "@/app/lib/actions";

const Productspage = async ({ searchParams }) => {
    const q = searchParams?.q || "";
    const page = searchParams?.page || 1;
    const { count, products } = await fetchProducts(q, page);

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder={"Search for products..."} />
                <Link href={"/Dashboard/products/add"}>
                    <button className={styles.addbutton}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>

                    <tr>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Price</td>
                        <td>Created At</td>
                        <td>Stock</td>
                        <td>Action</td>
                    </tr>
                </thead>

                <tbody>
                    {products.map((product) => (


                        <tr key={product.id}>
                            <td><div className={styles.product}>
                                <img src={product.img || "https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/ce8a56ff-35f2-4609-840f-f78b567b2800/thumbnail?v=2023111915"}
                                    alt="" width={40}
                                    height={40}
                                    className={styles.productImage} />
                                {product.title}
                            </div>
                            </td>
                            <td>{product.desc}</td>
                            <td>${product.price}</td>
                            <td>{product.createdAt?.toString().slice(4, 16)}</td>
                            <td>{product.stock}</td>
                            <td>
                                <div className={styles.buttons}>
                                    <Link href={`/Dashboard/products/${product.id}`}>
                                        <button className={`${styles.button} ${styles.view}`}>
                                            View
                                        </button>
                                    </Link>
                                    <form action={deleteProducts}>
                                        <input type="hidden" name="id" value={product.id} />
                                        <button className={`${styles.button} ${styles.Delete}`}>
                                            Delete
                                        </button>
                                    </form>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination count={count} />
        </div>
    );
}
export default Productspage;