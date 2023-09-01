document.addEventListener('DOMContentLoaded', () => {
    const convertButton = document.getElementById('convert');
    const resultElement = document.getElementById('result');

    convertButton.addEventListener('click', async () => {
        const amount = parseFloat(document.getElementById('amount').value);
        const currency = document.getElementById('currency').value;

        try {
            const response = await fetch(`https://mindicador.cl/api/${currency}`);
            const data = await response.json();

            if (data.serie) {
                const value = data.serie[0].valor;
                const convertedAmount = (amount / value).toFixed(2);
                resultElement.textContent = `${amount} Pesos Chilenos son aproximadamente ${convertedAmount} ${data.nombre}`;
            } else {
                resultElement.textContent = 'No se pudo obtener el valor de conversión.';
            }
        } catch (error) {
            resultElement.textContent = 'Error al realizar la conversión. Detalles: ' + error.message;
        }
    });
});

