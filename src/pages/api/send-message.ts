import axios from "axios";
import {NextApiRequest, NextApiResponse} from "next";

const BOT_TOKEN = process.env.NEXT_TELEGRAM_TOKEN;
const CHAT_ID = process.env.NEXT_CHAT_ID;
const USER_ID = process.env.NEXT_USER_ID;

const getConfig = (name: string, email: string, message: string) => {
  const date = new Date();
  const formattedDate = date.toLocaleString('en-US', {
    timeZone: 'Asia/Phnom_Penh',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true // Use 12-hour clock format
  });
  const text = `
    ========= Contact =========\n
  &#9790;<b> Date: ${formattedDate}  </b>\n
  ========================\n
  &#9787;<b> Name: </b> ${name}\n
  &#9993;<b> Email: </b>${email}\n
  &#9743;<b> Message: </b> <i> ${message}</i>
  `;
  
  return {
    baseURL: "https://api.telegram.org",
    params: {
      text,
      parse_mode: 'HTML',
      chat_id: CHAT_ID,
      user_id: USER_ID
    },
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).send("Method not allowed.");
    return;
  }

  const {name, email, message} = req.body;

  if (!name || !email || !message) {
    res.status(400).json({message: "Invalid request body."});
    return;
  }

  const config = getConfig(name, email, message);
  const url = `/bot${BOT_TOKEN}/sendMessage`;

  try {
    await axios.post(url, {}, config);
    res.status(200).json({message: "Message sent successfully"});
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({message: "Failed to send message."});
  }
}
