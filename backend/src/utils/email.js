import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import ejs from 'ejs';

dotenv.config();

const transport = nodemailer.createTransport({
    host: process.env.NODEMAILER_HOST,
    port: process.env.NODEMAILER_PORT,
    secure: false,
    auth: {
        user: process.env.NODEMAILER_USERNAME,
        pass: process.env.NODEMAILER_PASSWORD,
    },
});

/***
 * @param {string} target
 * @param {string} name
 */
export async function sendRegistrationNotification(target, name, classroom) {
    const html = await ejs.renderFile(
        'src/views/registration-notification.ejs',
        { name, classroom }
    );
    await transport.sendMail({
        from: process.env.NODEMAILER_USERNAME,
        to: target,
        subject: 'PORSENI RISTEK 2025',
        html,
    });
}

export async function sendRejectedNotification(target, name, classroom) {
    const html = await ejs.renderFile('src/views/registration-rejected.ejs', {
        name,
        classroom,
    });
    await transport.sendMail({
        from: process.env.NODEMAILER_USERNAME,
        to: target,
        subject: 'PORSENI RISTEK 2025',
        html,
    });
}

export async function sendApprovedNotification(target, name, classroom, id) {
    const html = await ejs.renderFile('src/views/registration-approved.ejs', {
        name,
        classroom,
        id
    });
    await transport.sendMail({
        from: process.env.NODEMAILER_USERNAME,
        to: target,
        subject: 'PORSENI RISTEK 2025',
        html,
    });
}