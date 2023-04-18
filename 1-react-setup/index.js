const h1 = document.createElement("h1")
h1.textContent = "Hello world"
h1.className = "header"
console.log(h1)

// JSX
const element = <h1 className="header">This is JSX</h1>
console.log(element)
// it is just a plain JavaScript Object

// JSX
const page = (
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is a paragraph</p>
    </div>
)
ReactDOM.render(
    page,
    document.getElementById("root")
)
console.log(page)