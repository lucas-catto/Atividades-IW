fetch('http://localhost:3000/BurgerCrazy')
.then(response => response.json())
.then(data => {
    let pokemonDiv = document.getElementById('pokemonList');
    data.forEach(lanche => {
        let pokemonCard = document.createElement('div');
        pokemonCard.classList.add('pokemon-card');
        pokemonCard.innerHTML = `
            <h2>${lanche.nome}</h2>
            <img src="img/${lanche.id}.png" alt="${lanche.nome}">
            <p><strong>ID - </strong> ${lanche.id}</p>
            <p><strong>Preço: R$</strong> ${lanche.preco}</p>
            <p><strong>Ingredientes:</strong> ${lanche.ingredientes} m</p>
        `;
        pokemonDiv.appendChild(pokemonCard);
    });
})
.catch(error => console.error(error));