SubmitButton()

function handleSubmit(event){
    event.stopPropagation();
    event.preventDefault();
    let year = document.getElementById("year").value;
    let round = document.getElementById("round").value;
    doAPICall(year, round);
    console.log(document.getElementById('year'));
};

function SubmitButton(){
    let button = document.getElementById("button");
    button.addEventListener('click', (e)=>handleSubmit(e));
};


async function doAPICall(year, round){
    result = await axios.get(`https://ergast.com/api/f1/${year}/${round}/driverStandings.json`);
    console.log(result)
    
    result = result.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
    tbody=document.getElementsByTagName('tbody')[0];

    tr = document.createElement('tr');
    tbody.appendChild(tr);

    th=document.createElement('th');
    for (let driver of result){
    if (driver){
    
    th.scope="row";
    td=document.createElement('td');
    td.innerText=driver.Driver.givenName;
    tr.appendChild(td);
    td=document.createElement('td');
    td.innerText=driver.Driver.familyName;
    tr.appendChild(td);
    td=document.createElement('td');
    td.innerText=driver.Driver.dateOfBirth;
    tr.appendChild(td);
    td=document.createElement('td');
    td.innerText=driver.position;
    tr.appendChild(td);
    td=document.createElement('td');
    td.innerText=driver.wins;
    tr.appendChild(td); 
    td=document.createElement('td');
    td.innerText=driver.Driver.nationality;
    tr.appendChild(td);
    td=document.createElement('td');
    td.innerText=driver.Constructors[0].name;
    tr.appendChild(td);
    tr = document.createElement('tr');
    tbody.appendChild(tr);
    };
    };

};