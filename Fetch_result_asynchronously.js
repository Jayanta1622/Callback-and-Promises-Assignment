async function getData() {
    let raw = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
    let ans = await raw.json();
    console.log(ans);
}

getData();