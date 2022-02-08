const url ='https://api.github.com/users/AlJord'
const text = 'AlJord';
const result = text.link('https://github.com/AlJord');


let gitHubData



fetch(url)
    .then(function(response){
    
        return response.json()
    })
    .then(function(data){
        
        buildPage(data)
        document.querySelector('#user-name').innerHTML =`<h2>${data.name}<h2> 
        <img id = 'pic' src=${data.avatar_url}>
        <div id ='info' >
        Location: ${data.location}<br>
        GitHub URL: <a> ${result} </a><br>
        GitHub Username: AlJord
        <div id='repos' > GitHub Repos
        
        </div>`
        return data.repos_url
        //do w/e we want with that data now in json format
    })
    .then((reposUrl) => fetch(reposUrl))
    .then((res) => res.json())
    .then((data) => {
        console.log(data)


        for (let repo of data) {
            document.querySelector(
            '#org-data'
            ).innerHTML += `<p><a href=${repo.html_url}>${repo.name}</a></p>`
        }

    })

function buildPage(dataFromGitHub) {
    //do DOM stuff here
    console.log('hello')
    console.log(dataFromGitHub)
}

// fetch returns a promise-promise:waiting for a different request to come back before this runs
//  .then after fetch




 //debugging tool

// .then(function(data){
//     console.log(data)
//     debugger
//     document.querySelector('#user-name').innerHTML =`<h2>${data.name}<h2>`
// }








// fetch('https://api.github.com/users/AlJord')
//     .then(res => res.json()) //same thing as first .then above
//     .then((data) => {
//         document.querySelector('#user-name').innerHTML =`<h2>${data.name}<h2>`
//         console.log(data.repos_url)
//         return data.repos_url
//     })
//     .then((reposUrl) => fetch(reposurl))
//     .then((res) => res.json())
//     .then((data) => {
//         const justOneRepo = data [0]
//         document.querySelector('#org-data').innerHTML = `<a href=${data[0].url}>${datat[0].name}<a>`
//     })
