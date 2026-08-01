const AnswerList = {
    'carrito-vacio': {
        img: '🛒',
        title: 'Ups...tu carrito está vacío',
        description: '',
        button: 'Volver a la tienda',
        direction: '/servicios'
    },
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
    'compra-exitosa':{
        img: '🎉',
        title: '¡Compra realizada con éxito!',
        description: 'Pronto estarás recibiendo la información del servicio adquirido, unas de nuestras contadoras ya está atendiendo tu caso. Muchas gracias por confiar en SM Estudio Integral Contable.',
        button: 'Volver al inicio',
        direction: '/'
    }
};
export default AnswerList;
