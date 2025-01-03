const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_02_12_01_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODUsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjIwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyNixcbiAgICAgICAgODgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTc2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDU5LFxuICAgICAgICA4LFxuICAgICAgICAxMjksXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjksXG4gICAgICAgIDk2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDcsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDUyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDksXG4gICAgICAgIDc5LFxuICAgICAgICAxMzksXG4gICAgICAgIDUwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDMwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDUwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDc0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTExLFxuICAgICAgICA3MixcbiAgICAgICAgOTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY0LFxuICAgICAgICA4NixcbiAgICAgICAgMTI1LFxuICAgICAgICA2NixcbiAgICAgICAgNDAsXG4gICAgICAgIDI0LFxuICAgICAgICA5MSxcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMjA5LFxuICAgICAgICA1LFxuICAgICAgICAyMixcbiAgICAgICAgODQsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU2LFxuICAgICAgICA0NixcbiAgICAgICAgMTA0LFxuICAgICAgICAxODYsXG4gICAgICAgIDM0LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDQxLFxuICAgICAgICA5NSxcbiAgICAgICAgNixcbiAgICAgICAgOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDM1LFxuICAgICAgICAxODksXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzIsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODQsXG4gICAgICAgIDEsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTAsXG4gICAgICAgIDIwLFxuICAgICAgICAxMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExLFxuICAgICAgICAxNzIsXG4gICAgICAgIDg2LFxuICAgICAgICAyMyxcbiAgICAgICAgODUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgODIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODgsXG4gICAgICAgIDczLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2MixcbiAgICAgICAgODMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ4M1dqQWJaVnpuOUNhT1gzVDBhM05QNXZWYWZrc29aTDZmdUVGNTlmU1N3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIyNTA1MDc3Njc1NjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjIwQzIzRDFFMUEzNTc4RkU1ODNGQzZFQUNDNTE0RTYwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNTg3MDM1M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIyNTA1MDc3Njc1NjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkM2REQ0RkZGQzNBREE0MDgzMDlDODNFNzkzQjNDOUU3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNTg3MDM1NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIyNTA1MDc3Njc1NjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjgwQjg2MzlBQzY2RTkwQjJCQkU3QkQyQzFDMUEzRTQwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNTg3MDM1NVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIyNTA1MDc3Njc1NjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkZFM0I0QTUyMUMzRTI5MzZFMjM3ODY1NjcwRUNFNzg1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNTg3MDM1NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ3WURzVTNISFMyS2Y2OEE2Z1N1cU1BXCIsXG4gIFwicGhvbmVJZFwiOiBcImYwMzk2NmVlLTdlYTEtNDkxYi04NThhLWQ1ZWU0ODViYjM2MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3LFxuICAgICAgMzcsXG4gICAgICAyMjEsXG4gICAgICAyMDgsXG4gICAgICAxMTEsXG4gICAgICAxMTIsXG4gICAgICAyMDIsXG4gICAgICAxMzMsXG4gICAgICAyNTQsXG4gICAgICAyMjgsXG4gICAgICAyMzIsXG4gICAgICAyMTUsXG4gICAgICA2MixcbiAgICAgIDEwOCxcbiAgICAgIDE2NixcbiAgICAgIDE1OSxcbiAgICAgIDIxMixcbiAgICAgIDg4LFxuICAgICAgMyxcbiAgICAgIDE2MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMyxcbiAgICAgIDE1MyxcbiAgICAgIDIxMSxcbiAgICAgIDE4MSxcbiAgICAgIDMsXG4gICAgICAyNTMsXG4gICAgICAxNjIsXG4gICAgICAxMDcsXG4gICAgICAxNTMsXG4gICAgICAxMzUsXG4gICAgICAxMzEsXG4gICAgICAwLFxuICAgICAgOTgsXG4gICAgICAyMjAsXG4gICAgICAxMzAsXG4gICAgICAyNDgsXG4gICAgICAxMixcbiAgICAgIDE4NyxcbiAgICAgIDE3OCxcbiAgICAgIDEzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1NVdDUVlYWVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI1MDUwNzc2NzU2MzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTF9cIixcbiAgICBcImxpZFwiOiBcIjE3OTc5MzIwMzExOTA1OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS0xmL1l3RkVJeVAzYnNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJaWUplaFFFYjdNSm00eDIxSVV2VHRqSXcvTEV5RDlkTm93ak42eHZZUlVZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjhFSTNvTG1YWHJtd0lCbHNlYk9RWnU4VDdjT1RKRzdQMFZTWUpnWERBVWhxMG9ZVG13cmFydXJOTldyTmw4UXA3RHhWUUR1QjdHQVZ0Y1J4dEtoVENRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImZUN2dvME41WWdjUHEzQjRkcWFORW9tcm1iZk1JYXMrRno2RXE2WDZLeGdkREFFKzlySEpWNSt3OWJNVEJGTWdBVWw0bXdvUzN3UGNMMEhpV3FsQkFBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyNTA1MDc3Njc1NjM6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDcwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzU4NzAzNTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFId2NcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUh3Yy5qc29uIjogIntcImtleURhdGFcIjpcIitJam5sOFBUZG14SmY4eHAxN3c1T3h5cWFtT25LVG1tbCtZM0Q0MUJ3aFU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM2OTQwMzI5OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM1ODcwMzU0MjIxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
