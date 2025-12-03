export interface EmailParams {
	subject: string;
	body?: string;
	fromEmail?: string;
}

class EmailModalState {
	isOpen = $state(false);
	params = $state<EmailParams>({ subject: '', body: '' });

	open(params: EmailParams) {
		this.params = params;
		this.isOpen = true;
	}

	close() {
		this.isOpen = false;
	}
}

export const emailModalState = new EmailModalState();
