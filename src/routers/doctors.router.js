import { Router } from "express";

const doctorsRouter = Router();

doctorsRouter.get("/test", (req, res) => res.send("Hello world"));

export default { router: doctorsRouter, path: "/doctor" };
