import { styles } from "./app.styles";
import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";
import Button from './components/main/ToogleBtn';

export default function App() {
    return (
        <div style={styles.wrapper}>
            <Sidebar logoName={'Start Bootstrap'}/>
            <Main/>
        </div>
    )
}