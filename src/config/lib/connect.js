const { default: makeWASocket, fetchLatestBaileysVersion, useMultiFileAuthState, DisconnectReason } = require("@whiskeysockets/baileys");
const pino = require("pino");
const NodeCache = require("node-cache");
const readline = require("readline");

const msgRetryCounterCache = new NodeCache();
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const question = (text) => new Promise((resolve) => rl.question(text, resolve));

async function connectToWhatsApp() {
  const { state, saveCreds } = await useMultiFileAuthState("./auth_info_baileys");
  const { version } = await fetchLatestBaileysVersion();

  const sock = makeWASocket({
    version,
    logger: pino({ level: "silent" }),
    printQRInTerminal: false,
    mobile: false,
    browser: ["FireFox (linux)"],
    auth: state,
    msgRetryCounterCache,
  });

  if (!sock.authState.creds.registered) {
    const phoneNumber = await question("Enter your phone number\n/> ");
    const code = await sock.requestPairingCode(phoneNumber);
    console.log(`Your code: ${code}\n`);
    console.log("Open your WhatsApp, go to Connected Devices > Connect a new Device > Connect using phone number.");
  }

  sock.ev.on("connection.update", (update) => {
    const { connection, lastDisconnect } = update;
    if (connection === "close") {
      const shouldReconnect = lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut;
      if (shouldReconnect) {
        connectToWhatsApp();
      }
    } else if (connection === "open") {
      console.log("➜ connected");
      return
    }
  });

  sock.ev.on("creds.update", saveCreds);
  return sock;
}

connectToWhatsApp()
