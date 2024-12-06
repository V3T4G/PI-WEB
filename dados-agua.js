function adicionarPontos(map) {
    const pontos = [
        { lat: -3.1019, lng: -60.0250, cidade: "Manaus", estado: "AM", populacao: "600 mil", problema: "Baixa cobertura de esgoto, falta de tratamento", regiao: "Norte", gravidade: "alta" },
        { lat: -1.4558, lng: -48.4902, cidade: "Belém", estado: "PA", populacao: "550 mil", problema: "Alta evasão de esgoto e drenagem precária", regiao: "Norte", gravidade: "alta" },
        { lat: -2.5391, lng: -44.2829, cidade: "São Luís", estado: "MA", populacao: "500 mil", problema: "Despejo de esgoto em rios, abastecimento intermitente", regiao: "Nordeste", gravidade: "alta" },
        { lat: 0.0349, lng: -51.0694, cidade: "Macapá", estado: "AP", populacao: "350 mil", problema: "Ausência de rede pública de esgoto", regiao: "Norte", gravidade: "alta" },
        { lat: -8.7608, lng: -63.9039, cidade: "Porto Velho", estado: "RO", populacao: "200 mil", problema: "Déficit na coleta e no tratamento de esgoto", regiao: "Norte", gravidade: "moderada" },
        { lat: -5.0892, lng: -42.8019, cidade: "Teresina", estado: "PI", populacao: "150 mil", problema: "Cobertura de esgoto inferior a 20%", regiao: "Nordeste", gravidade: "moderada" },
        { lat: -15.6014, lng: -56.0979, cidade: "Cuiabá", estado: "MT", populacao: "100 mil", problema: "Falhas em obras de saneamento", regiao: "Centro-Oeste", gravidade: "moderada" },
        { lat: -5.7945, lng: -35.2110, cidade: "Natal", estado: "RN", populacao: "250 mil", problema: "Alta contaminação de águas subterrâneas", regiao: "Nordeste", gravidade: "moderada" },
        { lat: -9.9747, lng: -67.8246, cidade: "Rio Branco", estado: "AC", populacao: "90 mil", problema: "Rede insuficiente para áreas periféricas", regiao: "Norte", gravidade: "baixa" },
        { lat: -7.2307, lng: -35.8810, cidade: "Campina Grande", estado: "PB", populacao: "120 mil", problema: "Infraestrutura insuficiente em áreas urbanas e rurais", regiao: "Nordeste", gravidade: "baixa" }
    ];

    pontos.forEach(item => {

        let color;
        switch (item.gravidade) {
            case "alta":
                color = "red";
                break;
            case "moderada":
                color = "orange";
                break;
            case "baixa":
                color = "yellow";
                break;
            default:
                color = "blue";
        }


        const marker = L.circleMarker([item.lat, item.lng], {
            color: color,
            radius: 8,
            fillColor: color,
            fillOpacity: 0.8
        }).addTo(map);


        marker.bindPopup(`
            <div>
                <h3>${item.cidade}, ${item.estado}</h3>
                <p><strong>População:</strong> ${item.populacao}</p>
                <p><strong>Problema:</strong> ${item.problema}</p>
                <p><strong>Região:</strong> ${item.regiao}</p>
            </div>
        `);
    });
}