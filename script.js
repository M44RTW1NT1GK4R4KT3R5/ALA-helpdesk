//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
////\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//
function startup(){
    var bezoekbaar;
    function klantnaam() {
        var naam = prompt("Naam klant: ");
        if (naam == null || naam.length<1){ klantnaam();}else{document.getElementById("titel").innerHTML = "Naam: " + naam;}
    }
    klantnaam();
    function registerDatum(datum){
        document.getElementById("vandaag").innerHTML = "Klant belde op: "+datum.getDate()+"-"+(datum.getMonth()+1)+"-"+datum.getUTCFullYear();
    }
    registerDatum(new Date());
    function modemCheck (){
        var modem = prompt("Wat is het merk en type van uw modem?");
        if (modem == null || modem.length<1){ modemCheck();}else{document.getElementById("modem").innerHTML = "Modem van klant: " + modem;}
    }
    modemCheck();
    function internetCheck(){
        if (confirm("Heeft u een klacht over ons product internet?")){
            document.getElementById("i1").innerHTML = "De klant meldt problemen met het internet";
            browseCheck();
        }else{
            belCheck();
        }
    }
    internetCheck();
    function browseCheck(){
        if (confirm("kunt u browsen naar www.nu.nl?")){
            bezoekbaar = "browsen naar www.nu.nl lukt";
            document.getElementById("i2").innerHTML = bezoekbaar;
        } else{
            bezoekbaar = "browsen naar www.nu.nl lukt niet";
            document.getElementById("i2").innerHTML = bezoekbaar;
        }
        if (confirm("Reageert de pagina snel na het indrukken van F5?")){
            document.getElementById("i3").innerHTML = "De pagina laadt";
            document.getElementById("i4").innerHTML = "...U kunt browsen de pagina`s laden snel. U heeft geen internet problemen";
            document.getElementById("i5").innerHTML = ("<ul>"+"<li>"+bezoekbaar+"</li>"+"<li>"+"De pagina laadt."+"</li>"+"</ul>");
        }else{
            document.getElementById("i3").innerHTML = "U meldt internetproblemen";
            document.getElementById("i4").innerHTML = '<a href="#">Internet laden</a><br><a href="#">Snelheid van laden</a> '
        }
    belCheck();
    }
    function belCheck(){
        if (confirm("Heeft u een klacht over ons product internet?")){
            document.getElementById("b1").innerHTML = "De klant meldt problemen met het Internet en Bellen";
            telefoonCheck();
        }else{
            //link naar internet bellen tv
        }
    }
    function telefoonCheck(){
         if (confirm("Hoort u een kiestoon?")) {

         }
    }
    /*
    document.writeln("<h1> Naam: " + naam + "</h1>"+"<br>");
    var modem = prompt("Wat is het merk en type van uw modem?");
    document.getElementById("modem").
    print();


    (confirm("Kan oplossing bij internetproblemen tonen") ? document.write("<p> Klant kan oplossing tonen bij internetprobleem</p>"): document.write("<p> Klant kan oplossing tonen bij internetprobleem</p>"));
    */print();
}
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\





















//zonder debounce

function Click(){

    //alle code hier

}




//met debounce

var deb = false;

function debClick(){

    if (deb == false) {

        deb = true;

        //alle code hier

    }else{

        console.log("Je hebt al geklikt op de button");

    }

    deb = false;
}























