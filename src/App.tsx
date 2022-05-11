import React from "react";
import { Button } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Assistive Technology Progress
            </header>
            <Button
                id="ex-button"
                className="button"
                onClick={() => console.log("clicked")}
            >
                Button!
            </Button>
        </div>
    );
}

export default App;
