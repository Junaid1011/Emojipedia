import React from "react";

function Footer(){
    const currentDate = new Date();
const year = currentDate.getFullYear();

return (

    
<footer>

Made with 💛 by Junaid Akhtar {year}


</footer>


    
);
}

export default Footer;
