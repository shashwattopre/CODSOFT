document.addEventListener('DOMContentLoaded', function () {
    const output = document.querySelector('.output');
    const keys = document.querySelector('.keys');

    keys.addEventListener('click', event => {
        const { target } = event;
        const { value } = target;

        if (!target.matches('button')) {
            return;
        } else {
            switch (value) {
                case 'AC':
                    output.value = '';
                    break;
                case 'back':
                    output.value = output.value.slice(0, -1);
                    break;
                case '=':
                    try {
                        output.value = eval(output.value);
                    } catch (e) {
                        output.value = 'Error';
                    }
                    break;
                default:
                    output.value += value;
            }
        }
    });
});
