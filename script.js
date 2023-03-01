window.addEventListener("load", init);

function init() {
    const list = ["Végre meg tudtam akadályozni, hogy a kutya hátraszökjön a kertbe", "Tudtam ültetni és van két virágom", "Lebetegedtem", "Tegnapi adatbázis-kezelés", "Kupcsik tanárnő vicces", "Tegnap kialaudtam magam", "Sikerült Csolti Péteres feladatot teljesen megcsinálni! ", "Jó edzés volt a héten!",];

    const articleElem = document.getElementById("tartalom");

    megjelenit(list, articleElem);
    const szuloElem = document.querySelectorAll("section");
    megjelenit2(list, szuloElem);
}

function megjelenit(list, articleElem) {
    let txt = "<ul>";
    for (let index = 0; index < list.length; index++) {
        console.log(list[index]);
        txt += "<li>" + list[index] + "</li>";

    }
    txt += "</ul>";
    articleElem.innerHTML = txt;


}

function megjelenit2(list, szuloElem) {
    let text = "";
    for (let index = 0; index < list.length; index++) {
        text += "<div>" + "<p>" + list[index] + "<p>" + "</div>";
    }
    szuloElem[0].innerHTML += text;
}