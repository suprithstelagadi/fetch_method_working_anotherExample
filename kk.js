let cards = document.getElementsByClassName("cards")[0]

let url = "https://jsonplaceholder.typicode.com/albums"


let data = fetch(url).then((e)=>{
    //  console.log(e.json())

    return e.json();
})
    data.then((f_d)=>{
        // console.log(f_d)

        f_d.map((e)=>{
             let {userId,id,title} = e;

            cards.innerHTML +=`
               <div class="card">
                <h4>user Id :${userId}</h4>
                <h4>Id :${id}</h4>
                <h5>Title :${title}</h5>
                
            </div>
            ` 

        })
    })




