const fallliste = document.getElementById('fallliste');
let falldata = [];

const loadCharacters = async () => {
    try {
        const res = await fetch('https://fallgenerator.de/includes/ddf.json');
        falldata = await res.json();
        var falldatatag = falldata.filter(function(item){
            return item.tags.includes("gruselig");         
        });
        displayCharacters(falldatatag);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (ddfhtml) => {
    const htmlString = ddfhtml
        .map((ddf) => {
            return `
            <li class="fall">
              <div class="elementbox">
                <img class="coverliste" src="${ddf.cover}">
                <div class="jahrliste">
                        <p>${ddf.jahr}</p>       
                </div>
                <div class="tagsconliste">
                    <p>${ddf.tags}</p>
                </div>
                <div class="btnliste">
                <button class="spotify-btn liste" onclick="window.open('${ddf.spotify}', '_blank')">SPOTIFY</button>
                </div>
              </div>
            </li>
        `;
        })
        .join('');
    fallliste.innerHTML = htmlString;
};

loadCharacters();