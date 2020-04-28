import React from 'react';

class Footer extends React.Component{
    render(){
        return (
             <div>
                 <footer className= "footer bg-dark text-center py-5 text-white">
                     &copy; Copyright 2020 Images from Google - Developed by Pearly Choong 
                     <a href="https://github.com/Pearly-choong/react-demo" target="_blank"><p className="pt-2">My Github Project Link </p></a>
                </footer>
            </div>

        )
    }
    

}

export default Footer;