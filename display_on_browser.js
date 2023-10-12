async function getData() {
    let raw = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    let ans = await raw.json();
    console.log(ans);
}

getData();