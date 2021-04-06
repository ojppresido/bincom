import React from 'react'
import data from './data';
import me from './image/me.JPG'

const Body = () => {
    const {technologies, photo} = data;
    return (
        <div style={{}}>
            <div style={{height:'70px'}}></div>
            <div className='navbar'  style={{height:'200px', backgroundColor:'blue'}}>
                <h2>
            Personal Resume to Bincom Dev Center(Olusola
            Joseph Pelumi)
            </h2>
            </div>

            <div>
            <div style={{height:'30px', marginTop:'0px'}}>
                <h2>What I can Do</h2>
                    {technologies.map((item, index)=>{
                        return <ul key={index}>
                            <h3>{item}</h3>
                        </ul>
                    })}
            </div>
                
            </div>
            <div style={{height:'30px', marginTop:'-30px', float:'right'}}>
                <h2>Work Experiences</h2>
                <ul>
                    <li><h3>Independent National Electoral Commission,</h3></li>
                    <li><h4>Executive Officer,</h4></li>
                    <li><h4>Ogun State, JULY 2015-PRESENT.</h4></li>
                </ul>

                <ul>
                    <li>
                        <h3>Federal Road Safety Corps,</h3>
                    </li>
                    <li><h4>Duty Room Officer, NYSC,</h4></li>
                    <li><h4>NOVEMBER 2012-OCTOMBER 2013.</h4></li>
                </ul>
            </div>
            <center>
            <div >
                        <img src={me} alt='me' style={{width:'400px', marginTop:'300px', border:'solid', borderRadius:'50%'}}/>
            </div>
            </center>
            <center>
                <div style={{marginTop:'50px'}}>
                <h2>Education</h2>
                <ul>
                    <li><h2>SEPTEMBER 2020-PRESENT</h2></li>
                    <li><h3>WEB DEVELOPMENT</h3></li>
                    <li><h3>SELF-TAUGHT</h3></li>
                </ul>
                <ul>
                    <li><h2>FEBRUARY 2012-MAY 2014</h2></li>
                    <li><h3>Msc. Political Science</h3></li>
                </ul>
                </div>

                <div>
                    <div className='row'>
                        <img src={photo[0]} alt='joseph' style={{width:'200px', marginLeft:'-600px', borderRadius:'50%'}}  className='col-xs-2'/>
                        <img src={photo[1]} alt='joshua' style={{width:'200px', marginLeft:'-100PX', borderRadius:'50%', marginTop:'-260px'}} className='col-xs-2'/>
                        <img src={photo[2]} alt='dayo' style={{width:'200px', marginLeft:'400PX', borderRadius:'50%', marginTop:'-200px'}} className='col-xs-2'/>
                        <img src={photo[3]} alt='sarafa' style={{width:'200px', marginLeft:'900PX', borderRadius:'50%', marginTop:'-200px'}} className='col-xs-2'/>
                    </div>
                </div>
            </center>
        </div>
    )
}

export default Body



