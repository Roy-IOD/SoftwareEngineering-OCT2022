import Article from "../components/Article"
import RandomQuote from "../components/RandomQuote"
import SimpleDialogDemo from "../components/SimpleDialogDemo"
import VideoPlayer from "../components/VideoPlayer"

function About() {

    return (
        <div className="About">
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis lobortis est, id ornare elit rutrum et.
                Nulla bibendum hendrerit dolor eget egestas. Nunc sit amet ante id ante rutrum rutrum ut ut turpis. 
                Morbi molestie fermentum vulputate. Vestibulum eget felis ut lacus elementum sagittis. 
                Curabitur ornare velit sit amet est laoreet placerat. Donec egestas consectetur diam ac porttitor. Ut nec posuere mi, quis fringilla nisl.</p>

            <Article/>

            <RandomQuote />      

            <SimpleDialogDemo />    

            <VideoPlayer />  
        </div>
    )
}

export default About