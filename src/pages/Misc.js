export default function Misc() {

    return (
      <div style={{ textAlign:"center", paddingTop: "20px" }}>
        <h1 style={{color:"#fffff"}}>Other</h1>

        <div style={{paddingTop:"30px",paddingLeft:"10px",paddingRight:"10px"}}>
            <a href="/info" style={{textDecoration:"none"}}>
             <div style={{width:"100%", height:"fit-content",boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.1)",
                          borderRadius: "16px",margin: "0 8px 10px 0",backgroundColor: "#b6d7a8"}}>
                <h2 style={{fontSize:"30px",color:"#38761d"}}>Creator Profile</h2>
             </div>
             </a>
        </div>

        <div style={{paddingTop:"30px",paddingLeft:"10px",paddingRight:"10px"}}>
            <a href="/about" style={{textDecoration:"none"}}>
             <div style={{width:"100%", height:"fit-content",boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.1)",
                          borderRadius: "16px",margin: "0 8px 10px 0",backgroundColor: "#b6d7a8"}}>
                <h2 style={{fontSize:"30px",color:"#38761d"}}>About</h2>
             </div>
             </a>
        </div>
      </div>
  );
}  