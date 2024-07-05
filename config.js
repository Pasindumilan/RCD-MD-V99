//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "dextermd556@gmail.com";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";  
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VajJrH11yT23IuaIdW33";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VajJrH11yT23IuaIdW33";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/5460f6230a8df2372c566.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495";
global.owner = process.env.OWNER_NUMBER || "94705107963";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUMxUHZLSGxrN1hoY3FmU3l6YS92WWpnYURTM2trV3JUSFlQYlo4SXAwUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ3l2aThydU5DWDZFV3NWWkk3dlY1dE9OZGdzZkVOaDlJYkFvaW9KQzdWbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNQ1dLd0pLbDR1cjJ6ZlpaTFEvNzVVQUw4eTJLMHZBUkYxMitZSWMzVWtrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2VnZFSXdOT0I4SExwL0JlOUF3OGwvYU1DeHRWMVliSkRpL0IzU2JLT2t3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNIcnQ1cWdvRkVyUlhTVzBoSGd6U0FRajZ6VlhGRTRWTGo5ZUt3N1lwRXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlQwR0pSdFh3UE8wVVRCS2oyVGU0YjJqTG9LWjFOUlpycldRcjh0OGtmRmc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEVnWlU5OTAyM1A3dFBQT3RMaFl2bk50MERnT21qNEZOS2lnVjFrWTQzWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibFNOcWlEYU9SSHEwRGtCRWZmUSt5Njk0Y0Y3UGZlUThrQmlIaHVEaTF3TT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZqc29zMmJkZDhQOVduUTBDdkJUdVhnUGZJb2ZvdGtORXhtOW9laXNrdnRzaDJrTmZTTzc3OXBGYVRtVGFsam5WNDRtMkZNMWhTSFlPR0RBcmRQRmdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTEsImFkdlNlY3JldEtleSI6InVCZDRDdEEvelUrOWFUNVdGQWxUMG5aN0wwZWpMOFZyK1F2bU9mVStvSDA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImJjeHM0UF9TU2R5QVVwWG9laUdhbWciLCJwaG9uZUlkIjoiOWRmMWIzM2YtYjc4My00Y2YyLWFkNmUtOTg3OWQxZGUxNmE0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImltWTVqbEk5ZmJ1NEhIUis5QzZ5cWZmbUlhWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZTDl6MFU5SURLZXo5KzVvdHFiNmFSbEdXOEE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVDM4UFc4WDMiLCJtZSI6eyJpZCI6Ijk0NzI0MDU2MjI5OjhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiYXZhaWxhYmxlIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOT3ZrOHdGRU9TZW5iUUdHQVlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIwQk1DaUVWam9Dc0cza1JwY1NPRExPdUdvYVVyRmtzd2hySE01RklrNENVPSIsImFjY291bnRTaWduYXR1cmUiOiIxaVAzS0xCZStkSUtrK3c1ZUtnMXRwT2ZiR29EYTEwdFdDTUQvbEk4S25MNW5RWWdicWkrLzFCYllmb0ZuV21yekhCNWhOUUlRZGxOeE5YQ3RoUkFCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNmpyVFpnRFN0a2dvTFhBU25sblE4a1JvUDVFUUZVR2FkQW8xTFVXYmo4ODhLTGtja1VDdXBtNmZqYUkrK0Z0am1Ja1lJa2RFb1h3VFozQ2M0Qk9XaUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcyNDA1NjIyOTo4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmRBVEFvaEZZNkFyQnQ1RWFYRWpneXpyaHFHbEt4WkxNSWF4ek9SU0pPQWwifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjAxNDM3MjksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRUU1In0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "🇱🇰 P͢O͢W͢E͢R͢ B͢Y͢ Milan M͢D͢",
  author: process.env.PACK_AUTHER || "𝐌𝐈𝐋𝐀𝐍",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐌𝐈𝐋𝐀𝐍 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝐌𝐈𝐋𝐀𝐍",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "RCD").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
