import express from "express";
import cors from "cors";
import { FRONT_END } from "./utils/requests";
import mongoose from "mongoose";
import session from "express-session";
import passport from "passport";
import User from "./schemas/User";
import Bin from "./schemas/Bin";
const dotenv = require("dotenv").config({ path: "../.env" });
import { createBin, getFormattedDate } from "./utils/binUtils";
import { MongoUser } from "./utils/types";

const app = express();
const githubStrategy = require("./strategies/githubStrategy");
const PORT = 5000;

app.use(cors({
    origin: `${FRONT_END}`,
    credentials: true
}));

mongoose.connect(`${process.env.START_MONGODB}${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}${process.env.END_MONGODB}`,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }).then(() => console.log("Connected with MongoDB"))
    .catch(err => console.log(`MongoDB connection error: ${err}`));

app.set("trust proxy", 1);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(session({
    secret: `${process.env.SESSION_SECRET}`,
    resave: true,
    saveUninitialized: true,
    cookie: {
        secure: !!process.env.PRODUCTION
    }
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user: any, done: any) => {
    return done(null, user._id);
});

passport.deserializeUser((id: string, done: any) => {
    User.findById(id, (err: mongoose.Error, document: any) => {
        return done(null, document);
    });
});

githubStrategy(passport, app);

function isLoggedIn(req: any, res: any, next: any) {
    if (req.isAuthenticated())
        next();
    else res.redirect(FRONT_END);
}

app.post("/bin/creation", (req, res) => {
    createBin(req.body, req.user as MongoUser).then(binCreation => {
        if (binCreation.succeed) {
            res.status(201).json(binCreation);
        } else {
            res.status(500).json(binCreation);
        }
    }).catch(err => console.log(err));
});

app.get("/bin/user", (req, res) => {
    const user = req.user as MongoUser;
    // @ts-ignore
    Bin.find({ ownerId: user._id }, (err: mongoose.Error, documents) => {
        const bins: any[] = [];
        documents.forEach((document) => {
            bins.push({
                binId: document.get("binId"),
                createdAt: getFormattedDate(Date.parse(document.get("createdAt"))),
                title: document.get("title"),
                description: document.get("description"),
                languageId: document.get("languageId"),
            });
        });

        if (err)
            res.json({ succeed: false });
        else
            res.json({ succeed: true, bins });
    });
});

app.get("/user", (req, res) => {
    if (req.user) {
        res.json(req.user);
    } else {
        res.json({loginFailed: true});
    }
});

app.get("/auth/logout", (req, res) => {
    if (req.user) {
        req.logout();
        res.send("done");
    }
});

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});