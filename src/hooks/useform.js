import { useState } from 'react';
import emailjs from '@emailjs/browser';

/**
 * Custom hook to handle form submission and send email via EmailJS
 * @returns {Object} { sendEmail, loading, error, success }
 */
export function useForm() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(false);

	/**
	 * Envoie un email via EmailJS
	 * @param {Object} formData - Les données du formulaire (doivent correspondre au template EmailJS)
	 */
	const sendEmail = async (formData) => {
		setLoading(true);
		setError(null);
		setSuccess(false);
		try {
			// Récupération des variables d'environnement Vite
			const serviceId = import.meta.env.VITE_SERVICE_ID;
			const templateId = import.meta.env.VITE_TEMPLATE_ID;
			const publicKey = import.meta.env.VITE_PUBLIC_KEY;

			if (!serviceId || !templateId || !publicKey) {
				throw new Error("EmailJS configuration manquante dans .env");
			}

			const templateParams = {
				name: formData.name,
				email: formData.email,
				service: formData.services || 'Non spécifié',
				message: formData.message,
				to_email: 'arelletagne@gmail.com',//arelletagne@gmail.com
				reply_to: formData.email
			};

			// Envoi de l'email avec EmailJS
			const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
			if (response.status === 200 || response.text === 'OK') {
				setSuccess(true);
				setError(null);
			} else {
				setSuccess(false);
				setError('Erreur lors de l\'envoi du mail');
			}
		} catch (err) {
			setSuccess(false);
			setError(err?.text || err?.message || "Erreur lors de l'envoi du mail");
			console.log("erreur :", err);
		} finally {
			setLoading(false);
		}
	};

	return { sendEmail, loading, error, success };
}
