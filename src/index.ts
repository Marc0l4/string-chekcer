// Função para contar a ocorrência da letra 'a' (maiúscula ou minúscula) em uma string
function countAInString(str: string): { exists: boolean, count: number } {
    const regex = /a/gi; // Expressão regular para encontrar 'a' ou 'A' (case insensitive)
    const matches = str.match(regex);
    return {
        exists: matches !== null,
        count: matches ? matches.length : 0
    };
}

// Função para lidar com o formulário e exibir o resultado
function processInput() {
    const inputElement = document.getElementById('textInput') as HTMLInputElement;
    const resultElement = document.getElementById('result');
    const inputText = inputElement.value;

    const result = countAInString(inputText);

    if (result.exists) {
        resultElement!.textContent = `A letra 'a' aparece ${result.count} vez(es).`;
    } else {
        resultElement!.textContent = "A letra 'a' não foi encontrada.";
    }
}

// Adiciona um ouvinte de evento ao botão
document.getElementById('checkButton')!.addEventListener('click', processInput);
