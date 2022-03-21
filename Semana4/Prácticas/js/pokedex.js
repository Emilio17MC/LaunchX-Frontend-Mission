const fetchPokemon = () => {
    
    const pokeName = document.getElementById('pokeName');
    let pokeInput = pokeName.value.toLowerCase();

    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;

    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res)
        } else {
            return res.json();
        }
    })
    .then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        let pokeName = data.name;
        
        let pokeID = data.id;
        let pokeSize = data.height * 10;
        let pokeWeight = data.weight;

        let pokeHealth = data.stats["0"].base_stat;
        let pokeAttack = data.stats["1"].base_stat;
        let pokeDeffense = data.stats["2"].base_stat;
        let pokeSpecialHealth = data.stats["3"].base_stat;
        let pokeSpecialDeffense = data.stats["4"].base_stat;
        let pokeSpeed = data.stats["5"].base_stat;

        pokeImage(pokeImg);
        
        writePage(pokeName, "Name: ", "pokeName_lbl", "");
        writePage(pokeID, "ID: ", "pokeID_lbl", "");
        writePage(pokeSize, "Size: ", "pokeSize_lbl", " cm");
        writePage(pokeWeight, "Weight: ", "pokeWeight_lbl", " kg");

        writePage(pokeHealth, "Health = ", "pokeHealth_lbl", "");
        writePage(pokeAttack, "Attack = ", "pokeAttack_lbl", "");
        writePage(pokeDeffense, "Defense = ", "pokeDeffense_lbl", "");
        writePage(pokeSpecialHealth, "Special Attack = ", "pokeSpecialAttack_lbl", "");
        writePage(pokeSpecialDeffense, "Special Defense = ", "pokeSpecialDeffense_lbl", "");
        writePage(pokeSpeed, "Special Speed = ", "pokeSpeed_lbl", "");

        changeProg(pokeHealth, "pokeHealth_bar");
        changeProg(pokeAttack, "pokeAttack_bar");
        changeProg(pokeDeffense, "pokeDeffense_bar");
        changeProg(pokeSpecialHealth, "pokeSpecialHealth_bar");
        changeProg(pokeSpecialDeffense, "pokeSpecialDeffense_bar");
        changeProg(pokeSpeed, "pokeSpeed_bar");
    });

}


const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.style.backgroundImage = 'url(' + url + ')'
}

const writePage = (name, text, element, secondaryText) => {
    document.getElementById(element).innerHTML = text + name + secondaryText;
}

const changeProg = (name, element) => {
    const pokeBar = document.getElementById(element);
    pokeBar.style.width = name + "%";
}

// document.getElementById("pokeImage").style.backgroundImage = 'url("https://source.unsplash.com/oWTW-jNGl9I/600x800")'