// Central Configuration
import { emailModalState } from '$lib/email-state.svelte';
import type { EmailParams } from '$lib/email-state.svelte';

export const COMPANY_EMAIL: string = 'info@sarchconsultores.com';

export { type EmailParams };

export function getMailtoLink({ subject, body = '' }: EmailParams): string {
	const s = encodeURIComponent(subject);
	const b = encodeURIComponent(body);
	return `mailto:${COMPANY_EMAIL}?subject=${s}&body=${b}`;
}

export function openEmailClient(params: EmailParams): void {
	// Simple mobile detection
	const isMobile =
		typeof navigator !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

	if (isMobile) {
		// On mobile, use the native mail app (mailto)
		window.location.href = getMailtoLink(params);
	} else {
		// On desktop, open the modal to let the user choose their provider
		emailModalState.open(params);
	}
}

export function formatContactBody(name: string, email: string, message: string): string {
	return `Nombre: ${name}
Email de contacto: ${email}

Mensaje:
${message}`;
}
