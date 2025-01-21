import { json } from '@sveltejs/kit';
import mailchimp from '@mailchimp/mailchimp_marketing';
import md5 from 'md5';
import {
	MAILCHIMP_API_KEY,
	MAILCHIMP_AUDIENCE_ID,
	MAILCHIMP_API_SERVER
} from '$env/static/private';

export async function POST({ request }) {
	// get email from request
	const { email } = await request.json();

	// create hash for email
	const emailHash = md5(email);

	// set mailchimp config
	mailchimp.setConfig({
		apiKey: MAILCHIMP_API_KEY,
		server: MAILCHIMP_API_SERVER
	});

	// make request to mailchimp
	const mcRequest = await mailchimp.lists.setListMember(MAILCHIMP_AUDIENCE_ID, emailHash, {
		email_address: email,
		status_if_new: 'pending'
	});

	// return response
	if (mcRequest.id) {
		return json({ status: 'success', data: mcRequest });
	} else {
		return json({ status: 'error', data: mcRequest });
	}
}
