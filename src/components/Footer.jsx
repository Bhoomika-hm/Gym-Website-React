import {FaPhone,FaMailBulk,FaMapMarked } from "react-icons/fa"
const Footer = () => {
  return (
  <div id="foot" className="footer">
    <div className="footer-container"  style={{color:"white"}}>
        <div className="left">
            <div className="location">
                
            <FaMapMarked  size={20} style={{color:"white",marginRight:"2rem",dsiplay:"inline"}}/>
           <p >Bengaluru,</p>
           <p>Karnataka</p>
           <div>
            </div>
            </div>
            <div className="phone">
            <h4><FaPhone  size={20} style={{color:"white",marginRight:"2rem"}}/>
            7676801823
            </h4>
            </div>
            <div className="email">
            <h4><FaMailBulk size={20} style={{color:"white",marginRight:"2rem"}}/>
            hmbhoomika2001@gmail.com
            </h4>
            </div>

        </div>
    </div>
  </div>
        
    
  )
}

export default Footer