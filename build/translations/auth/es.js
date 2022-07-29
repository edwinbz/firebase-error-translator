"use strict";
/**
 * File that contains the auth errors in es language.
 * Created on: Thu, 28 Jul 2022 23:29:03 GMT
 * Generated by "fto.js", file created by Jebbarbas.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const es = ['es', {
        "auth/claims-too-large": {
            toDev: "La carga útil de la reclamación que se entregó a setCustomUserClaims() supera el tamaño máximo de 1,000 bytes.",
            toClient: "default"
        },
        "auth/email-already-exists": {
            toDev: "Otro usuario ya está utilizando el correo electrónico proporcionado. Cada usuario debe tener un correo electrónico único.",
            toClient: "Otro usuario ya está utilizando este correo electrónico, por favor escriba otro."
        },
        "auth/id-token-expired": {
            toDev: "El token de ID de Firebase que se proporcionó está vencido.",
            toClient: "Tu token de ID ha vencido, vuelve a iniciar sesión."
        },
        "auth/id-token-revoked": {
            toDev: "Se revocó el token de ID de Firebase.",
            toClient: "Tu token de ID ha sido revocado, vuelve a iniciar sesión"
        },
        "auth/insufficient-permission": {
            toDev: "La credencial que se usó para inicializar el SDK de Admin no tiene permisos suficientes para acceder al recurso de Authentication solicitado. Consulta cómo configurar un proyecto de Firebase si necesitas ver la documentación para generar una credencial con los permisos apropiados y usarla a fin de autenticar los SDK de Admin.",
            toClient: "default"
        },
        "auth/internal-error": {
            toDev: "El servidor de Authentication encontró un error inesperado cuando se intentaba procesar la solicitud. Para obtener información adicional, revisa la respuesta del servidor de autenticación, que debería estar incluida en el mensaje de error. Si el error persiste, avísanos mediante nuestro canal de asistencia de informe de errores.",
            toClient: "default"
        },
        "auth/invalid-argument": {
            toDev: "Se proporcionó un argumento no válido para un método de autenticación. El mensaje de error debe incluir información adicional.",
            toClient: "default"
        },
        "auth/invalid-claims": {
            toDev: "Los atributos personalizados del reclamo que se entregaron a setCustomUserClaims() no son válidos.",
            toClient: "default"
        },
        "auth/invalid-continue-uri": {
            toDev: "La URL de continuación debe ser una string de URL válida.",
            toClient: "default"
        },
        "auth/invalid-creation-time": {
            toDev: "La hora de creación debe ser una string de fecha en formato UTC válida.",
            toClient: "default"
        },
        "auth/invalid-credential": {
            toDev: "La credencial que se usa para autenticar los SDK de Admin no se puede emplear a fin de realizar la acción deseada. Algunos métodos de autenticación, como createCustomToken() y verifyIdToken(), requieren que los SDK se inicialicen con una credencial de certificado en lugar de un token de actualización o una credencial predeterminada de la aplicación. Consulta Inicializa el SDK para ver documentación sobre cómo autenticar el SDK de Admin con una credencial de certificado.",
            toClient: "default"
        },
        "auth/invalid-disabled-field": {
            toDev: "El valor que se proporcionó para la propiedad del usuario disabled no es válido. Debe ser un booleano.",
            toClient: "default"
        },
        "auth/invalid-display-name": {
            toDev: "El valor que se proporcionó para la propiedad del usuario displayName no es válido. Debe ser una string que no esté vacía.",
            toClient: "El valor que se proporcionó para su nombre no es válido, por favor escriba un texto no vacío."
        },
        "auth/invalid-dynamic-link-domain": {
            toDev: "El dominio del vínculo dinámico proporcionado no se configuró o no se autorizó para el proyecto actual.",
            toClient: "default"
        },
        "auth/invalid-email": {
            toDev: "El valor que se proporcionó para la propiedad del usuario email no es válido. Debe ser una dirección de correo electrónico de string.",
            toClient: "El valor que se proporcionó para su correo electrónico no es válido, por favor escriba una dirección de correo válida."
        },
        "auth/invalid-email-verified": {
            toDev: "El valor que se proporcionó para la propiedad del usuario emailVerified no es válido. Debe ser un booleano.",
            toClient: "default"
        },
        "auth/invalid-hash-algorithm": {
            toDev: "El algoritmo de hash debe coincidir con las strings de la lista de algoritmos compatibles.",
            toClient: "default"
        },
        "auth/invalid-hash-block-size": {
            toDev: "El tamaño del conjunto de hash debe ser un número válido.",
            toClient: "default"
        },
        "auth/invalid-hash-derived-key-length": {
            toDev: "La longitud de la clave derivada de hash debe ser un número válido.",
            toClient: "default"
        },
        "auth/invalid-hash-key": {
            toDev: "La clave de hash debe ser un búfer de bytes válido.",
            toClient: "default"
        },
        "auth/invalid-hash-memory-cost": {
            toDev: "El costo de la memoria de hash debe ser un número válido.",
            toClient: "default"
        },
        "auth/invalid-hash-parallelization": {
            toDev: "La paralelización de hash debe ser un número válido.",
            toClient: "default"
        },
        "auth/invalid-hash-rounds": {
            toDev: "Las rondas de hash deben ser un número válido.",
            toClient: "default"
        },
        "auth/invalid-hash-salt-separator": {
            toDev: "El campo del separador de sal del algoritmo de hash debe ser un búfer de bytes válido.",
            toClient: "default"
        },
        "auth/invalid-id-token": {
            toDev: "El token de ID que se proporcionó no es un token de ID de Firebase válido.",
            toClient: "default"
        },
        "auth/invalid-last-sign-in-time": {
            toDev: "La hora del último acceso debe ser una string de fecha en formato UTC válida.",
            toClient: "default"
        },
        "auth/invalid-page-token": {
            toDev: "El token de página siguiente que se entregó en listUsers() no es válido. Debe ser una string válida que no esté vacía.",
            toClient: "default"
        },
        "auth/invalid-password": {
            toDev: "El valor que se proporcionó para la propiedad del usuario password no es válido. Debe ser una string con al menos seis caracteres.",
            toClient: "El valor que se proporcionó para la contraseña no es válido, por favor escriba un texto con al menos seis caracteres."
        },
        "auth/invalid-password-hash": {
            toDev: "El hash de contraseñas debe ser un búfer de bytes válidos.",
            toClient: "default"
        },
        "auth/invalid-password-salt": {
            toDev: "La contraseña con sal debe ser un búfer de bytes válido.",
            toClient: "default"
        },
        "auth/invalid-phone-number": {
            toDev: "El valor que se proporcionó para phoneNumber no es válido. Debe ser una string de identificador que no esté vacía y que cumpla con el estándar E.164.",
            toClient: "El valor que se proporcionó para el número de teléfono no es válido, por favor escriba un texto no vacío que cumpla con el estándar E.164."
        },
        "auth/invalid-photo-url": {
            toDev: "El valor que se proporcionó para la propiedad del usuario photoURL no es válido. Debe ser una URL de string.",
            toClient: "El valor que se proporcionó para la URL de su foto de percil no es válido, por favor escriba una URL válida."
        },
        "auth/invalid-provider-data": {
            toDev: "providerData debe ser una serie de objetos UserInfo.",
            toClient: "default"
        },
        "auth/invalid-provider-id": {
            toDev: "providerId debe ser una string del identificador del proveedor compatible válida.",
            toClient: "default"
        },
        "auth/invalid-oauth-responsetype": {
            toDev: "Se debe configurar solo un responseType de OAuth como verdadera.",
            toClient: "default"
        },
        "auth/invalid-session-cookie-duration": {
            toDev: "La duración de la cookie de sesión debe ser un número válido en milisegundos que vaya entre los 5 minutos y las 2 semanas.",
            toClient: "default"
        },
        "auth/invalid-uid": {
            toDev: "El uid proporcionado debe ser una string no vacía con un máximo de 128 caracteres.",
            toClient: "default"
        },
        "auth/invalid-user-import": {
            toDev: "El registro de usuarios para importar no es válido.",
            toClient: "default"
        },
        "auth/maximum-user-count-exceeded": {
            toDev: "Se excedió la cantidad máxima de usuarios permitidos para importar.",
            toClient: "default"
        },
        "auth/missing-android-pkg-name": {
            toDev: "Si es obligatorio instalar la app para Android, debe proporcionarse un nombre de paquete de Android.",
            toClient: "default"
        },
        "auth/missing-continue-uri": {
            toDev: "Se debe proporcionar una URL de continuación válida en la solicitud.",
            toClient: "default"
        },
        "auth/missing-hash-algorithm": {
            toDev: "Para importar usuarios con hash de contraseñas, es necesario proporcionar el algoritmo de hash y sus parámetros.",
            toClient: "default"
        },
        "auth/missing-ios-bundle-id": {
            toDev: "La solicitud debe contener un ID del paquete de iOS.",
            toClient: "default"
        },
        "auth/missing-uid": {
            toDev: "Se requiere un identificador uid para la operación actual.",
            toClient: "default"
        },
        "auth/missing-oauth-client-secret": {
            toDev: "El secreto de cliente de la configuración de OAuth es obligatorio para habilitar el flujo de código de OIDC.",
            toClient: "default"
        },
        "auth/operation-not-allowed": {
            toDev: "El proveedor de acceso proporcionado está inhabilitado para tu proyecto de Firebase. Habilítalo en la sección Método de acceso de Firebase console.",
            toClient: "default"
        },
        "auth/phone-number-already-exists": {
            toDev: "Otro usuario ya utiliza el phoneNumber proporcionado. Cada usuario debe tener un phoneNumber único.",
            toClient: "Otro usuario ya está utilizando este número de teléfono, por favor escriba otro."
        },
        "auth/project-not-found": {
            toDev: "No se encontró ningún proyecto de Firebase para la credencial que se usó para inicializar los SDK de Admin. Consulta cómo configurar un proyecto de Firebase si necesitas ver la documentación para generar la credencial de tu proyecto y usarla a fin de autenticar los SDK de Admin.",
            toClient: "default"
        },
        "auth/reserved-claims": {
            toDev: "Una o más reclamaciones personalizadas de usuarios que se entregaron a setCustomUserClaims() están reservadas. Por ejemplo, no deben usarse reclamos específicos de OIDC (p. ej., sub, iat, iss, exp, aud o auth_time) como claves para reclamos personalizados.",
            toClient: "default"
        },
        "auth/session-cookie-expired": {
            toDev: "La cookie proporcionada de la sesión de Firebase venció.",
            toClient: "default"
        },
        "auth/session-cookie-revoked": {
            toDev: "Se revocaron las cookies de la sesión de Firebase.",
            toClient: "default"
        },
        "auth/uid-already-exists": {
            toDev: "Otro usuario ya utiliza el uid proporcionado. Cada usuario debe tener un uid único.",
            toClient: "default"
        },
        "auth/unauthorized-continue-uri": {
            toDev: "El dominio de la URL de continuación no está en la lista blanca. Inclúyelo en la lista en Firebase console.",
            toClient: "default"
        },
        "auth/user-not-found": {
            toDev: "No existe ningún registro de usuario que corresponda al identificador proporcionado.",
            toClient: "Usuario no encontrado, por favor revise su información."
        },
    }];
exports.default = es;