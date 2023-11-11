


  function apiCall(inp)
{
    url = "'http://api.zippopotam.us/us/'" + inp + "'";
    

    fetch(url) 
  .then(response => { 
    if (response.ok) { 
      var oup = response.json();
      return oup; // Parse the response data as JSON 
    } else { 
      throw new Error('API request failed'); 
    } 
  }) 
  .then(data => { 
    // Process the response data here 
    return data;
    console.log(data); // Example: Logging the data to the console 
  }) 
  .catch(error => { 
    // Handle any errors here 
    return error;
   console.error(error); // Example: Logging the error to the console 
  });
}

console.log(apiCall(98121))
