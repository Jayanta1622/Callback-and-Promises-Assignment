async function multipleApi() {
    let data1 = await(await fetch(`https://jsonplaceholder.typicode.com/todos/1`)).json();
    let data2 = await(await fetch(`https://jsonplaceholder.typicode.com/posts/1`)).json();

    let ans= {
        todo: data1 ,
        post: data2
    }
    console.log(ans);
}
multipleApi();