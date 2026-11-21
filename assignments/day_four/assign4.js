const raw= '({"id":1, "done":false},{"id":2, "done":true})';
const arr = JSON.parse(raw);
const pending= arr.filter(t => !t.done);
console.log(JSON.stringify(pending));
