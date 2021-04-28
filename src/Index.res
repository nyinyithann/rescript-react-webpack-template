@@config(no_export)
%%raw(`import './style/global.styl'`)

let reactRoot = ReactDOM.querySelector("#react")

switch reactRoot {
| None => ()
| Some(root) => ReactDOM.render(<App />, root)
}
