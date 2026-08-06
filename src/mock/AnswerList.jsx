const AnswerList = {
    'producto-no-encontrado': {
        img: '🤔',
        title: 'Producto no encontrado',
        description: '',
        button: 'Ver Servicios',
        direction: '/servicios'
    },
    'formulario-enviado': {
        img: '☺️',
        title: '¡Gracias por escribirnos!',
        description: 'Tu consulta ya está en nuestras manos. Te contactaremos a la brevedad para darte la orientación que necesitás. Mientras tanto, podés seguirnos en nuestras redes o escribirnos por WhatsApp si es urgente.',
        button: 'Volver al inicio',
        direction: '/'
    },
    '404': {
        img: '😥',
        title: 'Error 404',
        description: 'Página no encontrada',
        button: 'Volver al inicio',
        direction: '/'
    },
    'formulario-no-enviado': {
        img: '😥',
        title: '¡Ups! Algo salió mal',
        description: 'Parece que hubo un error al enviar tu consulta. Por favor, intentá nuevamente más tarde o escribinos por WhatsApp.',
        button: 'Volver al inicio',
        direction: '/'
    },
};
export default AnswerList;
