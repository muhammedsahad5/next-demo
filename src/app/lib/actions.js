"use server"
import { revalidatePath } from "next/cache";
import { product, user } from "./models";
import connectToDB from "./utlis";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
export const addUser = async (formData) => {
    const { username, email, password, phone, isAdmin, isActive, address } =
        Object.fromEntries(formData);
    try {
        connectToDB();
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new user({
            username,
            email,
            password: hashedPassword,
            phone,
            isAdmin,
            isActive,
            address
        });
        await newUser.save();
    } catch (err) {
        console.log(err)
        throw new Error("Failed To create User!");
    }
    revalidatePath('/Dashboard/users')
    redirect('/Dashboard/users')
};
export const UpdateUser = async (formData) => {
    const { id, username, email, password, phone, isAdmin, isActive, address } =
        Object.fromEntries(formData);
    try {
        connectToDB();

        const updateFields = {
            username,
            email,
            password,
            phone,
            isAdmin,
            isActive,
            address
        };

        Object.keys(updateFields).forEach(
            (key) =>
                (updateFields[key] === "" || undefined) && delete updateFields[key]
        )
        await user.findByIdAndUpdate(id, updateFields)
    } catch (err) {
        console.log(err)
        // throw new Error("Failed To update User!");
    }
    revalidatePath('/Dashboard/users')
    redirect('/Dashboard/users')
};
export const Updateproduct = async (formData) => {
    const { id, title,
        desc,
        price,
        stock,
        color,
        size } =
        Object.fromEntries(formData);
    try {
        connectToDB();

        const updateFields = {
            title,
            desc,
            price,
            stock,
            color,
            size
        };

        Object.keys(updateFields).forEach(
            (key) =>
                (updateFields[key] === "" || undefined) && delete updateFields[key]
        )
        await product.findByIdAndUpdate(id, updateFields)
    } catch (err) {
        console.log(err)
        // throw new Error("Failed To update User!");
    }
    revalidatePath('/Dashboard/products')
    redirect('/Dashboard/products')
};
export const addProducts = async (formData) => {
    const { title, desc, price, stock, color, size } =
        Object.fromEntries(formData);
    try {
        connectToDB();
        const newProduct = new product({
            title,
            desc,
            price,
            stock,
            color,
            size
        });
        await newProduct.save();
    } catch (err) {
        console.log(err)
        // throw new Error("Failed To create product!");
    }
    revalidatePath('/Dashboard/products')
    redirect('/Dashboard/products')
};
export const deleteProducts = async (formData) => {
    const { id } =
        Object.fromEntries(formData);
    try {
        connectToDB();

        await product.findByIdAndDelete(id)
    } catch (err) {
        console.log(err)
        // throw new Error("Failed To delete product!");
    }
    revalidatePath('/Dashboard/products')
};
export const deleteuser = async (formData) => {
    const { id } =
        Object.fromEntries(formData);
    try {
        connectToDB();

        await user.findByIdAndDelete(id)
    } catch (err) {
        console.log(err)
        // throw new Error("Failed To delete users!");
    }
    revalidatePath('/Dashboard/users')
};