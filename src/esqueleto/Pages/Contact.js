import ContactF from "./Contacto/ContactF";




function Contacto(){
    return(
        
            
        <section className="flex">
            
            <ContactF></ContactF>
            <div className="w-2/6">
            <h2>Redes sociales</h2>
            <div>
                <a href="https://www.youtube.com/?gl=ES&hl=es">
                <img src="img/facebook.png"></img>
                <label>Facebook</label>
               </a>
            </div>
            <div>
               <a href="https://www.youtube.com/?gl=ES&hl=es">
                <img src="img/twitter.png"></img>
                <label>Twitter</label>
                </a>
            </div>
            <div >
                <a href="https://www.youtube.com/?gl=ES&hl=es">
                <img src="img/instagram.png"></img>
                <label> Instagram</label>
               </a>
            </div>
        </div>
        </section>
                    
                
            
    );
}
export default Contacto;