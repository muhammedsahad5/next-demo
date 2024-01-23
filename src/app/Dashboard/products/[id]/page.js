import { Updateproduct } from "@/app/lib/actions";
import { fetchProduct } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/product/singleproduct/singleproduct.module.css"
const Singleproductpage = async ({ params }) => {

    const { id } = params;
    const product = await fetchProduct(id);

    return (
        <div className={styles.container}>
            <div className={styles.infocontainer}>
                <div className={styles.imgcontainer}>
                    <img src="https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/ce8a56ff-35f2-4609-840f-f78b567b2800/thumbnail?v=2023111915" alt="" fill ></img>
                </div>
                {product.title}
            </div>
            <div className={styles.formcontainer}>
                <form action={Updateproduct} className={styles.form}>
                    <input type="hidden" name="id" value={product.id} />
                    <label>Title</label>
                    <input type="text" name="title" placeholder={product.title} />
                    <label>Price</label>
                    <input type="number" name="price" placeholder={product.price} />
                    <label>Stock</label>
                    <input type="number" name="stock" placeholder={product.stock} />
                    <label>Color</label>
                    <input type="text" name="color" placeholder={product.color} />
                    <label>Size</label>
                    <input type="text" name="size" placeholder={product.size} />
                    <label>Cat</label>
                    <select name="isAdmin" id="isAdmin" >
                        <option value="computers">Computers</option>
                        <option value={false}   >no</option>
                    </select>
                    <label>Description</label>

                    <textarea name="desc" id="desc" rows="10" placeholder={product.desc}></textarea>
                    <button >Update</button>
                </form>
            </div>
        </div>
    )
}
export default Singleproductpage;