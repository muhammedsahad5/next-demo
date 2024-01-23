import { product, user } from "./models";
import connectToDB from "./utlis";

export const fetchUsers = async (q, page) => {
    const regex = new RegExp(q, "i");
    const ITEMS_PER_PAGE = 4;
    try {
        connectToDB()
        const count = await user.find({ username: { $regex: regex } }).count();
        const users = await user.find({ username: { $regex: regex } })
            .limit(ITEMS_PER_PAGE)
            .skip(ITEMS_PER_PAGE * (page - 1));
        return { count, users };
    } catch (err) {
        console.log(err);
        throw new Error("Failed To Fetch users!");
    }
};
export const fetchUser = async (id) => {
    try {
        connectToDB()
        const User = await user.findById(id);
        return User;
    } catch (err) {
        console.log(err);
        // throw new Error("Failed To Fetch users!");
    }
};
export const fetchProducts = async (q, page) => {

    const regex = new RegExp(q, "i");
    const ITEMS_PER_PAGE = 2;
    try {
        connectToDB()
        const count = await product.find({ title: { $regex: regex } }).count();
        const products = await product.find({ title: { $regex: regex } })
            .limit(ITEMS_PER_PAGE)
            .skip(ITEMS_PER_PAGE * (page - 1));
        return { count, products };

    } catch (err) {
        console.log(err);
        throw new Error("Failed To Fetch products!");
    }
};


export const fetchProduct = async (id) => {
    try {
        connectToDB()
        const Product = await product.findById(id);
        return Product;
    } catch (err) {
        console.log(err);
        throw new Error("Failed To Fetch products!");
    }
};