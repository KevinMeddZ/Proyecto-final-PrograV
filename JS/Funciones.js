
/*Función para calcular la reserva del vuelo*/

function Calcular() {
    /**Variable a utilizar en esta clase */
    var economica, empresarial, primeraClase, excedente, clase, destino, nClase;
    var temporadaBaja, temporadaEspecial, temporadaAlta, temporada, nTarifa;
    var cantAdultos, cantNinos;

    /**Se obtiene algunos datos */
    cantAdultos = document.getElementById("txtTiquetes").value;
    cantNinos = document.getElementById("txtNinos").value;
    clase = document.querySelector('input[name="op"]:checked').value;
    fecha = document.getElementById("fechaReservacion");
    lista = document.getElementById("destinos");

    destino = lista.options[lista.selectedIndex].value;

    /**Se establece el excedente */
    economica = 0;
    empresarial = 0.2;
    primeraClase = 0.45;

    economica = parseFloat(economica);
    empresarial = parseFloat(empresarial);
    primeraClase = parseFloat(primeraClase);
    excedente = parseFloat(excedente);

    cantAdultos = parseInt(cantAdultos);
    cantNinos = parseInt(cantNinos);

    /**Se establece el % de las temporada */
    temporadaBaja = 0;
    temporadaEspecial = 0.2;
    temporadaAlta = 0.35;

    temporadaBaja = 0;
    temporadaEspecial = parseFloat(temporadaEspecial);
    temporadaAlta = parseFloat(temporadaAlta);
    temporada = parseFloat(temporada);


    /**Se pasa la fecha a formato date */
    var fechaSeleccionada = new Date(fecha.value);
    /**Se obtiene el mes en numero */
    var mes = fechaSeleccionada.getMonth() + 1;
    mes = parseInt(mes);


    /**Se obtiene la temporada */
    if (mes === 4 || mes === 5 || mes === 6 || mes === 8 || mes === 9 || mes === 10 || mes === 11) {
        temporada = temporadaBaja;
        nTarifa = "Baja";
    } else if (mes === 1 || mes === 2 || mes === 3) {
        temporada = temporadaAlta;
        nTarifa = "Alta";

    } else if (mes === 7 || mes === 12) {
        temporada = temporadaEspecial;
        nTarifa = "Especial";

    }


    /**SE OBTIENE LA CLASE */
    /**Se verifica la clase en que viajan */
    if (clase == 1) {
        excedente = economica;
        nClase = "Clase economica";
    } else if (clase == 2) {
        excedente = empresarial;
        nClase = "Clase empresarial";
    } else if (clase == 3) {
        excedente = primeraClase;
        nClase = "Primera clase";
    }


    /**No funciona, javascript hp */
    if (cantAdultos === null || cantAdultos === '') {
        alert("Debes ingresar una cantidad de personas correcta")
    } else if (cantNinos === null || cantNinos === '') {
        cantNinos = 0;
    }


    /**Funcion que calcula todo */
    if ((cantAdultos + cantNinos) <= 6) {
        CalcularTotal(destino, temporada, excedente, nClase, nTarifa);
    } else {
        alert("Cantidad de personas máximas: 6")
    }






}


function CalcularTotal(destino, temporada, excedente, nClase, nTarifa) {
    var nombre, cedula, email, telefono, destino, lista, cantTickets, cantNinos, fecha, totalAdulto, totalNinos;
    var tarifaUsa, tarifaPeru, tarifaEspana, tarifaPanama, tarifaGuatemala;
    var totalPagar;


    /**Se obtiene los datos del formulario */
    nombre = document.getElementById("txtNombre").value;
    cedula = document.getElementById("txtCedula").value;
    email = document.getElementById("txtEmail").value;
    telefono = document.getElementById("txtNumero").value;
    lista = document.getElementById("destinos");
    destino = lista.options[lista.selectedIndex].value;
    cantTickets = document.getElementById("txtTiquetes").value;
    cantNinos = document.getElementById("txtNinos").value;
    fecha = document.getElementById("fechaReservacion").value;

    /**Formato a los enteros */
    cedula = parseInt(cedula);
    telefono = parseInt(telefono);
    cantTickets = parseInt(cantTickets);
    cantNinos = parseInt(cantNinos);
    totalAdulto = parseInt(totalAdulto);
    totalNinos = parseInt(totalNinos);
    totalPagar = parseInt(totalPagar);


    /**Se establece las tarifas de los países */
    tarifaUsa = 250;
    tarifaPeru = 500;
    tarifaEspana = 1000;
    tarifaPanama = 300;
    tarifaGuatemala = 4000;

    tarifaUsa = parseInt(tarifaUsa);
    tarifaPeru = parseInt(tarifaPeru);
    tarifaEspana = parseInt(tarifaEspana);
    tarifaPanama = parseInt(tarifaPanama);
    tarifaGuatemala = parseInt(tarifaGuatemala);


    /**Se realiza los cálculos */
    /**Se verifica el destino */
    switch (destino) {
        case "Peru":
            /**ADULTOS */
            totalAdulto = (cantTickets * tarifaPeru);
            /**Se le agrega el % por la temporada */
            totalAdulto = totalAdulto + (totalAdulto * temporada);
            /**Se le agrega % del excedente */
            totalAdulto = totalAdulto + (totalAdulto * excedente);


            /**NIÑOS(A) */
            totalNinos = (cantNinos * tarifaPeru) * 0.4;
            /**Se le agrega el % por la temporada */
            totalNinos = totalNinos + (totalNinos * temporada);
            totalNinos = totalNinos + (totalNinos * excedente);
        case "USA":
            /**ADULTOS */
            totalAdulto = cantTickets * tarifaUsa;
            /**Se le agrega el % por la temporada */
            totalAdulto = totalAdulto + (totalAdulto * temporada);
            /**Se le agrega % del excedente */
            totalAdulto = totalAdulto + (totalAdulto * excedente);


            /**NIÑOS(A) */
            totalNinos = (cantNinos * tarifaUsa) * 0.4;
            /**Se le agrega el % por la temporada */
            totalNinos = totalNinos + (totalNinos * temporada);
            totalNinos = totalNinos + (totalNinos * excedente);
        case "España":
            /**ADULTOS */
            totalAdulto = cantTickets * tarifaEspana;
            /**Se le agrega el % por la temporada */
            totalAdulto = totalAdulto + (totalAdulto * temporada);
            /**Se le agrega % del excedente */
            totalAdulto = totalAdulto + (totalAdulto * excedente);

            /**NIÑOS(A) */
            totalNinos = (cantNinos * tarifaEspana) * 0.4;
            /**Se le agrega el % por la temporada */
            totalNinos = totalNinos + (totalNinos * temporada);
            totalNinos = totalNinos + (totalNinos * excedente);
        case "Panama":
            /**ADULTOS */
            totalAdulto = cantTickets * tarifaPanama;
            /**Se le agrega el % por la temporada */
            totalAdulto = totalAdulto + (totalAdulto * temporada);
            /**Se le agrega % del excedente */
            totalAdulto = totalAdulto + (totalAdulto * excedente);

            /**NIÑOS(A) */
            totalNinos = (cantNinos * tarifaPanama) * 0.4;
            /**Se le agrega el % por la temporada */
            totalNinos = totalNinos + (totalNinos * temporada);
            totalNinos = totalNinos + (totalNinos * excedente);
        case "Guatemala":
            /**ADULTOS */
            totalAdulto = cantTickets * tarifaGuatemala;
            /**Se le agrega el % por la temporada */
            totalAdulto = totalAdulto + (totalAdulto * temporada);
            /**Se le agrega % del excedente */
            totalAdulto = totalAdulto + (totalAdulto * excedente);

            /**NIÑOS(A) */
            totalNinos = (cantNinos * tarifaGuatemala) * 0.4;
            /**Se le agrega el % por la temporada */
            totalNinos = totalNinos + (totalNinos * temporada);
            totalNinos = totalNinos + (totalNinos * excedente);
    }

    /**Total a pagar */
    totalPagar = totalAdulto + totalNinos;

    /*Variables de sesión*/
    sessionStorage.setItem("s_nombre", nombre);
    sessionStorage.setItem("s_cedula", cedula);
    sessionStorage.setItem("s_telefono", telefono);
    sessionStorage.setItem("s_email", email);
    sessionStorage.setItem("s_fecha", fecha);
    sessionStorage.setItem("s_tarifa", nTarifa);
    sessionStorage.setItem("s_clase", nClase);
    sessionStorage.setItem("s_ninos", cantNinos);
    sessionStorage.setItem("s_adultos", cantTickets);
    sessionStorage.setItem("s_totalAdulto", totalAdulto);
    sessionStorage.setItem("s_totalNinos", totalNinos);
    sessionStorage.setItem("s_totalPagar", totalPagar);

    document.location.href = "pago.html";
}


/**Obtiene los datos en la otra página */

function ObtenerDatos() {
    var fechaHoy = new Date();
    var dia = fechaHoy.getDate();
    var mes = fechaHoy.getMonth() + 1; // Los meses se indexan desde 0, por lo que se suma 1
    var anio = fechaHoy.getFullYear();

    // Formatear la fecha como "YYYY-MM-DD" para que sea compatible con el input de tipo date
    var fechaFormateada = anio + '-' + (mes < 10 ? '0' : '') + mes + '-' + (dia < 10 ? '0' : '') + dia;

    // Establecer el valor del input de tipo date
    document.getElementById('fechaPago').value = fechaFormateada;
    document.getElementById("txtNombre").value = sessionStorage.getItem("s_nombre");
    document.getElementById("txtCedula").value = sessionStorage.getItem("s_cedula");
    document.getElementById("txtEmail").value = sessionStorage.getItem("s_email");
    document.getElementById("fechaReservacion").value = sessionStorage.getItem("s_fecha");
    document.getElementById("txtTiquetes").value = sessionStorage.getItem("s_adultos");
    document.getElementById("txtNinos").value = sessionStorage.getItem("s_ninos");
    document.getElementById("txtTelefono").value = sessionStorage.getItem("s_telefono");
    document.getElementById("txtTarifa").value = sessionStorage.getItem("s_tarifa");
    document.getElementById("txtClase").value = sessionStorage.getItem("s_clase");
    document.getElementById("txtMontoAdulto").value = sessionStorage.getItem("s_totalAdulto");
    document.getElementById("txtMontoNinos").value = sessionStorage.getItem("s_totalNinos");
    document.getElementById("txtTotal").value = sessionStorage.getItem("s_totalPagar");
}