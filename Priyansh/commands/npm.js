module.exports.config = {
    name: "npm",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "Rahad",
    description: "NPM Package information",
    commandCategory: "Admin",
    usages: "/npm [packageName]",
    usePrefix: false,
    cooldowns: 2,
};

module.exports😋.run = async function ({ api, event, args }) {
    const axios = require("axios");
    let { threadID, messageID, body } = event;
    let tid = threadID,
        mid = messageID;
    const packageName = encodeURIComponent(args.join(" "));

    if (!args[0]) return api.sendMessage("Please type a package name...", tid, mid);

    try {
        const apiEndpoint = `https://npm-packages-information.mohammad-rahad.repl.co/npm?packageName=${packageName}`;
        const res = await axios.get(apiEndpoint);
        const packageInfo = res.data;

        const response = `NPM Package: ${packageInfo["NPM Package"]}\nLatest Version: ${packageInfo["Latest Version"]}\nDescription: ${packageInfo["Description"]}\nAPI backed by: ${packageInfo["API backed by"]}\nLicense: ${packageInfo["License"]}\nAuthor: ${packageInfo["Author"]}\nHomepage: ${packageInfo["Homepage"]}\nKeywords: ${packageInfo["Keywords"].join(', ')}\nMaintainers: ${packageInfo["Maintainers"].join(', ')}\nReadmeFilename: ${packageInfo["ReadmeFilename"]}\nRepository: ${packageInfo["Repository"]}\nBugs: ${packageInfo["Bugs"]}`;

        api.sendMessage(response, tid, (error, info) => {
            if (error) {
                console.error(error);
            }
        }, mid);
    } catch (error) {
        console.error(error);
        api.sendMessage("An error occurred while fetching the data.", tid, mid);
    }
};