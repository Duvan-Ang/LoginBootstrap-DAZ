function calcularEdad() {
    const input = document.getElementById("birthdate").value;
    const resultado = document.getElementById("resultado");

    if (!input) {
        resultado.textContent = "Por favor ingresa tu fecha de nacimiento.";
        return;
    }

    const birthDate = new Date(input);
    const today = new Date();
    let edad = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        edad--;
    }

    resultado.textContent = `Tienes ${edad} años.`;
}