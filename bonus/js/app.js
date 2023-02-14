// console.log('Test');


// Creare l’array di oggetti

// Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg




const dipendenti = [
	{
		firstName: 'Wayne',
		lastName: 'Barnett',
        role: 'Founder & CEO',
		img: './img/wayne-barnett-founder-ceo.jpg'
	},
    {
		firstName: 'Angela',
		lastName: 'Caroll',
        role: 'Chief Editor',
		img: './img/angela-caroll-chief-editor.jpg'
	},
    {
		firstName: 'Walter',
		lastName: 'Gordon',
        role: 'Office Manager',
		img: './img/walter-gordon-office-manager.jpg'
	},
    {
		firstName: 'Angela',
		lastName: 'Lopez',
        role: 'Social Media Manager',
		img: './img/angela-lopez-social-media-manager.jpg'
	},
    {
		firstName: 'Scott',
		lastName: 'Estrada',
        role: 'Developer',
		img: './img/scott-estrada-developer.jpg'
	},
    {
		firstName: 'Barbara',
		lastName: 'Ramos',
        role: 'Graphic Designer',
		// img: './img/barbara-ramos-graphic-designer.jpg'
        img: getImage ("barbara-ramos-graphic-designer.jpg" , foto1)
	},
]

for (let key in dipendenti) {
    console.log(dipendenti[key]);
}

const dipendenteTableEl = document.getElementById("dipendente");

for ( let i = 0; i < dipendenti.length; i++ ) {

    let dipendente = dipendenti[i];
    let name = dipendente.firstName + " " + dipendente.lastName;
    let role = dipendente.role;
    let img = dipendente.img;


    console.log("Nome:", name)
    console.log("Ruolo:", role)
    console.log("Foto:", img)

        
    const tr = `
    <tr>
        <td>${name}</td>
        <td>${role}</td>
        <td>${img}</td>
    </tr>
    `;

    dipendenteTableEl.innerHTML += tr;

}


// prendo elemento da html
// const foto = document.getElementById("foto").src = "./img/wayne-barnett-founder-ceo.jpg";
// creo l'elemento img
// let img = document.createElement("img");
// // assegno un src all'img
// img.src = "./img/wayne-barnett-founder-ceo.jpg";
// // adesso lo mostro su html
// foto.append(img); 

// document.getElementById("myImg").src = "hackanm.gif";





// function getImage (immagine , doveStampare) {
//     const fotoElement = document.getElementById("doveStampare").src = "./img/immagine";

// }

