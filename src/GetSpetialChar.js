const GetSpetialChar  = () => {
    
        const specialChar ="!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~'";
        return specialChar[Math.floor(Math.random() * specialChar.length)];
    
}
 
export default GetSpetialChar;