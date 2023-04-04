const cores = (cor) => {
    switch (cor) {
        case 'cinzaEscuro':
            return '#9e9e9e';
        case 'azulEscuro':
            return '#5ecde0';
        case 'azulClaro':
            return '#00fff2';
        case 'verde':
            return '#c4ffc9';
        case 'cinzaClaro':
            return '#e0e0e0';
        default:
            return cor;
    }
};

export default cores;