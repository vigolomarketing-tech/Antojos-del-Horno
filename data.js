// CONFIG — Antojos Del Horno (demo Vigolo Web Studio)
// Datos tomados del Instagram y del catálogo de WhatsApp Business. Lo marcado PENDIENTE CLIENTE hay que confirmarlo.

const CONFIG = {
  negocio: {
    nombre: "Antojos Del Horno",
    rubro: "Cafetería y pastelería",
    localidad: "Longchamps",
    eslogan: "Tortas, tartas y mousses hechas con amor en Longchamps y San Vicente",
    logo: "img/logo.webp",
    seguidoresIG: "37,6 mil",
  },

  colores: {
    primario: "#E0698F",
    secundario: "#4A2C2A",
    fondo: "#FFF8F6",
    texto: "#3A2A2E",
  },

  contacto: {
    whatsapp: "5491155067721", // PENDIENTE CLIENTE: confirmar (en Instagram figura wa.me/541155067721)
    mensajeWhatsapp: "¡Hola! Vi su web y quería consultar...",
    telefono: "",
    instagram: "https://instagram.com/antojosdelhorno",
    instagramUsuario: "@antojosdelhorno",
  },

  // Sucursales: horarios 0 = domingo ... 6 = sábado
  sucursales: [
    {
      id: "longchamps",
      nombre: "Longchamps",
      direccion: "Presidente Rivadavia 1856, Longchamps",
      mapsQuery: "Presidente Rivadavia 1856, Longchamps, Buenos Aires",
      horarios: {
        0: [["16:00", "20:30"]],
        1: [],
        2: [],
        3: [],
        4: [["16:00", "20:30"]],
        5: [["16:00", "20:30"]],
        6: [["09:00", "12:00"], ["16:00", "20:30"]],
      },
      textoHorarios: "Jueves a domingos de 16:00 a 20:30. Sábados también de 09:00 a 12:00.",
    },
    {
      id: "san-vicente",
      nombre: "San Vicente",
      direccion: "Pezoa 99, San Vicente",
      mapsQuery: "Pezoa 99, San Vicente, Buenos Aires",
      horarios: {
        0: [["09:00", "20:30"]],
        1: [],
        2: [],
        3: [],
        4: [["09:00", "20:30"]],
        5: [["09:00", "20:30"]],
        6: [["09:00", "20:30"]],
      },
      textoHorarios: "Jueves a domingos de 09:00 a 20:30.",
    },
  ],

  pedidos: {
    habilitado: true,
    anticipacion: "48 hs", // PENDIENTE CLIENTE: anticipación mínima real para encargos
    entrega: "Retiro en el local", // PENDIENTE CLIENTE: si hacen envíos, agregar zona y costo
    formasDePago: ["Efectivo", "Transferencia", "Mercado Pago"], // PENDIENTE CLIENTE
  },

  categorias: ["Chocotortas", "Brownies", "Tartas", "Mousses", "Cheesecakes", "Clásicas", "Minis y porciones"],

  // precio en pesos. destacado: true = aparece en "Los más pedidos" // PENDIENTE CLIENTE: confirmar cuáles son los más pedidos
  productos: [
    // Chocotortas
    { id: "chocotorta-clasica", categoria: "Chocotortas", nombre: "Chocotorta clásica", descripcion: "Chocotorta clásica de 22 cm.", porciones: "16 a 20 porciones", precio: 72000, foto: "img/chocotorta-clasica.webp", destacado: true },
    { id: "chocooreo-clasica", categoria: "Chocotortas", nombre: "Chocooreo clásica", descripcion: "22 cm, decorada con Oreo.", porciones: "16 a 20 porciones", precio: 72000, foto: "img/chocooreo-clasica.webp" },
    { id: "chocooreo-golosinas", categoria: "Chocotortas", nombre: "Chocooreo con golosinas", descripcion: "22 cm, decorada con golosinas y Oreo.", porciones: "16 a 20 porciones", precio: 90000, foto: "img/chocooreo-golosinas.webp", destacado: true },
    { id: "chocooreo-coronitas", categoria: "Chocotortas", nombre: "Chocooreo con coronitas", descripcion: "Chocooreo decorada con coronitas.", porciones: "16 a 20 porciones", precio: 80000, foto: "img/chocooreo-coronitas.webp" },
    { id: "chocooreo-macarons", categoria: "Chocotortas", nombre: "Chocooreo con macarons", descripcion: "22 cm, decorada con macarons.", porciones: "16 a 20 porciones", precio: 90000, foto: "img/chocooreo-macarons.webp" },
    { id: "chocooreo-macarons-sirenas", categoria: "Chocotortas", nombre: "Chocooreo con macarons y sirenas", descripcion: "22 cm, decorada con macarons y colitas de sirena.", porciones: "16 a 20 porciones", precio: 90000, foto: "img/chocooreo-macarons-sirenas.webp" },
    { id: "chocotorta-macarons-coronas", categoria: "Chocotortas", nombre: "Chocotorta con macarons y coronas", descripcion: "Chocotorta de 22 cm decorada con macarons y coronas.", porciones: "16 a 20 porciones", precio: 90000, foto: "img/chocotorta-macarons-coronas.webp" },
    { id: "chocobrownie-golosinas", categoria: "Chocotortas", nombre: "Chocobrownie con golosinas", descripcion: "Base de brownie con chocotorta y golosinas.", porciones: "", precio: 90000, foto: "img/chocobrownie-golosinas.webp" },

    // Brownies
    { id: "brownie-kitkat-oreo", categoria: "Brownies", nombre: "Brownie con Kit Kat y Oreo", descripcion: "24 cm.", porciones: "16 a 20 porciones", precio: 55000, foto: "img/brownie-kitkat-oreo.webp" },
    { id: "brownie-frutos-rojos", categoria: "Brownies", nombre: "Brownie con frutos rojos", descripcion: "24 cm.", porciones: "16 a 20 porciones", precio: 70000, foto: "img/brownie-frutos-rojos.webp" },
    { id: "brownie-extra-golosinas", categoria: "Brownies", nombre: "Brownie con extra golosinas", descripcion: "24 cm, cargado de golosinas.", porciones: "16 a 20 porciones", precio: 70000, foto: "img/brownie-extra-golosinas.webp", destacado: true },
    { id: "brownie-oreo-kinder-kitkat", categoria: "Brownies", nombre: "Brownie con Oreo, Kinder y Kit Kat", descripcion: "Brownie con Oreo, Kinder y Kit Kat.", porciones: "16 a 20 porciones", precio: 70000, foto: "img/brownie-oreo-kinder-kitkat.webp" },
    { id: "brownie-frutillas-oreo-kitkat", categoria: "Brownies", nombre: "Brownie con frutillas o frutos + Oreo y Kit Kat", descripcion: "Elegí frutillas o frutos rojos, con Oreo y Kit Kat.", porciones: "16 a 20 porciones", precio: 80000, foto: "img/brownie-frutillas-oreo-kitkat.webp" },
    { id: "brownie-con-frutillas", categoria: "Brownies", nombre: "Brownie con frutillas", descripcion: "24 cm con dulce de leche y frutillas.", porciones: "16 a 20 porciones", precio: 85000, foto: "img/brownie-con-frutillas.webp", destacado: true },
    { id: "brownie-frutillas-frutos", categoria: "Brownies", nombre: "Brownie con frutillas o frutos", descripcion: "24 cm. Elegí frutillas o frutos rojos.", porciones: "16 a 20 porciones", precio: 85000, foto: "img/brownie-frutillas-frutos.webp" },
    { id: "brownie-frutos-frutillas-kinder", categoria: "Brownies", nombre: "Brownie con frutos o frutillas + Kinder y Kit Kat", descripcion: "Elegí frutos o frutillas, con Kinder y Kit Kat.", porciones: "16 a 20 porciones", precio: 85000, foto: "img/brownie-frutos-frutillas-kinder.webp" },

    // Tartas
    { id: "tarta-ganache", categoria: "Tartas", nombre: "Tarta ganache", descripcion: "Tarta de chocolate con ganache.", porciones: "10 a 12 porciones", precio: 40000, foto: "img/tarta-ganache.webp" },
    { id: "lemon-pie", categoria: "Tartas", nombre: "Lemon pie", descripcion: "24 cm.", porciones: "10 a 12 porciones", precio: 44000, foto: "img/lemon-pie.webp", destacado: true },
    { id: "crumble-manzana", categoria: "Tartas", nombre: "Crumble de manzana", descripcion: "24 cm.", porciones: "", precio: 44000, foto: "img/crumble-manzana.webp" },
    { id: "tarta-frutal", categoria: "Tartas", nombre: "Tarta frutal", descripcion: "Rellena de crema diplomata y frutas.", porciones: "", precio: 58000, foto: "img/tarta-frutal.webp" },
    { id: "key-lime-pie", categoria: "Tartas", nombre: "Key lime pie", descripcion: "Tarta de lima.", porciones: "12 porciones aprox.", precio: 62000, foto: "img/key-lime-pie.webp" },
    { id: "tarta-frutillas", categoria: "Tartas", nombre: "Tarta de frutillas", descripcion: "24 cm, con crema y dulce de leche.", porciones: "", precio: 65000, foto: "img/tarta-frutillas.webp", destacado: true },
    { id: "tarta-duo", categoria: "Tartas", nombre: "Tarta dúo (frutos rojos y golosinas)", descripcion: "24 cm, rellena de dulce de leche. Frutos rojos y golosinas.", porciones: "", precio: 70000, foto: "img/tarta-duo.webp" },

    // Mousses
    { id: "mousse-drip-chocolates", categoria: "Mousses", nombre: "Mousse con drip y chocolates", descripcion: "Base de brownie con mousse de chocolate, drip y chocolates.", porciones: "", precio: 65000, foto: "img/mousse-drip-chocolates.webp" },
    { id: "mousse-chocolates", categoria: "Mousses", nombre: "Mousse con chocolates", descripcion: "Base de brownie con mousse de chocolate y chocolates.", porciones: "", precio: 70000, foto: "img/mousse-chocolates.webp" },
    { id: "mousse-frutillas", categoria: "Mousses", nombre: "Mousse de chocolate con frutillas", descripcion: "Mousse de chocolate con crema y frutillas.", porciones: "16 a 20 porciones", precio: 85000, foto: "img/mousse-frutillas.webp" },
    { id: "mousse-choco-frutillas-golosinas", categoria: "Mousses", nombre: "Mousse de choco (frutillas o golosinas)", descripcion: "22 cm. Elegí frutillas o golosinas.", porciones: "16 a 20 porciones", precio: 85000, foto: "img/mousse-choco-frutillas-golosinas.webp" },

    // Cheesecakes
    { id: "cheesecake", categoria: "Cheesecakes", nombre: "Cheesecake", descripcion: "Elegí frutos rojos, maracuyá u otro sabor (consultá).", porciones: "", precio: 62000, foto: "img/cheesecake.webp", destacado: true },
    { id: "cheesecake-limon", categoria: "Cheesecakes", nombre: "Cheesecake de limón", descripcion: "24 cm.", porciones: "", precio: 62000, foto: "img/cheesecake-limon.webp" },

    // Clásicas
    { id: "tiramisu", categoria: "Clásicas", nombre: "Tiramisú", descripcion: "El clásico italiano.", porciones: "10 a 12 porciones", precio: 46000, foto: "img/tiramisu.webp" },
    { id: "red-velvet", categoria: "Clásicas", nombre: "Red velvet", descripcion: "Bizcochuelo sabor chocolate con relleno cremoso.", porciones: "", precio: 60000, foto: "img/red-velvet.webp" },
    { id: "rogel", categoria: "Clásicas", nombre: "Rogel", descripcion: "Capas crocantes con merengue.", porciones: "16 porciones aprox.", precio: 60000, foto: "img/rogel.webp" },
    { id: "matilda", categoria: "Clásicas", nombre: "Matilda", descripcion: "Torta de chocolate de 22 cm.", porciones: "16 a 20 porciones", precio: 70000, foto: "img/matilda.webp" },
    { id: "balcarce", categoria: "Clásicas", nombre: "Balcarce", descripcion: "22 cm de diámetro.", porciones: "", precio: 77000, foto: "img/balcarce.webp" },
    { id: "pistacho-frambuesa", categoria: "Clásicas", nombre: "Pistacho y frambuesa", descripcion: "22 cm.", porciones: "16 a 20 porciones", precio: 93000, foto: "img/pistacho-frambuesa.webp" },

    // Minis y porciones
    { id: "mini-tortas", categoria: "Minis y porciones", nombre: "Mini tortas", descripcion: "Individuales. Elegí el sabor y anotalo en tu pedido.", porciones: "", precio: 10000, foto: "img/mini-tortas.webp", // PENDIENTE CLIENTE: confirmar si el precio es por unidad
      sabores: ["Lemon pie", "Tarta de frutilla", "Brownie con Kit Kat y Oreo", "Brownie con frutillas", "Chocooreo", "Chocobrownie", "Cheesecake de frutos o maracuyá", "Cheesecake de Nutella", "Cheesecake de choco blanco", "Marquise", "Cheesecake de limón", "Red velvet"] },
    { id: "lingotes", categoria: "Minis y porciones", nombre: "Lingotes", descripcion: "Porciones individuales en forma de lingote. Elegí el sabor y anotalo en tu pedido.", porciones: "", precio: 12000, foto: "img/lingotes.webp", // PENDIENTE CLIENTE: confirmar si el precio es por unidad
      sabores: ["Frambuesa", "Chocotorta", "Tiramisú", "Cheesecake de frutos rojos", "Cheesecake de Nutella", "Cheesecake de choco blanco", "Mousse de chocolate con frutillas", "Avellanas y chocolate", "Balcarce", "Pistacho", "Selva negra", "Mousse de frutillas", "Maracuyá", "Dúo", "Matilda", "Key lime pie", "Mousse de limón y maracuyá"] },
    { id: "shots-x6", categoria: "Minis y porciones", nombre: "Shots x6", descripcion: "6 unidades de un mismo gusto.", porciones: "", precio: 24000, foto: "img/shots-x6.webp" },
    { id: "petit-fours", categoria: "Minis y porciones", nombre: "Petit fours (caja)", descripcion: "Caja de 9 cuadraditos de 5x5 cm, para unas 9 personas. Elegí hasta 3 sabores y anotalos en tu pedido.", porciones: "", precio: 33000, foto: "img/petit-fours.webp",
      sabores: ["Tiramisú de pistacho", "Cheese frutos", "Pistacho", "Cheese blanco", "Cheese Nutella", "Chocotorta", "Red velvet", "Mousse choco", "Mousse frutilla", "Maracuyá", "Lima", "Frambuesa", "Avellanas", "Balcarce", "Dúo", "Selva negra", "Mousse de limón"] },
  ],

  seo: {
    titulo: "Pastelería en Longchamps | Antojos Del Horno",
    descripcion: "Pastelería y cafetería en Longchamps y San Vicente. Tortas, brownies, tartas, mousses y petit fours. Armá tu pedido y mandalo por WhatsApp.",
    ogImage: "img/og.jpg",
    url: "https://vigolomarketing-tech.github.io/Antojos-del-Horno/", // PENDIENTE: dominio propio si lo compran
    tipoSchema: "Bakery",
  },
};
