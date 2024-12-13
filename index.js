const { spawn } = require("child_process");
const axios = require("axios");
const logger = require("./utils/log");
const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8080;

///////////////////////////////////////////////////////////
//========= Serve Website and Facebook Login ============//
///////////////////////////////////////////////////////////

// Serve the static `index.html` file
app.use(express.static(path.join(__dirname)));

// Facebook login endpoint to handle user authentication
app.post("/facebook-login", express.json(), (req, res) => {
    const { accessToken } = req.body;

    if (!accessToken) {
        return res.status(400).json({ error: "Access token missing" });
    }

    // Verify the token using Facebook Graph API
    axios
        .get(`https://graph.facebook.com/me?fields=id,name,email&access_token=${accessToken}`)
        .then((response) => {
            const userData = response.data;
            logger(`User logged in: ${userData.name} (${userData.email})`, "[ Facebook Login ]");

            // Perform any server-side logic (e.g., saving user data)
            res.json({ success: true, user: userData });
        })
        .catch((error) => {
            logger(`Facebook login error: ${error.message}`, "[ Facebook Login Error ]");
            res.status(400).json({ error: "Invalid access token" });
        });
});

// Start the server and handle errors
app.listen(port, () => {
    logger(`Server is running on port ${port}...`, "[ Starting ]");
}).on("error", (err) => {
    if (err.code === "EACCES") {
        logger(`Permission denied. Cannot bind to port ${port}.`, "[ Error ]");
    } else {
        logger(`Server error: ${err.message}`, "[ Error ]");
    }
});

/////////////////////////////////////////////////////////
//========= Create start bot and make it loop =========//
/////////////////////////////////////////////////////////

// Initialize global restart counter
global.countRestart = global.countRestart || 0;

function startBot(message) {
    if (message) logger(message, "[ Starting ]");

    const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "Priyansh.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true,
    });

    child.on("close", (codeExit) => {
        if (codeExit !== 0 && global.countRestart < 5) {
            global.countRestart += 1;
            logger(`Bot exited with code ${codeExit}. Restarting... (${global.countRestart}/5)`, "[ Restarting ]");
            startBot();
        } else {
            logger(`Bot stopped after ${global.countRestart} restarts.`, "[ Stopped ]");
        }
    });

    child.on("error", (error) => {
        logger(`An error occurred: ${JSON.stringify(error)}`, "[ Error ]");
    });
}

////////////////////////////////////////////////
//========= Check update from Github =========//
////////////////////////////////////////////////

axios
    .get("https://raw.githubusercontent.com/priyanshu192/bot/main/package.json")
    .then((res) => {
        logger(res.data.name, "[ NAME ]");
        logger(`Version: ${res.data.version}`, "[ VERSION ]");
        logger(res.data.description, "[ DESCRIPTION ]");
    })
    .catch((err) => {
        logger(`Failed to fetch update info: ${err.message}`, "[ Update Error ]");
    });

////////////////////////////////////////////////
//========= Main Execution Logic =============//
////////////////////////////////////////////////

// Start the bot
startBot();
    
