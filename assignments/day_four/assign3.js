async function getEmails() {
    const r=await fetch(
        "https://jsonplaceholder.typicode.com/posts/1/comments"
    );
    const list = await r.json();
    console.log(list.map(c=> c.email));
}

getEmails();