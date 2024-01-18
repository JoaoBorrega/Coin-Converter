const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit)

const inputValue = document.getElementById('value-euro');
const selectedCurrency = document.getElementById('currency');

const result = document.getElementById('result');
let valueConverted = 0;

function handleSubmit(e) {
    e.preventDefault();

    if (!inputValue.value || inputValue.value < 0) {
        alert('Indique um valor correto!');
        return;
    }
    else if (!selectedCurrency.value) {
        alert('Escolha uma moeda!');
        return;
    }
    converter()
}

function converter() {
    if (selectedCurrency.value === 'real') {
        valueConverted = inputValue.value * 5.37;
        result.innerHTML = valueFormatter('pt-BR', 'BRL');
        animateResult();
    }
    else if (selectedCurrency.value === 'dol') {
        valueConverted = inputValue.value * 1.09;
        result.innerHTML = valueFormatter('en-US', 'USD');
        animateResult();
    }
    /* clicking the button convert, it gives the value converted, and my value to convert disappears
    inputValue.value = '';
    selectedCurrency.value = ''; */
}

function valueFormatter(Locale, currency) {
    const value = valueConverted.toLocaleString(`${Locale}`, {style: 'currency', currency: `${currency}`});
    return `<span>🤑</span> ${value} <span>🤑</span>`;
}

function animateResult() {
    return result.animate([
        {transform: 'translateY(-150px)'},
        {transform: 'translateY(0px'}
    ], {duration: 500})
}