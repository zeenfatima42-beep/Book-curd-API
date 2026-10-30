import express from "express";
import bookRoutes from "./routes/bookRoutes.js";
const app = express();
app.use(express.json());
app.use("/api", bookRoutes);
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
