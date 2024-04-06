function Calcular() {
    var economica = 0, empresarial = 0.2, primeraClase = 0.45, excedente = 0;
    var temporadaBaja = 0, temporadaEspecial = 0.2, temporadaAlta = 0.35, temporada = 0;
    var nTarifa, nClase;

    var cantAdultos = parseInt(document.getElementById("txtTiquetes").value);
    var cantNinos = parseInt(document.getElementById("txtNinos").value);
    var clase = parseInt(document.querySelector('input[name="op"]:checked').value);
    var fecha = document.getElementById("fechaReservacion").value;
    var lista = document.getElementById("destinos");
    var destino = lista.options[lista.selectedIndex].value;

    var fechaSeleccionada = new Date(fecha);
    var mes = fechaSeleccionada.getMonth() + 1;

    if (clase === 1) {
        clase = economica;
        nClase = "Economica";
    } else if (clase === 2) {
        clase = empresarial;
        nClase = "Empresarial";
    } else if (clase === 3) {
        clase = primeraClase;
        nClase = "Primera Clase";
    }

    if (mes >= 4 && mes <= 11) {
        temporada = temporadaBaja;
        nTarifa = "Baja";
    } else if (mes >= 1 && mes <= 3) {
        temporada = temporadaAlta;
        nTarifa = "Alta";
    } else if (mes === 7 || mes === 12) {
        temporada = temporadaEspecial;
        nTarifa = "Especial";
    }

    if (isNaN(cantAdultos) || cantAdultos === '') {
        alert("Debes ingresar una cantidad de personas correcta");
    } else if (isNaN(cantNinos)) {
        cantNinos = 0;
    }

    if ((cantAdultos + cantNinos) <= 6) {
        CalcularTotal(destino, temporada, clase, excedente, nClase, nTarifa);
    } else {
        alert("Cantidad de personas máximas: 6");
    }
}

function CalcularTotal(destino, temporada, clase, excedente, nClase, nTarifa) {
    var nombre, cedula, email, telefono, lista, cantTickets, cantNinos, fecha, totalAdulto, totalNinos;
    var tarifaUsa, tarifaPeru, tarifaEspana, tarifaPanama, tarifaGuatemala;
    var subtotal =0;
    var excedente =0;
    var totalPagar = 0;
    var iv = 0;

    nombre = document.getElementById("txtNombre").value;
    cedula = document.getElementById("txtCedula").value;
    email = document.getElementById("txtEmail").value;
    telefono = document.getElementById("txtNumero").value;
    lista = document.getElementById("destinos");
    destino = lista.options[lista.selectedIndex].value;
    cantTickets = parseInt(document.getElementById("txtTiquetes").value);
    cantNinos = parseInt(document.getElementById("txtNinos").value);
    fecha = document.getElementById("fechaReservacion").value;

    tarifaUsa = 250;
    tarifaPeru = 500;
    tarifaEspana = 1000;
    tarifaPanama = 300;
    tarifaGuatemala = 4000;

    switch (destino) {
        case "Peru":
            totalAdulto = cantTickets * tarifaPeru * (1 + temporada + excedente);
            totalNinos = cantNinos * (tarifaPeru * 0.4) * (1 + temporada + excedente);
            break;
        case "USA":
            totalAdulto = cantTickets * tarifaUsa * (1 + temporada + excedente);
            totalNinos = cantNinos * (tarifaUsa * 0.4) * (1 + temporada + excedente);
            break;
        case "España":
            totalAdulto = cantTickets * tarifaEspana * (1 + temporada + excedente);
            totalNinos = cantNinos * (tarifaEspana * 0.4) * (1 + temporada + excedente);
            break;
        case "Panama":
            totalAdulto = cantTickets * tarifaPanama * (1 + temporada + excedente);
            totalNinos = cantNinos * (tarifaPanama * 0.4) * (1 + temporada + excedente);
            break;
        case "Guatemala":
            totalAdulto = cantTickets * tarifaGuatemala * (1 + temporada + excedente);
            totalNinos = cantNinos * (tarifaGuatemala * 0.4) * (1 + temporada + excedente);
            break;
    }

    console.log(clase.toString());


    subtotal = totalAdulto + totalNinos;
    excedente = subtotal * clase;
    iv = subtotal * 0.13;
    totalPagar =  subtotal + excedente + iv;


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
    sessionStorage.setItem("s_subtotal", subtotal);
    sessionStorage.setItem("s_iv", iv.toFixed(2));
    sessionStorage.setItem("s_excedente", excedente.toFixed(2));
    sessionStorage.setItem("s_totalPagar", totalPagar.toFixed(2));

    document.location.href = "pago.html";
}

function ObtenerDatos() {
    var fechaHoy = new Date();
    var dia = fechaHoy.getDate();
    var mes = fechaHoy.getMonth() + 1;
    var anio = fechaHoy.getFullYear();

    var fechaFormateada = anio + '-' + (mes < 10 ? '0' : '') + mes + '-' + (dia < 10 ? '0' : '') + dia;

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
    document.getElementById("txtSubTotal").value = sessionStorage.getItem("s_subtotal");
    document.getElementById("txtIV").value = sessionStorage.getItem("s_iv");
    document.getElementById("txtExcedente").value = sessionStorage.getItem("s_excedente");
    document.getElementById("txtTotal").value = sessionStorage.getItem("s_totalPagar");
}

function validarFormulario() {
    var form = document.getElementById('formulario');
    if (form.checkValidity()) {
        // Si el formulario es válido, realiza la acción deseada, por ejemplo, enviar los datos.
        Calcular();
    } else {
        // Si el formulario no es válido, muestra un mensaje de error o realiza alguna otra acción.
        alert('Por favor, completa todos los campos correctamente.');
    }
}