///tableau constructeur de citations contenant les noms des artistes et leurs dicton

const citations = [
    {
    auteur:"Youssoupha", 
    dicton:["Mieux vaut sagesse que richesse.",
    "J'peux pas craindre les hommes : ils pourraient se croire comparables à Dieu »",]
    },
{
    auteur:"fally_ipupa",
    dicton:["La vie est belle la vie est dousse", 
    " On ne se baigne jamais deux fois dans le même fleuve",
     "Je sais que je ne sais rien"],

}, 
{
    auteur:"Kerry_James",
    dicton:["Faut que tu choisisses tes amis parmi les meilleurs, pas parmi ceux qui ne font qu'embellir tes erreurs",
"Fais le mal tout le monde s'en rappelle, fais le bien personne s'en souvient", "Moi aussi j'ai ma part d'ombre et je suis seul face à elle quand ma part de lumière tombe"],
},
];

/// etape (1) l'index aleatoire de notre tableau objet

const index =Math.floor(Math.random()*citations.length)
 /////trouve un auteur aleatoirement

 const auteur1 = citations[index].auteur;
 const dicton1 = citations[index].dicton[index];

 let citationA = auteur1+ " " + "/" + dicton1 + " "+ "."; 

console.log(citationA);





