//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
////\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//
function startup() {
    var vandaag, bezoekbaar, modem, kiestoon, vastmob, mobvast, aantaltv, splitter, settopbox, zenders;   //wow, zie hvl variabelen zo`n code als dit nodig heeft
    var table = [];
    function klantnaam() {
        var naam = prompt("Naam klant: ");
        if (naam == null || naam.length < 1) {
            klantnaam();
        } else {
            document.getElementById("titel").innerHTML = "Naam: " + naam;
        }
    }

    klantnaam();
    function registerDatum(datum) {
        vandaag = datum.getDate() + "-" + (datum.getMonth() + 1) + "-" + datum.getUTCFullYear();
        document.getElementById("vandaag").innerHTML = "Klant belde op: " +vandaag;
    }

    registerDatum(new Date());
    function modemCheck() {
        modem = prompt("Wat is het merk en type van uw modem?");
        if (modem == null || modem.length < 1) {
            modemCheck();
        } else {
            document.getElementById("modem").innerHTML = "Modem van klant: " + modem;
        }
    }

    modemCheck();
    function internetCheck() {
        if (confirm("Heeft u een klacht over ons product internet?")) {
            document.getElementById("i1").innerHTML = "De klant meldt problemen met het internet";
            browseCheck();
        } else {
            document.getElementById("i1").innerHTML = "De klant meldt geen problemen met het internet";
            table[0] = true;
            belCheck(); //naar fase 2
        }
    }

    internetCheck();
    function browseCheck() {
        if (confirm("kunt u browsen naar www.nu.nl?")) {
            bezoekbaar = "browsen naar www.nu.nl lukt";
        } else {
            bezoekbaar = "probleem: browsen naar www.nu.nl lukt niet";
        }
        document.getElementById("i2").innerHTML = bezoekbaar;
        if (confirm("Reageert de pagina snel na het indrukken van F5?")) {
            table[0] = true;
            document.getElementById("i3").innerHTML = "De pagina laadt";
            document.getElementById("i4").innerHTML = "...U kunt browsen de pagina`s laden snel. U heeft geen internet problemen";
            document.getElementById("i5").innerHTML = ("<ul>" + "<li>" + bezoekbaar + "</li>" + "<li>" + "De pagina laadt." + "</li>" + "</ul>");
        } else {
            table[0] = false;
            document.getElementById("i3").innerHTML = "U meldt internetproblemen";
            document.getElementById("i4").innerHTML = '<a href="#">Internet laden</a><br><a href="#">Snelheid van laden</a> '
        }
        belCheck();  //naar fase 2
    }

    function belCheck() {
        if (confirm("Heeft u een klacht over ons product Internet en Bellen?")) {
            document.getElementById("b1").innerHTML = "De klant meldt problemen met Bellen";
            telefoonCheck();
        } else {
            document.getElementById("b1").innerHTML = "De klant meldt geen problemen met Bellen";
            table[1] = true;
            tvCheck();//naar fase 3
        }
    }

    function telefoonCheck() {
        if (confirm("Hoort u een kiestoon?")) {
            kiestoon = "Hoort een kiestoon";
        } else {
            kiestoon = "Probleem: Hoort geen kiestoon";
        }
        document.getElementById("b2").innerHTML = kiestoon;
        if (confirm("Kunt u uzelf bellen via een mobiel nummer?")) {
            vastmob = "Klant kan van vast naar mobiel bellen";
        } else {
            vastmob = "Probleem: Klant kan niet van vast naar mobiel bellen";
        }
        document.getElementById("b3").innerHTML = vastmob;
        if (confirm("Kunt u uzelf bellen via een vast nummer?")) {
            mobvast = "Klant kan van mobiel naar vast bellen";
            document.getElementById("b4").innerHTML = mobvast;
            document.getElementById("b5").innerHTML = "...U heeft geen belproblemen";
            document.getElementById("b6").innerHTML = ("<ul>" + "<li>" + kiestoon + "</li>" + "<li>" + vastmob + "</li>" + "<li>" + mobvast + "</li>" + "</ul>");
            table[1] = true;
        } else {
            mobvast = "Probleem: Klant kan niet van mobiel naar vast bellen";
            document.getElementById("b4").innerHTML = mobvast;
            document.getElementById("b5").innerHTML = "...U meldt problemen";
            table[1] = false;
            document.getElementById("b6").innerHTML = '<a href="#">Bellen herstellen</a><br><a href="#">Kiestoon hoorbaar maken</a>';
        }
        tvCheck(); //naar fase 3
    }

    function tvCheck() {
        if (confirm("Heeft u een klacht over ons product Internet, Bellen en Televisie?")) {
            document.getElementById("c1").innerHTML = "De klant meldt problemen met de Televisie";
            televisies();
        } else {
            document.getElementById("c1").innerHTML = "De klant meldt geen problemen met de Televisie";
            table[2] = true;
            controle();
        }
    }

    function televisies() {
        aantaltv = prompt("aantal televisietoestellen:");
        if (aantaltv == null || aantaltv < 1) {
            televisies();
        } else {
            document.getElementById("c2").innerHTML = "klant heeft "+aantaltv+" televisietoestellen";
            televisieCheck();
        }
    }

    function televisieCheck() {
        if (confirm("is uw splitter goed aangesloten?")){
            splitter = "splitter is goed aangesloten";
        }else{
            splitter = "Probleem: splitter is niet goed aangesloten";
        }
        document.getElementById("c3").innerHTML=splitter;

        if (confirm("is uw settopbox goed aangesloten?")){
            settopbox = "settopbox is goed aangesloten";
        }else{
            settopbox = "Probleem: settopbox is niet goed aangesloten";
        }
        document.getElementById("c4").innerHTML=settopbox;
        if (confirm("worden de zenders gevonden?")){
            zenders = "zenders worden gevonden";
            document.getElementById("c5").innerHTML = zenders;
            document.getElementById("c6").innerHTML = "...U heeft geen televisieproblemen.";
            table[2] = true;
            document.getElementById("c7").innerHTML = ("<ul>" + "<li>" + "klant heeft "+ aantaltv +" televisietoestellen "+ "</li>" + "<li>" + splitter + "</li>" + "<li>" + settopbox + "</li>" + "<li>" + zenders + "</li>" + "</ul>");
        }else{
            zenders = "settopbox: zenders worden niet gevonden";
            document.getElementById("c5").innerHTML = zenders;
            document.getElementById("c6").innerHTML = "U meldt problemen";
            table[2] = false;
            document.getElementById("c7").innerHTML =' <a href="#">Splitter aangesloten</a><br><a href="#">Settopbox aangesloten</a><br><a href="#">Zenders niet gevonden</a>';
        }
        controle();
    }
    function controle(){
        if (table[0]!= false && table[1]!= false && table[2]!= false){
            document.getElementById("e1").innerHTML = "U heeft geen klachten gemeld op "+vandaag;
            document.getElementById("e2").innerHTML = "Uw modem "+modem+ " werkt prima";
        }
    }

}
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\