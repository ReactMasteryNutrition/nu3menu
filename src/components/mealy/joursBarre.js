import React from "react";
import './joursBarre.css'


const JourBarre =()=> {


 return(
 
 <div className='container-indicator'>
            <div className='container-lines'>
                <div
                    className='line upper-line'
                    // animer la barre de progression des étapes de validation
                    //style={{
                      //  width: formIndex === 1 ? "0%"
                        //    : formIndex === 2 ? "0%"
                          //      : formIndex === 3 ? "25%"
                            //        : formIndex === 4 ? "50%"
                              //          : formIndex === 5 ? "75%"
                                //            : formIndex === 6 ? "100%"
                                  //              : ""
                    //}}
                    ></div>
                <div className='line under-line'></div>
            </div>
            <div className='container-img'>
                <div className='bloc-img'>
                    <img src="./images/logo_nu3menu.svg" alt="" />
                </div>
                <div className='bloc-img'>
                    <img src="./images/logo_nu3menu.svg" alt="" />
                </div>
                <div className='bloc-img'>
                    <img src="./images/logo_nu3menu.svg" alt="" />
                </div>
                <div className='bloc-img'>
                    <img src="./images/logo_nu3menu.svg" alt="" />
                </div>
                <div className='bloc-img'>
                    <img src="./images/logo_nu3menu.svg" alt="" />
                </div>
            </div>
        </div>
    


 
 
)}

export default JourBarre;