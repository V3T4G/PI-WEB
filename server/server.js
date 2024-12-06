const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');


const app = express();
const PORT = 3000;


mongoose.connect('mongodb://localhost:27017/saneamento', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conectado ao MongoDB');
    })
    .catch((error) => {
        console.error('Erro ao conectar ao MongoDB:', error);
        process.exit(1);
    });


const denunciaSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    telefone: { type: String, required: true },
    endereco: { type: String, required: true },
    municipio: { type: String, required: true },
    denuncia: { type: String, required: true },
});

const Denuncia = mongoose.model('Denuncia', denunciaSchema);


app.use(cors());

app.use(express.json());

app.use(express.static(path.join(__dirname, '../')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});


app.get('/sucesso', (req, res) => {
    res.sendFile(path.join(__dirname, '../sucesso.html'));
});


app.post('/denuncia', async(req, res) => {
    try {
        const novaDenuncia = new Denuncia(req.body);
        await novaDenuncia.save();


        res.status(200).json({ message: 'Denúncia registrada com sucesso!' });
    } catch (error) {
        console.error('Erro ao salvar a denúncia:', error);
        res.status(500).send('Erro ao salvar a denúncia: ' + error.message);
    }
});



app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});