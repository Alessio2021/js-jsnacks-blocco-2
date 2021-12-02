// generatore di nomi e cognomi casuali, prendendo una lista di nomi e una lista di cognomi, gatsby vuole generare una falsa lista di invitati

const nameUser = [];
const surnameUser = [];

for (let i = 0; i < 40; i++) {
    let element = 'nome' + [i];
//    console.log(element); 
    nameUser.push(element)   
}

for (let i = 0; i < 40; i++) {
    let element = 'cognome' + [i];
//    console.log(element); 
    surnameUser.push(element)   
}

//console.log(nameUser, surnameUser);

for (let i = 0; i < nameUser.length; i++) {
    const fakeList =  nameUser[Math.floor(Math.random() * nameUser.length)] + ' ' + surnameUser[Math.floor(Math.random() * surnameUser.length)];

    console.log(fakeList);
}

//for (let i = 0; i < nameUser.length; i++) {
    //const element = nameUser[i] + surnameUser[i];
    //console.log(element);

//}