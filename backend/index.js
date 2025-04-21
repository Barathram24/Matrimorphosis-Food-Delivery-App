const express = require("express");
const cors = require("cors");
const path = require("path"); // ✅ Import path
const app = express();
// const port = 3000;

// Route imports
// const restaurantsRoutes = require("./routes/restaurants.routes.js");
const cartRoutes = require("./routes/cart.routes.js");
const ordersRoutes = require("./routes/orders.routes.js");
const restaurantsRoutes = require("./routes/restaurantRoutes.js");
const productRoutes = require("./routes/productRoutes.js");

app.use(cors());
app.use(express.json());

// ✅ Serve static image files from the "uploads" folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Route usage
app.use("/restaurants", restaurantsRoutes);
app.use("/products", productRoutes);

// app.listen(port, () => {
//   console.log(`🚀 Server running at http://localhost:${port}`);
// });

// app.use("/restaurants", restaurantsRoutes);
app.use("/cart", cartRoutes);
app.use("/orders", ordersRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
  mysqlClient.connect((err) => {
    if (err) {
      console.error("Error connecting to MySQL:", err.message);
      return;
    }

    console.log("Connected to MySQL");
  });
});
