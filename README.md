# Teknisk dokumentation for Tema 7 gruppeprojekt

Når man er flere der bidrager til en kodebase, lærer man hurtigt, at ens sædvanlige måder at gøre tingene på ikke nødvendigvis er logisk for alle.

Skriv derfor jeres fælles retningslinjer for punkterne herunder(tilføj gerne flere selv), sådan som det giver bedst mening for jer som gruppe. Dokumentationen sikre, at jeres fælles kodebase forbliver overskuelig, er let at arbejde med og til at forstå for alle, og at I undgå konflikter, og har nemmere ved at hjælpe hinanden undervejs.

## Projektstruktur:

Beslut, hvordan I vil organisere jeres projekt – struktur for mapper og filer.

- Hvordan organiserer I billeder, fonte og andre ressourcer?
  "Vi har seperate mapper til billeder, css, js og html. Hver html-side har en tilhørende css og js. Vi har en overordnet css hvor vi bruger root til ens struktur ift. fonts, farve, gap, margin osv. "
- Hvor placerer I boilerplate?(fx CSS- og JavaScript-filer, der bruges på tværs af projektet)
- Hvor placerer I HTML, CSS- og JavaScript-filer til fx detaljevisning og listevisning?

## Navngivning:

Beslutte hvordan i vil navngive filer og mapper for at sikre en ensartet struktur og undgå forvirring.

- Hvordan navngiver I filnavne? (fx små bogstaver, ingen mellemrum, brug af - eller _)
  "Vi navngiver html, css og js ens ift, hvilke der hænger sammen og vi bruger _"
- Hvordan sikre I at det er til at forstå hvilke HTML-, CSS- og JavaScript-filer der høre sammen?
  "Vi navngiver dem ens, så en css eller js fil der refererer til en html vil dele samme navn"

## Link til scripts:

- Hvor placerer I script referencer i HTML'en? (fx i <head> med defer attribute, eller sidst i <body>)
  "Vi placerer det øverst og bruger defer"

## Git branches:

- Hvordan navngiver I branches, så alle kan forstår hvem der arbejder i branchen og på hvad?(fx feature-lotte-formular)
  "Vi har en fælles struktur der hedder "feature-"navn"-"formular", er filnavnet et sammensat ord bruger vi underscore"

## Arbejdsflow:

- Hvordan fordeler I arbejdet, så I undgår at flere arbejder i de samme filer samtidigt?
  "Vi arbejder med hver vores side"
- Hvordan sikrer I, at commit-beskeder er beskrivende?
  "Man giver en kort beskrivelse ift. ændringen"
- Hvordan kommunikerer i om ændringer i main branchen når feature merges?
  "Vi følger strukturen fra udleverede skema ift. github"

## Kode:

- Hvordan skriver i funktioner i JavaScript?(fx med function keyword eller som arrow functions)
  "Vi benytter arrow functions"
- Beslut hvilken CSS selector i benyttes til referener i henholdsvis CSS og JavaScript(fx. id'er til JavaScript og Classes til CSS)
  "Vi bruger som udgangspunkter classes, og tilføjer ID ved behov"
- Skal filer have korte forklaringer som kommentarer?
  "Vi bruger tematisk udkommentering ift. sektioner i vores css og js"

# Funktionalitet

Vi har arbejdet med følgende:

- Hentning af produkter fra API.
- Filtrering af produkter baseret på brugerens valg.
- Dynamisk visning af produkter i HTML.

# API endpoints

- (fx. https://dummyjson.com/products)

# Dokumentation af Funktion

Beskrivelse:
Funktionen showProductList viser en liste af produkter på websiden. Den tager en liste af produkter som input og genererer HTML for hvert produkt, som derefter indsættes i en container på siden. Funktionen viser produktinformation som billede, navn, brand, pris, vurdering og antal anmeldelser.

Parametre:
products (Array): En liste med produktdata, hvor hvert produkt indeholder oplysninger som navn, pris, billede, brand, vurdering og anmeldelser.
Returnerer:
Funktionen returnerer ikke noget, men ændrer indholdet på websiden ved at tilføje HTML for produkterne i en bestemt container.

Eksempel:

// Funktionens kode:
function showProductList(products) {
// Genererer HTML for hvert produkt
// og indsætter det i produktcontaineren
}

// Hvordan funktionen kaldes:
showProductList(products);

I eksemplet ovenfor kalder vi showProductList med en liste af produkter. Funktionen genererer HTML for hvert produkt og viser det på websiden.
