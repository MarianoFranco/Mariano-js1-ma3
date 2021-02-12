// Question 2
// Make a call to the following API endpoint:
// https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating

// Loop through the results and display the following properties in HTML, but only for the first eight results:
// name
// rating
// number of tags (not the tag details, just the amount of tags)
// The styling for this assignment is not important but loading indicator should be displayed while the API call is in progress.

// Be sure to handle any potential errors in the code.

// You can use either regular promise or async/await syntax to make the call.

// Be sure to arrange all file types appropriately, consult the repos from the lessons for examples.

async function getGames(){

    try{
       
        document.querySelector('.loading').innerHTML +=`
            <img src="img/1.gif" alt="loading">
        `;
       
        const response = await fetch('https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating');
        const jsonFromServer = await response.json();
        console.log(jsonFromServer.results);    

        setTimeout(function(){
           document.querySelector('.loading').innerHTML = '';
            for(i=0; i < 9; i++){
                document.querySelector('.cardContainer').innerHTML += `
                <div class="card">
                    <h2>Name: ${jsonFromServer.results[i].name}</h2>
                    <h3>Rating: ${jsonFromServer.results[i].rating}</h3>
                    <p>Tags amount: ${jsonFromServer.results[i].tags.length}</p>
                    <p></p>
                </div>
                `;
            }
        },3000)
    
    }
    catch(error){
        document.querySelector('.alert').innerHTML = showAlertTouser(
			'An error occured please contact Superman to fix it',
			'danger'
		);
        document.querySelector('.loading').innerHTML = '';
    }
    finally{
        setTimeout(function () {
			document.querySelector('.alert').innerHTML = '';
		}, 5000);
    }
}

getGames();