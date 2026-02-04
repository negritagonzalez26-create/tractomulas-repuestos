let carrito = [];
let total = 0;

function agregar(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;
    actualizarCarrito();
}

function actualizarCarrito() {
    const lista = document.getElementById("lista");
    const totalTexto = document.getElementById("total");

    lista.innerHTML = "";

    carrito.forEach((producto, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${producto.nombre} - ${formatoPeso(producto.precio)}`;
        lista.appendChild(li);
    });

    totalTexto.textContent = formatoPeso(total);
}

function finalizar() {
    if (carrito.length === 0) {
        alert("🛒 El carrito está vacío");
    } else {
        alert(
            "✅ Compra realizada con éxito\n" +
            "Total: " + formatoPeso(total) +
            "\nUn asesor de Inversiones JSHA te contactará."
        );
        carrito = [];
        total = 0;
        actualizarCarrito();
    }
}

function formatoPeso(valor) {
    return valor.toLocaleString("es-CO", {
        style: "currency",
        currency: "COP"
    });
}

