import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_hj3ntbh'; 
const TEMPLATE_ID = 'template_zc83fge'; 
const PUBLIC_KEY = 'CDG1MwJdC4gUjStNC'; 

export const sendEmail = async (emailData: Record<string, any>) => {
    try {
        const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, emailData, PUBLIC_KEY);
        console.log('Email sent successfully:', response);
        return { success: true, response };
    } catch (error) {
        console.error('Error sending email:', error);
        return { success: false, error };
    }
};
