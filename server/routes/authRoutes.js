import express from "express";
const router = express.Router(); // creating a new router instance

router.post("/register", (req,res) =>{
    const username = req.body.username; // extracting the username from the request body

    res.json({
        message:"User registered successfully",
        username: username,
    })
})

export default router; // exporting the router instance for use in other parts of the application