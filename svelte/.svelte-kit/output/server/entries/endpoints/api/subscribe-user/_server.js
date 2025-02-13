import { j as json } from "../../../../chunks/index.js";
import mailchimp from "@mailchimp/mailchimp_marketing";
import md5 from "md5";
const MAILCHIMP_API_KEY = "8417ec479841c18c32009f5629608a6a-us17";
const MAILCHIMP_AUDIENCE_ID = "935f26bf1c";
const MAILCHIMP_API_SERVER = "us17";
async function POST({ request }) {
  const { email } = await request.json();
  const emailHash = md5(email);
  mailchimp.setConfig({
    apiKey: MAILCHIMP_API_KEY,
    server: MAILCHIMP_API_SERVER
  });
  const mcRequest = await mailchimp.lists.setListMember(MAILCHIMP_AUDIENCE_ID, emailHash, {
    email_address: email,
    status_if_new: "pending"
  });
  if (mcRequest.id) {
    return json({ status: "success", data: mcRequest });
  } else {
    return json({ status: "error", data: mcRequest });
  }
}
export {
  POST
};
