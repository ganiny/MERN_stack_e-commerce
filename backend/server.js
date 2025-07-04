const express = require("express");
require("dotenv").config();
const connectToDB = require("./config/connectToDb");
const xss = require("xss-clean");
const hpp = require("hpp");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const rateLimiting = require("express-rate-limit");
const { errorHandler } = require("./middlewares/errors");
const path = require("path");
const helmet = require("helmet");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
require("./config/passport");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

//connect to database
connectToDB();

// initialize express app
const app = express();

//Static files
app.use(express.static(path.join(__dirname, "images")));

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(session({ secret: "secret", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

//Helmet
app.use(helmet());

//Hpp
app.use(hpp());

//Prevent XSS attacks
app.use(xss());

//Rate Limiting
app.use(
  rateLimiting({
    windowMs: 5 * 60 * 1000,
    max: 200,
  })
);

//CORS policy
app.use(cors({
  origin: process.env.FRONTEND_URL,
}));

//Routes
app.use("/api/auth", require("./routes/authRoute"));
app.use("/api/products", require("./routes/productsRoute"));
app.use("/api/users", require("./routes/usersRoute"));
app.use("/create-checkout-session", require("./routes/paymentRoute"));


//404 handler
// app.use(notFound);

//Error handler
app.use(errorHandler);

//run server
app.listen(process.env.PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  );
});
