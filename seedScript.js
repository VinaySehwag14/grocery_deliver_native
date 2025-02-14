import "dotenv/config.js";
import mongoose from "mongoose";
import { categories, products } from "./seedData.js";
import { Category, Product } from "./src/models/index.js";

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Product.deleteMany({});
    await Category.deleteMany({});

    const categoryDocs = await Category.insertMany(categories);

    const categoryMap = categoryDocs.reduce((acc, category) => {
      acc[category.name] = category._id;
      return acc;
    }, {});

    const productWithCategoryIds = products.map((product) => ({
      ...product,
      category: categoryMap[product.category],
    }));
    await Product.insertMany(productWithCategoryIds);

    console.log("Database SEEDED SUCCESSFULLY🚀");
  } catch (error) {
    console.log("Error Seeding Database", error);
  } finally {
    mongoose.connection.close();
  }
}

seedDatabase();
