import { Resend } from 'resend';
import { json } from '@sveltejs/kit';
import { COMPANY_EMAIL } from '$lib/email';
import type { RequestHandler } from './$types';

import { RESEND_API_KEY } from '$env/static/private';

const resend = new Resend(RESEND_API_KEY);

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { name, email, message } = await request.json();

		if (!name || !email || !message) {
			return json({ error: 'Faltan campos requeridos' }, { status: 400 });
		}

		const { data, error } = await resend.emails.send({
			from: 'Sarch Web <onboarding@resend.dev>', // Update this to your verified domain later
			to: [COMPANY_EMAIL],
			subject: `Nueva consulta web de ${name}`,
			replyTo: email,
			text: `
Nombre: ${name}
Email: ${email}

Mensaje:
${message}
            `
		});

		if (error) {
			return json({ error: error.message }, { status: 500 });
		}

		return json({ success: true, data });
	} catch (err) {
		console.error(err);
		return json({ error: 'Error interno del servidor' }, { status: 500 });
	}
};
