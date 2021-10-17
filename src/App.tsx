import Link from "@mui/material/Link";
import style from "./App.module.scss";
import Counter from "./screens/Counter";
import Routes from "./routes";

function App() {
    return (
        <div className={style.App}>
            <header className={style["App-header"]}>
                <Counter />
                <Link href="https://mui.com/getting-started/templates/">
                    templates
                </Link>
                <Routes />
            </header>
        </div>
    );
}

export default App;
