// Função para preencher a tabela com 10 registros padrão
document.addEventListener('DOMContentLoaded', function () {
    let tabelaCadastro = document.getElementById('tabelaCadastro');
    
    for (let i = 0; i < 10; i++) {
        let linha = document.createElement('tr');
        let nomeCell = document.createElement('td');
        let emailCell = document.createElement('td');

        nomeCell.textContent = `Nome ${i + 1}`;
        emailCell.textContent = `email${i + 1}@exemplo.com`;

        linha.appendChild(nomeCell);
        linha.appendChild(emailCell);
        tabelaCadastro.appendChild(linha);
    }
});

// Função para gravar os dados do formulário na tabela
function gravarCadastro() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;

    if (nome && email) {
        let tabelaCadastro = document.getElementById('tabelaCadastro');
        let linha = document.createElement('tr');
        let nomeCell = document.createElement('td');
        let emailCell = document.createElement('td');

        nomeCell.textContent = nome;
        emailCell.textContent = email;

        linha.appendChild(nomeCell);
        linha.appendChild(emailCell);
        tabelaCadastro.appendChild(linha);

        // Limpa os campos após o envio
        document.getElementById('nome').value = '';
        document.getElementById('email').value = '';
    } else {
        alert("Por favor, preencha todos os campos!");
    }
}
