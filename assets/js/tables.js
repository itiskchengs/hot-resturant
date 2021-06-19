const reservations = document.querySelector('.reservation-table');
const reservationTitle = document.querySelector('.card-title');
const reservationInfo = document.querySelector('.card-info');
const waitListInfo = document.querySelector('.card-waitlist'); 

//Reservations fetch data
fetch('/api/reservations')
.then((response) => {
   return response.json();
})
.then((data) => {
    getReservations(data);
})

//Wait List fetch data
fetch('/api/waitlist')
.then((response) => {
    return response.json();
})
.then((data) => {
    getWaitList(data);
})


function getReservations(data){
    for(let i = 0; i < data.length; i++){

        let resCon = document.createElement('div');
        let resTable = document.createElement('p');
        let resName = document.createElement('p');
        let resPhone = document.createElement('p');
        let resEmail = document.createElement('p');
        //let resButton = document.createElement('button');

        resCon.classList.add('res-con');
        resTable.classList.add('res-title');

        resTable.textContent = `Table #${data[i].id}`;
        resName.textContent = `Name: ${data[i].name}`;
        resPhone.textContent = `Phone: ${data[i].phone}`;
        resEmail.textContent = `Email: ${data[i].email}`;

        reservationInfo.append(resCon);
        resCon.append(resTable);
        resCon.append(resName);
        resCon.append(resPhone);
        resCon.append(resEmail);
    }
}

function getWaitList(data){
    for(let i = 0; i < data.length; i++){

        let resCon = document.createElement('div');
        let resTable = document.createElement('p');
        let resName = document.createElement('p');
        let resPhone = document.createElement('p');
        let resEmail = document.createElement('p');

        resCon.classList.add('res-con');
        resTable.classList.add('res-title');

        resTable.textContent = `Table #${data[i].id}`;
        resName.textContent = `Name: ${data[i].name}`;
        resPhone.textContent = `Phone: ${data[i].phone}`;
        resEmail.textContent = `Email: ${data[i].email}`;

        waitListInfo.append(resCon);
        resCon.append(resTable);
        resCon.append(resName);
        resCon.append(resPhone);
        resCon.append(resEmail);
    }
}