document.getElementById('denuncia').addEventListener('submit', async(e) => {
    e.preventDefault();

    const dados = {
        nome: document.getElementById('nome').value,
        telefone: document.getElementById('telefone').value,
        endereco: document.getElementById('endereco').value,
        municipio: document.getElementById('municipio').value,
        denuncia: document.getElementById('descricaoDenuncia').value,
    };

    console.log(dados);

    if (!dados.denuncia) {
        alert('O campo "Denúncia" é obrigatório.');
        return;
    }

    try {
        const resposta = await fetch('http://localhost:3000/denuncia', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados),
        });

        if (resposta.ok) {

            const result = await resposta.json();
            alert(result.message);
            window.location.href = '/sucesso';
        } else {
            alert('Erro ao enviar a denúncia.');
        }
    } catch (error) {
        console.error('Erro ao conectar com o servidor:', error);
        alert('Erro ao conectar com o servidor: ' + error.message);
    }
});