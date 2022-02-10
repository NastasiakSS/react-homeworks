import logo from './logo.svg';

import './App.css';
import Comments from "./compomnents/comments";
import Users from "./compomnents/users";
import Posts from "./compomnents/posts"


function App() {
    return (
        <div>
            <div>
            <Users/>
                <Posts/>

        </div>
    <div>
        <Comments/>
    </div>
</div>
)
    ;
}

export default App;
