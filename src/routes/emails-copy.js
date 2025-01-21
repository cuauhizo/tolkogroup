// import express from 'express';
// import dotenv from 'dotenv';
// import nodemailer from 'nodemailer';
// dotenv.config();

// const router = express.Router();

// // Crear el transporter una vez
// const transporter = nodemailer.createTransport({
//   host: 'smtp.gmail.com',
//   port: 465,
//   secure: true,
//   auth: {
//     user: process.env.TRASNSPORTER_USER,
//     pass: process.env.TRASNSPORTER_PASS,
//   },
// });

// // Verificar el transporter al iniciar la aplicación
// transporter.verify((error, success) => {
//   if (error) {
//     console.log('Error en la configuración de Nodemailer:', error);
//   } else {
//     console.log('Listo para enviar correos');
//   }
// });

// // Función para construir el contenido del correo
// const buildEmailContent = ({ nombre, telefono, email, servicio, mensaje }) => `
//   <h2>Mensaje de Contacto</h2>
//   <p><strong>Nombre:</strong> ${nombre}</p>
//   <p><strong>Teléfono:</strong> ${telefono}</p>
//   <p><strong>Email:</strong> ${email}</p>
//   <p><strong>Servicio:</strong> ${servicio}</p>
//   <p><strong>Mensaje:</strong> ${mensaje}</p>
// `;

// router.post('/', async (req, res) => {
//   const { nombre, telefono, email, servicio, mensaje } = req.body;

//   // Validar los campos
//   if (!nombre || !telefono || !email || !servicio || !mensaje) {
//     return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
//   }

//   try {
//     const content = buildEmailContent({ nombre, telefono, email, servicio, mensaje });

//     const info = await transporter.sendMail({
//       from: 'Tolko Group <info@tolkogroup.com>',
//       to: 'frodriguez@tolkogroup.com, cuauhizo@gmail.com',
//       subject: 'Nuevo mensaje de contacto',
//       html: content,
//     });

//     console.log('Correo enviado:', info.response);
//     res.status(200).json({ mensaje: 'Mensaje enviado correctamente' });
//   } catch (error) {
//     console.error('Error al enviar el correo:', error);
//     res.status(500).json({ mensaje: 'Hubo un error al enviar el correo', error });
//   }
// });

// export default router;

// ===============================================

import express from 'express';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
dotenv.config();

const router = express.Router();

router.post('/', async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.TRASNSPORTER_USER,
      pass: process.env.TRASNSPORTER_PASS,
    },
  });

  try {
    const { nombre, telefono, email, servicio, mensaje } = req.body;

    // Aquí puedes construir el contenido del correo electrónico usando los datos recibidos del formulario
    const content = `
      <h2>Mensaje de Contacto</h2>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Teléfono:</strong> ${telefono}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Servicio:</strong> ${servicio}</p>
      <p><strong>Mensaje:</strong> ${mensaje}</p>
    `;

    // Aquí envías el correo electrónico utilizando Nodemailer
    const info = await transporter.sendMail({
      // from: process.env.TRASNSPORTER_USER, // Usa tu correo aquí
      // from: 'Mensaje recibido de la página web',
      // from: `${nombre} "se a contactado"`, // Usa tu correo aquí
      from: 'Tolko Group <info@tolkogroup.com>', // Usa tu correo aquí
      to: 'frodriguez@tolkogroup.com, cuauhizo@gmail.com', // Cambia esto al correo al que quieres enviar los mensajes
      subject: 'Nuevo mensaje de contacto',
      html: content,
    });

    console.log(info.response);
    if (!info) {
      // Envía una respuesta al cliente
      console.log('Mensaje enviado correctamente');
      res.send('Mensaje enviado correctamente');
      res.status(200).json({ mensaje: 'Mensaje enviado correctamente' });
    } else {
      res.status(500).json({ mensaje: 'Error al enviar el mensaje' });
      console.log(info.error);
      res.send(info.error);
    }
  } catch (error) {
    res.status(500).send('Error al enviar el mensaje');
    console.log(error);
  }
  transporter.verify().then(() => console.log('Listo para enviar correo'));
});

export default router;
