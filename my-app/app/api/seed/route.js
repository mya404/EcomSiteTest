import connectDB from "@/lib/db";
import Product from "@/models/product";

export async function GET() {
    await connectDB();
    const products = await Product.find();
    await Product.deleteMany();

    await Product.insertMany([
        {   
            title: "Blue Sneakers",
            description: "Comfortable and stylish blue sneakers for everyday wear.",
            price: 59.99,
            category: "Footwear",
            image: "https://picsum.photos/500/300"
        },
        {
            title: "Red T-shirt",
            description: "A vibrant red t-shirt made from soft cotton.",
            price: 19.99,
            category: "Apparel",
            image: "https://picsum.photos/500/300"
        },
        {
            title: "Wireless Headphones",
            description: "High-quality wireless headphones with noise cancellation.",
            price: 129.99,
            category: "Electronics",
            image: "https://picsum.photos/500/300"
        }
    ]);
    return Response.json({message: "Database seeded successfully"});
}