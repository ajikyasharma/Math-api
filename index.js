const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mathRoutes = require("./routes/mathRoutes.js");
const errorHandler = require("./middlewares/errorHandler.js");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", mathRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
