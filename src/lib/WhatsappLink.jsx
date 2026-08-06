const WHATSAPP_NUMBER = "5493516210162";
const SITIO = "https://www.estudiointegralcontablesm.com.ar";

export default function WhatsappLink(servicio, categoria) {
    const mensaje =
        `\u00A1Hola Estudio Integral SM! \u{1F44B}\n` +
        `Estoy interesado/a en el ${categoria} de:\n` +
        `\u{1F4CB} *${servicio}*\n` +
        `\u00BFMe podr\u00EDan dar m\u00E1s info?\n` +
        `${SITIO}`;

    return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(mensaje)}`;
}