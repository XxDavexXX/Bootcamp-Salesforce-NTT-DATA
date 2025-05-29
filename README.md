# 🚀 Reto Técnico – Bootcamp Salesforce | NTT DATA Perú

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)
[![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white)](https://axios-http.com/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)

---

## 📋 Descripción

Este proyecto consiste en un servicio **Full-Stack** que genera y muestra una lista de 10 personas aleatorias, obtenidas de la API pública [randomuser.me](https://randomuser.me).  
La solución implementa una **API RESTful** con Node.js/Express para el back-end, y un front-end en HTML, CSS y JavaScript puro, cumpliendo la especificación técnica del reto.

---

## 📦 Tecnologías Utilizadas

- **Back-end**: Node.js, Express y Axios
- **Front-end**: HTML5, CSS3 y JavaScript (vanilla)
- **API Externa**: [randomuser.me/api](https://randomuser.me/api/)

---

## 🎨 Demo Visual

> Las personas se muestran en tarjetas individuales, resaltando **nombre**, **género**, **ubicación**, **correo**, **fecha de nacimiento** y **fotografía** de cada usuario.

---

## 📁 Estructura del Proyecto
nttdata-bootcamp-reto/
├── backend/
│   ├── controllers/
│   │   └── userController.js        
│   ├── routes/
│   │   └── userRoutes.js            
│   ├── services/
│   │   └── fetchUsers.js            
│   ├── config/
│   │   └── server.js                
│   ├── app.js                       
│   ├── .env                     
│   ├── package.json
│   └── package-lock.json
├── frontend/
│   ├── index.html
│   ├── script.js
│   ├── styles.css
├── .gitignore
└── README.md


## 📥 Instalación y Ejecución

# Clonar el repositorio
git clone https://github.com/tuusuario/nttdata-bootcamp-reto.git

# Ir al directorio del back-end
cd nttdata-bootcamp-reto/backend

# Configurar variables de entorno
Crea un archivo llamado `.env` dentro de la carpeta `backend/` con el siguiente contenido:
PORT=3000

# Instalar dependencias
npm install

# Ejecutar servidor
node app.js

#Visualizar el front-end
cd ../frontend
Abre el archivo index.html en tu navegador

## 👨‍💻 Autor

**Dave Ryan Santivañez Munguía**  
Egresado Técnico en Desarrollo de Software – TECSUP  
Lima, Perú  
📧 [dave.santivanez@gmail.com](mailto:dave.santivanez@gmail.com)

---

## 💡 Motivación y Enfoque

Este proyecto fue desarrollado como parte del reto técnico del Bootcamp Salesforce de NTT DATA Perú, bajo el enfoque Full-Stack, con el objetivo de demostrar dominio en el consumo e integración de APIs, estructuración de servicios RESTful, y presentación de datos en interfaces limpias y funcionales.
Mi meta es certificarme como desarrollador Salesforce y formar parte de una empresa líder que valore la innovación y el crecimiento profesional.

---

## 📝 Notas Finales

- Proyecto realizado exclusivamente para evaluación técnica en el Bootcamp de NTT DATA Perú.
- Enfoque en la separación clara de responsabilidades y estructura modular del código.
- El código fuente puede ser adaptado y extendido para futuras mejoras o integraciones.
- No se incluyen datos sensibles ni credenciales en el repositorio.

---

## 🚀 ¡Gracias por visitar este proyecto!

Estoy comprometido con la mejora continua y el desarrollo de soluciones tecnológicas de calidad.  
Para consultas o propuestas de colaboración, no dudes en contactarme.

---


