function greet(name) {
    let ans = new Promise((res,rej)=>{
        return res();
    })
    ans.then(()=>{
        console.log(`hello ${name}`);
    })
}
greet("Mithun");