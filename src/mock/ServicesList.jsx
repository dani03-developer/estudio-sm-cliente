import { MdComputer, MdOutlineAccountBalance } from "react-icons/md";
import { FaFileInvoiceDollar, FaBuilding } from "react-icons/fa";
import { BsFileEarmarkText, BsClipboardCheck, BsShop } from "react-icons/bs";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { TbFileAlert, TbReceiptTax, TbFileDescription, TbScale } from "react-icons/tb";
import { RiGovernmentLine } from "react-icons/ri";
import { PiWarningCircle } from "react-icons/pi";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { LuKeyRound } from "react-icons/lu";
const ServicesList = [
    {
        //id: "1",
        iconName: 'LuKeyRound',
        icon: <LuKeyRound />,
        img: 'https://i.postimg.cc/vZzS96kD/img-producto.jpg',
        type: 'Servicio Puntual',
        nameService: 'Obtención de CUIT y Clave Fiscal',
        description: 'Obtención de CUIT, blanqueo y elevación de nivel de seguridad de Clave Fiscal en ARCA.',
        detail: 'El CUIT y la Clave Fiscal son la puerta de entrada al mundo tributario argentino. Sin ellos no podés facturar, inscribirte en impuestos ni realizar ningún trámite ante ARCA. Te acompañamos desde el inicio: gestionamos la obtención de tu CUIT, el blanqueo de clave y la elevación al nivel de seguridad necesario para operar con total tranquilidad.',
        price: 40000,
        categoria: 'inscripciones'
    },
    {
        //id: "2",
        iconName: 'MdComputer',
        icon: <MdComputer />,
        img: 'https://i.postimg.cc/vZzS96kD/img-producto.jpg',
        type: 'Servicio Puntual',
        nameService: 'Alta en Monotributo',
        description: 'Encuadre inicial en la categoría correcta según tus ingresos, superficie y energía. Configuración del domicilio fiscal electrónico.',
        detail: 'Arrancar bien desde el principio te evita problemas futuros. Analizamos tus ingresos estimados, superficie del local y consumo de energía para encuadrarte en la categoría correcta del Monotributo. También configuramos tu domicilio fiscal electrónico para que recibas todas las notificaciones de ARCA sin sorpresas.',
        price: 30000,
        categoria: 'inscripciones'
    },
    {
        //id: "3",
        iconName: 'BsFileEarmarkText',
        icon: <BsFileEarmarkText />,
        img: 'https://i.postimg.cc/vZzS96kD/img-producto.jpg',
        type: 'Servicio Puntual',
        nameService: 'Alta en Ingresos Brutos',
        description: 'Inscripción en el Régimen Simplificado o General de la DPR de Jujuy o DGR de Salta, incluyendo Convenio Multilateral.',
        detail: 'Además de los impuestos nacionales, cada provincia tiene su propio régimen de Ingresos Brutos. Te inscribimos en el Régimen Simplificado o General de la DPR de Jujuy o DGR de Salta según corresponda, y si operás en ambas provincias, gestionamos también el alta en el Convenio Multilateral.',
        price: 50000,
        categoria: 'inscripciones'
    },
    {
        //id: "4",
        iconName: 'BsShop',
        icon: <BsShop />,
        img: 'https://i.postimg.cc/vZzS96kD/img-producto.jpg',
        type: 'Servicio Puntual',
        nameService: 'Habilitación de Facturación',
        description: 'Configuración del sistema Comprobantes en Línea de ARCA y parametrización de Facturador Web o APIs de facturación.',
        detail: 'Facturar correctamente es una obligación legal y una herramienta de gestión. Configuramos tu punto de venta en el sistema Comprobantes en Línea de ARCA, parametrizamos el Facturador Web o vinculamos las APIs de facturación que uses, para que puedas emitir comprobantes desde el primer día sin errores ni demoras.',
        price: 60000,
        categoria: 'inscripciones'
    },
    {
        //id: "5",
        iconName: 'HiOutlineDocumentSearch',
        icon: <HiOutlineDocumentSearch />,
        img: 'https://i.postimg.cc/vZzS96kD/img-producto.jpg',
        type: 'Servicio Puntual',
        nameService: 'Diagnóstico Fiscal',
        description: 'Análisis completo de tu situación en ARCA: Nuestra Parte, Cuentas Tributarias y Mis Facilidades para determinar deudas reales.',
        detail: 'Muchas veces los contribuyentes no saben con exactitud cuánto deben ni por qué. Realizamos un análisis exhaustivo de tu situación fiscal revisando la Nuestra Parte, Cuentas Tributarias y Mis Facilidades en ARCA, para darte un panorama claro de tu estado real y definir el mejor camino a seguir.',
        price: 40000
    },
    {
        //id: "6",
        iconName: 'TbFileAlert',
        icon: <TbFileAlert />,
        img: 'https://i.postimg.cc/vZzS96kD/img-producto.jpg',
        type: 'Servicio Puntual',
        nameService: 'Levantamiento de CUIT',
        description: 'Reactivación de CUITs limitadas por falta de presentación de declaraciones juradas o inconsistencias ante ARCA.',
        detail: 'Un CUIT limitado te impide facturar, cobrar transferencias y operar con normalidad. Gestionamos el trámite digital de reactivación ante ARCA, identificando las causas de la limitación, regularizando las presentaciones pendientes y reestableciendo tu operatividad en el menor tiempo posible.',
        price: 45000,
        categoria: 'inscripciones'
    },
    {
        //id: "7",
        iconName: 'LiaMoneyCheckAltSolid',
        icon: <LiaMoneyCheckAltSolid />,
        img: 'https://i.postimg.cc/vZzS96kD/img-producto.jpg',
        type: 'Servicio Puntual',
        nameService: 'Planes de Facilidades de Pago',
        description: 'Confección y presentación de planes de regularización en ARCA o moratorias locales en la DPR de Jujuy o DGR de Salta.',
        detail: 'Las deudas impositivas acumuladas pueden resolverse de forma ordenada y sin afectar tu actividad. Analizamos tu situación, evaluamos los planes de regularización vigentes en ARCA y las moratorias locales disponibles, y confeccionamos el plan más conveniente para que puedas ponerte al día sin presiones.',
        price: 50000
    },
    {
        //id: "8",
        iconName: 'PiWarningCircle',
        icon: <PiWarningCircle />,
        img: 'https://i.postimg.cc/vZzS96kD/img-producto.jpg',
        type: 'Servicio Puntual',
        nameService: 'Contestación de Intimaciones',
        description: 'Redacción de descargos formales ante notificaciones en el Domicilio Fiscal Electrónico por desvíos en el IVA o fiscalizaciones.',
        detail: 'Recibir una intimación de ARCA puede ser angustiante si no sabés cómo responderla. Redactamos descargos formales con fundamentación técnica y respaldo documental ante notificaciones por desvíos en el IVA, exclusiones de oficio o fiscalizaciones electrónicas locales, protegiendo tus derechos en todo momento.',
        price: 35000
    },
    {
        //id: "9",
        iconName: 'BsClipboardCheck',
        icon: <BsClipboardCheck />,
        img: 'https://i.postimg.cc/vZzS96kD/img-producto.jpg',
        type: 'Servicio Puntual',
        nameService: 'Certificación de Ingresos',
        description: 'Preparación del perfil de ingresos con informe de contador público según RT 37, requerido por entidades bancarias o comerciales.',
        detail: 'Bancos, inmobiliarias y empresas suelen requerir una certificación profesional de ingresos para otorgar créditos, alquileres o contratos. Preparamos tu perfil de ingresos basado en documentación respaldatoria y emitimos el informe de contador público certificado según la Resolución Técnica 37 de la FACPCE.',
        price: 25000,
        categoria: 'certificaciones'
    },
    {
        //id: "10",
        iconName: 'MdOutlineAccountBalance',
        icon: <MdOutlineAccountBalance />,
        img: 'https://i.postimg.cc/vZzS96kD/img-producto.jpg',
        type: 'Servicio Puntual',
        nameService: 'Manifestación de Bienes',
        description: 'Estado patrimonial detallado para solicitud de créditos prendarios o hipotecarios ante entidades financieras.',
        detail: 'Para acceder a créditos prendarios, hipotecarios o líneas de financiamiento, las entidades financieras requieren conocer tu patrimonio real. Elaboramos un estado patrimonial detallado a una fecha determinada, reflejando con precisión tus bienes, deudas y patrimonio neto con la firma certificada del contador.',
        price: 25000,
        categoria: 'certificaciones'
    },
    {
        //id: "11",
        iconName: 'FaBuilding',
        icon: <FaBuilding />,
        img: 'https://i.postimg.cc/vZzS96kD/img-producto.jpg',
        type: 'Servicio Puntual',
        nameService: 'Certificación de Origen de Fondos',
        description: 'Requerida por la UIF, escribanías o concesionarias para compra de vehículos, inmuebles o transacciones financieras.',
        detail: 'La normativa antilavado exige acreditar el origen de los fondos en operaciones de envergadura como la compra de vehículos, inmuebles o activos financieros. Emitimos la certificación de origen de fondos requerida por la UIF, escribanías y concesionarias, con el respaldo documental y profesional necesario.',
        price: 30000,
        categoria: 'certificaciones'
    },
    {
        //id: "12",
        iconName: 'TbScale',
        icon: <TbScale />,
        img: 'https://i.postimg.cc/vZzS96kD/img-producto.jpg',
        type: 'Servicio Puntual',
        nameService: 'Certificación de Ventas MiPyME',
        description: 'Certificación para la categorización o renovación del Certificado MiPyME ante la Secretaría de la Pequeña y Mediana Empresa.',
        detail: 'El Certificado MiPyME te da acceso a beneficios impositivos, financieros y comerciales reservados para pequeñas y medianas empresas. Gestionamos la certificación de ventas necesaria para obtener o renovar tu categorización ante la Secretaría PyME, asegurándonos de que no pierdas ninguno de esos beneficios.',
        price: 40000,
        categoria: 'certificaciones'
    },
    {
        //id: "13",
        iconName: 'TbReceiptTax',
        icon: <TbReceiptTax />,
        img: 'https://i.postimg.cc/vZzS96kD/img-producto.jpg',
        type: 'Servicio Puntual',
        nameService: 'Recategorización de Monotributo',
        description: 'Evaluación semestral de parámetros de los últimos 12 meses y ejecución del trámite de recategorización en enero y julio.',
        detail: 'Cada enero y julio el Monotributo exige revisar si tu categoría sigue siendo la correcta según tus ingresos, superficie y energía de los últimos 12 meses. Nos encargamos de analizar tus parámetros, determinar si debés recategorizarte y ejecutar el trámite en tiempo y forma para evitar multas o exclusiones.',
        price: 35000,
        categoria: 'inscripciones'
    },
    {
        //id: "14",
        iconName: 'FaFileInvoiceDollar',
        icon: <FaFileInvoiceDollar />,
        img: 'https://i.postimg.cc/vZzS96kD/img-producto.jpg',
        type: 'Servicio Puntual',
        nameService: 'Ganancias y Bienes Personales',
        description: 'Declaraciones juradas anuales para personas humanas que superan los mínimos no imponibles o empleados en relación de dependencia.',
        detail: 'El Impuesto a las Ganancias y Bienes Personales requieren una presentación anual precisa para evitar diferencias, multas o fiscalizaciones. Preparamos y presentamos tus declaraciones juradas con el análisis completo de tus ingresos, deducciones y bienes, optimizando tu carga tributaria dentro del marco legal vigente.',
        price: 30000
    },
    {
        //id: "15",
        iconName: 'TbFileDescription',
        icon: <TbFileDescription />,
        img: 'https://i.postimg.cc/vZzS96kD/img-producto.jpg',
        type: 'Servicio Puntual',
        nameService: 'Convenio Multilateral CM05',
        description: 'Determinación de coeficientes unificados para Jujuy, Salta y demás jurisdicciones involucradas en el período fiscal anual.',
        detail: 'Si desarrollás actividad económica en más de una provincia, el Convenio Multilateral distribuye tu base imponible de Ingresos Brutos entre todas las jurisdicciones donde operás. Determinamos los coeficientes unificados aplicables analizando tus ingresos y gastos asignables a cada provincia, garantizando una distribución correcta y justa.',
        price: 40000
    },
    {
        //id: "16",
        iconName: 'RiGovernmentLine',
        icon: <RiGovernmentLine />,
        img: 'https://i.postimg.cc/vZzS96kD/img-producto.jpg',
        type: 'Servicio Puntual',
        nameService: 'Planificación Fiscal para PyMEs',
        description: 'Diagnóstico sobre la estructura societaria más eficiente (SAS, SRL) para mitigar el impacto impositivo y previsional.',
        detail: 'Elegir la estructura societaria correcta puede hacer una diferencia significativa en tu carga impositiva y previsional. Analizamos tu actividad, volumen de operaciones y objetivos de crecimiento para recomendarte la forma jurídica más eficiente, ya sea una SAS, SRL u otras alternativas, con foco en la sustentabilidad fiscal de tu empresa familiar.',
        price: 50000
    },
    {
        //id: "17",
        iconName: 'HiOutlineDocumentSearch',
        icon: <HiOutlineDocumentSearch />,
        img: 'https://i.postimg.cc/vZzS96kD/img-producto.jpg',
        type: 'Servicio Puntual',
        nameService: 'Auditoría de Circuitos Administrativos',
        description: 'Revisión de facturación y retenciones sufridas (SIRCREB, retenciones locales) para optimizar saldos a favor inmovilizados.',
        detail: 'Muchas empresas acumulan saldos a favor en impuestos sin saberlo, producto de retenciones bancarias como SIRCREB o retenciones locales de Rentas que nunca fueron compensadas. Auditamos tus circuitos de facturación y retenciones para identificar esos saldos, recuperarlos y mejorar tu flujo de caja.',
        price: 40000
    },
]

export default ServicesList;
