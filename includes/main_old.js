
function slideup(el) {
    //DivSlideUP
    var elem = document.getElementById(el);
    elem.style.transition =  "1.3s cubic-bezier(0, 0, 0.29, 0.88) 0s";
    elem.style.transform = "translateY(-98vh)";
    //elem.style.top = "auto";
  

    //JSON Verbindung
    var loadfall = new XMLHttpRequest();
    loadfall.open('GET', 'https://fallgenerator.de/includes/ddf.json');
    loadfall.onload = function() {
      var falldata = JSON.parse(loadfall.responseText);
      postfall(falldata);
    };
    loadfall.send();
};

function reload() {
   //JSON Verbindung
   var loadfall = new XMLHttpRequest();
   loadfall.open('GET', 'https://fallgenerator.de/includes/ddf.json');
   loadfall.onload = function() {
     var falldata = JSON.parse(loadfall.responseText);
     postfall(falldata);
   };
   loadfall.send();
}
    
function postfall(data) {
  //Zufallszahl
  var max = 124;
  var fallnr = Math.floor(Math.random() * max) + 1;
      
  //Cover
  var img = document.getElementById("cover");
  var htmlcover = document.createElement("img");
  var coversrc = data[fallnr].cover;
  htmlcover.setAttribute ("src", coversrc);
  htmlcover.setAttribute ("id", "cover");
  var coverdiv = document.getElementById("coverbox");
  coverdiv.replaceChild(htmlcover, img);
  
  //Jahr
  var jahrhtml = document.createElement("p");
  var jahralt = document.getElementById("jahr");
  var jahrdiv = document.getElementById("jahr-container");
  var jahrinhalt = document.createTextNode(data[fallnr].jahr);
  jahrhtml.setAttribute("id", "jahr");
  jahrhtml.appendChild(jahrinhalt);
  jahrdiv.replaceChild(jahrhtml, jahralt);

  //tags
  var str = data[fallnr].tags;
  var g = str.includes("gruselig");
  var h = str.includes("hitchcock");
  var r = str.includes("raetsel");
  var s = str.includes("skinny");
  var m = str.includes("morton");
  var u = str.includes("unterwegs");
  var sp = str.includes("spezial");
  var girl = str.includes("girlfriend");
  var t = str.includes("tiere");
  var sch = str.includes("schatz");
  var k = str.includes("kunst");
  var se = str.includes("sekte");

  var tagsconalt = document.getElementById("tags-box");
  var tagscon = document.createElement("div");
  tagscon.setAttribute("class", "tags-box");
  tagscon.setAttribute("id", "tags-box");
  if(g) {
    var tagsdivg = document.createElement("div");
    tagsdivg.setAttribute("id", "tagsdiv");
    tagsdivg.setAttribute("class", "tags");
    tagsdivg.setAttribute("onclick", "tagclick('gruselig')");
    var spang = document.createElement("span");
    spang.setAttribute("class", "tags-dot gruselig");
    var textg = document.createElement("p");
    textg.setAttribute("class", "tags-text");
    var gtext = document.createTextNode("Gruselig");
    textg.appendChild(gtext);
    tagsdivg.appendChild(spang);
    tagsdivg.appendChild(textg);
    tagscon.appendChild(tagsdivg);
    console.log(g);
  };
  if(h) {
    var tagsdivh = document.createElement("div");
    tagsdivh.setAttribute("id", "tagsdiv");
    tagsdivh.setAttribute("class", "tags");
    tagsdivh.setAttribute("onclick", "tagclick('hitchcock')");
    var spanh = document.createElement("span");
    spanh.setAttribute("class", "tags-dot hitchcock");
    var texth = document.createElement("p");
    texth.setAttribute("class", "tags-text");
    var htext = document.createTextNode("Hitchcock");
    texth.appendChild(htext);
    tagsdivh.appendChild(spanh);
    tagsdivh.appendChild(texth);
    tagscon.appendChild(tagsdivh);
    console.log(h);
  };
  if(r) {
    var tagsdivr = document.createElement("div");
    tagsdivr.setAttribute("id", "tagsdiv");
    tagsdivr.setAttribute("class", "tags");
    tagsdivr.setAttribute("onclick", "tagclick('raetsel')");
    var spanr = document.createElement("span");
    spanr.setAttribute("class", "tags-dot raetsel");
    var textr = document.createElement("p");
    textr.setAttribute("class", "tags-text");
    var rtext = document.createTextNode("Rätsel");
    textr.appendChild(rtext);
    tagsdivr.appendChild(spanr);
    tagsdivr.appendChild(textr);
    tagscon.appendChild(tagsdivr);
    console.log(r);
  };
  if(s) {
    var tagsdivs = document.createElement("div");
    tagsdivs.setAttribute("id", "tagsdiv");
    tagsdivs.setAttribute("class", "tags");
    tagsdivs.setAttribute("onclick", "tagclick('skinny')");
    var spans = document.createElement("span");
    spans.setAttribute("class", "tags-dot skinny");
    var texts = document.createElement("p");
    texts.setAttribute("class", "tags-text");
    var stext = document.createTextNode("Skinny");
    texts.appendChild(stext);
    tagsdivs.appendChild(spans);
    tagsdivs.appendChild(texts);
    tagscon.appendChild(tagsdivs);
    console.log(s);
  };
  if(m) {
    var tagsdivm = document.createElement("div");
    tagsdivm.setAttribute("id", "tagsdiv");
    tagsdivm.setAttribute("class", "tags");
    tagsdivm.setAttribute("onclick", "tagclick('morton')");
    var spanm = document.createElement("span");
    spanm.setAttribute("class", "tags-dot morton");
    var textm = document.createElement("p");
    textm.setAttribute("class", "tags-text");
    var mtext = document.createTextNode("Morton");
    textm.appendChild(mtext);
    tagsdivm.appendChild(spanm);
    tagsdivm.appendChild(textm);
    tagscon.appendChild(tagsdivm);
    console.log(m);
  };
  if(u) {
    var tagsdivu = document.createElement("div");
    tagsdivu.setAttribute("id", "tagsdiv");
    tagsdivu.setAttribute("class", "tags");
    tagsdivu.setAttribute("onclick", "tagclick('unterwegs')");
    var spanu = document.createElement("span");
    spanu.setAttribute("class", "tags-dot unterwegs");
    var textu = document.createElement("p");
    textu.setAttribute("class", "tags-text");
    var utext = document.createTextNode("Unterwegs");
    textu.appendChild(utext);
    tagsdivu.appendChild(spanu);
    tagsdivu.appendChild(textu);
    tagscon.appendChild(tagsdivu);
    console.log(u);
  };
  if(sp) {
    var tagsdivsp = document.createElement("div");
    tagsdivsp.setAttribute("id", "tagsdiv");
    tagsdivsp.setAttribute("class", "tags");
    tagsdivsp.setAttribute("onclick", "tagclick('spezial')");
    var spansp = document.createElement("span");
    spansp.setAttribute("class", "tags-dot spezial");
    var textsp = document.createElement("p");
    textsp.setAttribute("class", "tags-text");
    var sptext = document.createTextNode("Spezial");
    textsp.appendChild(sptext);
    tagsdivsp.appendChild(spansp);
    tagsdivsp.appendChild(textsp);
    tagscon.appendChild(tagsdivsp);
    console.log(sp);
  };
  if(girl) {
    var tagsdivgirl = document.createElement("div");
    tagsdivgirl.setAttribute("id", "tagsdiv");
    tagsdivgirl.setAttribute("class", "tags");
    tagsdivgirl.setAttribute("onclick", "tagclick('girlfriends')");
    var spangirl = document.createElement("span");
    spangirl.setAttribute("class", "tags-dot girlfriends");
    var textgirl = document.createElement("p");
    textgirl.setAttribute("class", "tags-text");
    var girltext = document.createTextNode("Girlfriends");
    textgirl.appendChild(girltext);
    tagsdivgirl.appendChild(spangirl);
    tagsdivgirl.appendChild(textgirl);
    tagscon.appendChild(tagsdivgirl);
    console.log(girl);
  };
  if(t) {
    var tagsdivt = document.createElement("div");
    tagsdivt.setAttribute("id", "tagsdiv");
    tagsdivt.setAttribute("class", "tags");
    tagsdivt.setAttribute("onclick", "tagclick('tiere')");
    var spant = document.createElement("span");
    spant.setAttribute("class", "tags-dot tiere");
    var textt = document.createElement("p");
    textt.setAttribute("class", "tags-text");
    var ttext = document.createTextNode("Tiere");
    textt.appendChild(ttext);
    tagsdivt.appendChild(spant);
    tagsdivt.appendChild(textt);
    tagscon.appendChild(tagsdivt);
    console.log(t);
  };
  if(sch) {
    var tagsdivsch = document.createElement("div");
    tagsdivsch.setAttribute("id", "tagsdiv");
    tagsdivsch.setAttribute("class", "tags");
    tagsdivsch.setAttribute("onclick", "tagclick('schatz')");
    var spansch = document.createElement("span");
    spansch.setAttribute("class", "tags-dot schatz");
    var textsch = document.createElement("p");
    textsch.setAttribute("class", "tags-text");
    var schtext = document.createTextNode("Schatz");
    textsch.appendChild(schtext);
    tagsdivsch.appendChild(spansch);
    tagsdivsch.appendChild(textsch);
    tagscon.appendChild(tagsdivsch);
    console.log(sch);
  };
  if(k) {
    var tagsdivk = document.createElement("div");
    tagsdivk.setAttribute("id", "tagsdiv");
    tagsdivk.setAttribute("class", "tags");
    tagsdivk.setAttribute("onclick", "tagclick('kunst')");
    var spank = document.createElement("span");
    spank.setAttribute("class", "tags-dot kunst");
    var textk = document.createElement("p");
    textk.setAttribute("class", "tags-text");
    var ktext = document.createTextNode("Kunst");
    textk.appendChild(ktext);
    tagsdivk.appendChild(spank);
    tagsdivk.appendChild(textk);
    tagscon.appendChild(tagsdivk);
    console.log(k);
  };
  if(se) {
    var tagsdivse = document.createElement("div");
    tagsdivse.setAttribute("id", "tagsdiv");
    tagsdivse.setAttribute("class", "tags");
    tagsdivse.setAttribute("onclick", "tagclick('sekte')");
    var spanse = document.createElement("span");
    spanse.setAttribute("class", "tags-dot sekte");
    var textse = document.createElement("p");
    textse.setAttribute("class", "tags-text");
    var setext = document.createTextNode("Sekte");
    textse.appendChild(setext);
    tagsdivse.appendChild(spanse);
    tagsdivse.appendChild(textse);
    tagscon.appendChild(tagsdivse);
    console.log(se);
  };
  var tagswrapper = document.getElementById("tags-wrapper");
  tagswrapper.replaceChild(tagscon, tagsconalt);

  //Klappentext
  //var text = document.createElement("p");
  //text.setAttribute("id", "text");
  //var textalt = document.getElementById("text");
  //var klappentextdiv = document.getElementById("klappentext-text");
  //var textcontent = document.createTextNode(data[fallnr].klappentext);
  //text.appendChild(textcontent);
  //klappentextdiv.replaceChild(text, textalt);

  //Spotify
  var spotifyhtml = document.getElementById("spotify");
  var spotifybtn = document.createElement("button");
  var spotifycon = document.getElementById("spotifycon");
  var spotifylink = data[fallnr].spotify;
  var spotifytext = document.createTextNode("SPOTIFY");
  spotifybtn.setAttribute("class", "spotify-btn");
  spotifybtn.setAttribute("id", "spotify");
  spotifybtn.setAttribute("onclick", `window.open("${spotifylink}", '_blank')`);
  spotifybtn.appendChild(spotifytext);
  spotifycon.replaceChild(spotifybtn, spotifyhtml);
}
function slidedown(el) {
  //DivSlideDown
  var elem = document.getElementById(el);
  elem.style.transition =  "1.3s cubic-bezier(0, 0, 0.29, 0.88) 0s";
  elem.style.transform = "translateY(90vh)";
  elem.style.top = "100vh";
}

function klappentext() {
  var klappentext = document.getElementById('klappentext-text');
  klappentext.classList.toggle('show');
}

function menu(){
  //slide menu to right
  var menudiv = document.getElementById("navbar");
  menudiv.classList.toggle('change');
}

function tagclick(tag){
  var element = document.getElementById("tagapp");
    element.style.transition =  "1.3s cubic-bezier(0, 0, 0.29, 0.88) 0s";
    element.style.transform = "translateY(-178vh)";
  let falldataliste = [];
  
  const loadCharacters = async () => {
      try {
          const res = await fetch('https://fallgenerator.de/includes/ddf.json');
          falldataliste = await res.json();
          var falldatatag = falldataliste.filter(function(item){
              return item.tags.includes(tag);         
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
}
function zu() {
  var elem = document.getElementById('tagapp');
  elem.style.transition =  "1.3s cubic-bezier(0, 0, 0.29, 0.88) 0s";
  elem.style.transform = "translateY(90vh)";
  elem.style.top = "100vh";
}
