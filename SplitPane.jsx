export default function SplitPane() {
    return(
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-">
                {props.right}
            </div>
        </div>
    )
}
