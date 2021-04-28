@module external styles: {..} = "./style.module.styl"
let {string} = module(React)

module ReLogo = {
  @module(`../../assets/brand/rescript-brandmark.svg`) @react.component
  external make: {..} => React.element = "default"
}

@react.component
let make = () => {
  <div className={styles["container"]}>
    <div> <ReLogo /> <h1> {string("Hello, World!")} </h1> </div>
  </div>
}
