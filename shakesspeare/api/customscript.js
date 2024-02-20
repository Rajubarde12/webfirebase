function fetchApi(url){
        fetch(url)
        .then(response => {
            // Check if the request was successful (status code 200 OK)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            // Parse the response JSON and return it
            return response.json();
        })
        .then(data => {
            // Handle the data
          
            GetApiData(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}	
// function GetApiData(data) {
    // console.log('Data:', data);
	// return data; 
// }