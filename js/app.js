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
		img: 'wayne-barnett-founder-ceo.jpg'
	},
    {
		firstName: 'Angela',
		lastName: 'Caroll',
        role: 'Chief Editor',
		img: 'angela-caroll-chief-editor.jpg'
	},
    {
		firstName: 'Walter',
		lastName: 'Gordon',
        role: 'Office Manager',
		img: 'walter-gordon-office-manager.jpg'
	},
    {
		firstName: 'Angela',
		lastName: 'Lopez',
        role: 'Social Media Manager',
		img: 'angela-lopez-social-media-manager.jpg'
	},
    {
		firstName: 'Scott',
		lastName: 'Estrada',
        role: 'Developer',
		img: 'scott-estrada-developer.jpg'
	},
    {
		firstName: 'Barbara',
		lastName: 'Ramos',
        role: 'Graphic Designer',
		img: 'barbara-ramos-graphic-designer.jpg'
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













