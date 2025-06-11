
fetch(api)
.then(function cb(response){     // simple function : 1
    return (response.json())
})
.then (function cb(data){
    console.log(data)
})