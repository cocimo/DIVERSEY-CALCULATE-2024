function formatNumber(num) {
    return num.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function calcularLubricante() {
    const picos = parseFloat(document.getElementById('picos1').value);
    const concentracion = parseFloat(document.getElementById('concentracion').value);

    if (isNaN(picos) || isNaN(concentracion)) {
        alert('Por favor, ingrese valores numéricos válidos.');
        return;
    }

    const lubricanteKgH = (picos * 4 * concentracion) / 100;
    const consumoAguaNominalM3H = (picos * 4) / 1000;
    const consumoAguaNominalLH = picos * 4;

    document.getElementById('resultadoLubricante').innerHTML = `
        <p>Lubricante calculado: ${formatNumber(lubricanteKgH)} Kg/h</p>
        <p>Consumo de agua nominal: ${formatNumber(consumoAguaNominalM3H)} m3/h</p>
        <p>Consumo agua nominal: ${formatNumber(consumoAguaNominalLH)} Lts/h</p>
    `;
}

function calcularConcentracion() {
    const picos = parseFloat(document.getElementById('picos2').value);
    const aguaNominal = parseFloat(document.getElementById('aguaNominal').value);
    const lubricanteKg = parseFloat(document.getElementById('lubricanteKg').value);

    if (isNaN(picos) || isNaN(aguaNominal) || isNaN(lubricanteKg)) {
        alert('Por favor, ingrese valores numéricos válidos.');
        return;
    }

    const concentracion = (aguaNominal / lubricanteKg) / 2;

    document.getElementById('resultadoConcentracion').innerHTML = `
        <p>Concentración calculada: ${formatNumber(concentracion)}%</p>
    `;
}

function limpiarDatos(columna) {
    if (columna === 1) {
        document.getElementById('picos1').value = '';
        document.getElementById('concentracion').value = '';
        document.getElementById('resultadoLubricante').innerHTML = '';
    } else {
        document.getElementById('picos2').value = '';
        document.getElementById('aguaNominal').value = '';
        document.getElementById('lubricanteKg').value = '';
        document.getElementById('resultadoConcentracion').innerHTML = '';
    }
}

// Prevenir zoom en dispositivos móviles
document.addEventListener('touchmove', function (event) {
    if (event.scale !== 1) {
        event.preventDefault();
    }
}, { passive: false });
