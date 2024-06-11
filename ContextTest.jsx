const ThemeContext = React.createContext('light')

function App() {
    return (
        <ThemeContext.Provider value="dark">
            <UserContext.Provider value="??">
                <Toolbar />
            </UserContext.Provider>
        </ThemeContext.Provider>
    )
}

function Toolbar() {
    return (
        <div>
            <ThemeButton/>
        </div>
    )
}

function ThemeButton(props) {
    return (
        <ThemeContext.Consumer>
            {value => <Button theme= {value} />}
        </ThemeContext.Consumer>
    )
}