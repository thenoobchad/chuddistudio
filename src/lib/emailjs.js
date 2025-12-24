import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const USER_ID = import.meta.env.VITE_USER_ID;

export const sendEmail = async (form) => {
	console.log(form);
	try {
		await emailjs.sendForm(
			SERVICE_ID,
			TEMPLATE_ID,
			form,
			USER_ID,
		);
		return { success: true, message: "Email sent successfully" };
	} catch (error) {
		console.error("Error sending email:", error);
		return { success: false, message: "Error sending email", error };
	}
};

