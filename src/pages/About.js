import { MdOutlineScience} from 'react-icons/md'

export default function About() {

    return (
      <div style={{ textAlign:"center", paddingTop: "110px" }}>
        <MdOutlineScience style={{color:"#38761d",fontSize:"32px",}}/>
        <h1 style={{color:"#38761d",fontSize:"25px"}}>Breaking Bad Wiki</h1>

        <div style={{paddingTop:"20px"}}>
          <p style={{color:"#38761d",fontSize:"20px"}}>Provides information about the characters from the TV Series</p>
          <p style={{color:"#38761d",fontSize:"20px"}}>"Breaking Bad" and "Better Call Saul"</p>
        </div>

        <div style={{paddingTop:"20px"}}>
          <p style={{color:"#38761d",fontSize:"15px"}}>Credit to the API Creator Tim Biles</p>
          <a href="https://www.breakingbadapi.com/" 
             style={{color:"#38761d",fontSize:"15px"}}>
              Check out the API here
          </a>
        </div>
      </div>
  );
}  