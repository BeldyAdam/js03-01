window.addEventListener("load", init);

function init() {
  const objList = [
    {
        nev: "Zoé",
        mondat: "Befejeztem tegnap a szobám kifestését!",
        kor: 23,
        teso: 0,
        szemszín: "kék",
      },
      {
        nev: "Kornél",
        mondat: "Finom volt a gyros ebéd.",
        kor: 23,
        teso: 0,
        szemszín: "kék",
      },
      {
        nev: "Bónó",
        mondat: "Vettem egy új síkesztyűt.",
        kor: 23,
        teso: 0,
        szemszín: "kék",
      },
      {
        nev: "Leila",
        mondat:
          "Tegnap volt itt a várandós nővérem, és a baba lerúgta a kezem a hasáról.",
        kor: 23,
        teso: 0,
        szemszín: "kék",
      },
      {
        nev: "Bence",
        mondat: "Hálát adtam az úrnak, hogy lementem edzeni.",
        kor: 23,
        teso: 0,
        szemszín: "kék",
      },
      {
        nev: "Hunor",
        mondat:
          "Az egyik kedvenc játékom le volt árazva, és megvettem, és hétfőn született meg az unokatestvérem gyereke.",
        kor: 23,
        teso: 0,
        szemszín: "kék",
      },
      {
        nev: "Ádám",
        mondat: "Kirúgták a gyökér főnökömet.",
        kor: 23,
        teso: 0,
        szemszín: "kék",
      },
      {
        nev: "Dominik",
        mondat:
          "Sose szerettem a csípőset és mégis vágytam rá és ettem és nagyon jól esett.",
        kor: 23,
        teso: 0,
        szemszín: "kék",
      },
      {
        nev: "Lél",
        mondat: "Finom volt a vacsi.",
        kor: 23,
        teso: 0,
        szemszín: "kék",
      },
      {
        nev: "Bónó",
        mondat: "Vettem egy új síkesztyűt.",
        kor: 23,
        teso: 0,
        szemszín: "kék",
      },
      {
        nev: "Laci",
        mondat:
          "Van egy játék és készítettek hozzá egy grafikai modult és és abba találtam egy pixelek elsimitására apit és a mozgásérzékelést, és a jobban nézett ki a játék.",
        kor: 23,
        teso: 0,
        szemszín: "kék",
      },
      {
        nev: "Ricsi",
        mondat:
          "Tegnap elaludtam Csolti Péter tanár úr óráján és egész nap aludtam.",
        kor: 23,
        teso: 0,
        szemszín: "kék",
      },
      {
        nev: "Dominik",
        mondat: "Az egyik lakótársam hozott nekem sütit.",
        kor: 23,
        teso: 1,
        szemszín: "kék",
      },
      {
        nev: "Martin",
        mondat: "Ember, most jöttem a templomból",
        kor: 23,
        teso: 0,
        szemszín: "zöld",
      },
      {
        nev: "Valentin",
        mondat: "Vezethettem a volt munkahelyem új céges autóját.",
        kor: 23,
        teso: 31,
        szemszín: "kék",
      },
  ];
  console.log(objList);
  let txt = osszesit(objList);
  szuloElem = document.querySelectorAll("article");
  kiir(txt, szuloElem);
}
function osszesit(lista) {
  let txt = `<table>`;
  txt += `<tr>`;
  for (const key in lista[0]) {
    txt += `<th>${key}</th>`;
  }
  txt += `</tr>`;

  for (let index = 0; index < lista.length; index++) {
    txt += `<tr>`;
    let object = lista[index];
    for (const key in object) {
      txt += `<td>${object[key]}</td>`;
    }
    txt += `</tr>`;
    console.log(lista[index]);
  }
  txt += "</table>";
  return txt;
}

function kiir(txt, szuloElem) {
  szuloElem[0].innerHTML = txt;
}
