import { FaInstagram,FaGithub } from 'react-icons/fa'

export default function Info() {

    return (
      <div style={{ textAlign:"center", paddingTop: "20px" }}>
        <h1>Profile</h1>

        <h1><img style={{paddingTop:"30px",paddingBottom:"30px",width:"130px",height:"fit-content"}}
             src="https://siap.undip.ac.id/foto/ktm/2020/21120120120021-58373161-6987-463f-8dc1-a1980e73ccad.jpg"/></h1>

        <div>
             <a href = "https://www.instagram.com/d4r1tz">
                <FaInstagram style={{color:"#cb7fef",marginBottom:"4px",fontSize:"42px"}}/>
             </a>

             <a href = "https://www.github.com/d4r1tz">
                <FaGithub style={{color:"#cb7fef",marginBottom:"4px",fontSize:"42px",marginLeft:"40px"}}/>
             </a>
        </div>

        <div style={{paddingTop:"20px",paddingLeft:"10px",paddingRight:"10px",paddingBottom:"60px"}}>
          <h3 style={{fontSize:"16px"}}>Daniel Ritz</h3>
          <h3 style={{fontSize:"16px"}}>21120120120021</h3>
          <h3 style={{fontSize:"16px"}}>Batam, 23 November 2001</h3>
          <h3 style={{fontSize:"16px"}}>d4r1tz@students.undip.ac.id</h3>
          <h3 style={{fontSize:"16px"}}>Instagram : @d4r1tz</h3>
          <h3 style={{fontSize:"16px"}}>Github : d4r1tz</h3>
        </div>
      </div>
  );
}  