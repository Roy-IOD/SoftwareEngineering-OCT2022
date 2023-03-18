import ReadMore from "./ReadMore";

function Article(props) {

    const text = props.text ? props.text : 'Focused, hard work is the real key to success. Keep your eyes on the goal, and just keep taking the next step towards completing it.'

    //how could we store the max length in the state and pass it via props?

    return (
        <div className="Article componentBox">
            <ReadMore text={text} maxLength={20}/>
        </div>
    )
}

export default Article
