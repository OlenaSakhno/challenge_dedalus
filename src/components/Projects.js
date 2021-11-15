import React, {Fragment} from 'react';

export const Projects = () => {


    const pLink = ["https://laughing-nobel-230c3d.netlify.app/",
                   "http://olena-s.com/",
                    "https://codepen.io/olenasakhno/full/LYyXYXq",
                    "https://react.olena-s.com",
                    "https://codepen.io/olenasakhno/pen/bGWjKmE?editors=0110",
                    "https://codepen.io/olenasakhno/full/YzQgaJb",
                    "https://codepen.io/olenasakhno/full/GRENMpx",
                    "https://codepen.io/olenasakhno/full/bGRZMma",
                    "https://codepen.io/olenasakhno/full/LYLamMp",
                    "https://codepen.io/olenasakhno/full/OJgqZdx"
                ];
    const bgImg = ["https://raw.githubusercontent.com/OlenaSakhno/images/7efd1a835162501b11f1931deb98ee9a1a0ab850/img.jpg",
                    "https://github.com/OlenaSakhno/images/blob/main/olena-s.jpg?raw=true",
                    "https://github.com/OlenaSakhno/images/blob/main/calculator1.jpg?raw=true",
                    "https://github.com/OlenaSakhno/images/blob/main/react.jpg?raw=true",
                    "https://github.com/OlenaSakhno/images/blob/main/DrumMachine.jpg?raw=true",
                    "https://github.com/OlenaSakhno/images/blob/main/Slider.jpg?raw=true",
                    "https://github.com/OlenaSakhno/images/blob/main/25+5%20clock.jpg?raw=true",
                    "https://github.com/OlenaSakhno/images/blob/main/Slider2.jpg?raw=true",
                    "https://github.com/OlenaSakhno/images/blob/main/DragNDrop.jpg?raw=true",
                    "https://github.com/OlenaSakhno/images/blob/main/AimGame.jpg?raw=true"

                ];
    const pName = ["JAMStack Bootcamp project", 
                    "olena-s.com/ (PHP project)",
                    "JavaScript Calculator (React)",
                    "Shopping List (React)",
                    "Drum Machine (React)",
                    "Cards-sources (JS)",
                    "25 + 5 Clock (React)",
                    "Slider (JS)",
                    "Drag and Drop (JS)",
                    "Aim Game (JS)"
                ];

    const Tile = (props) => {
         return(
            <a href={props.href} target="_blank" className="col-sm project-tile"
                style={{backgroundImage: `url(${props.style})` }}>
               <p className="project-title">{props.pName}</p>      
            </a>
            )
    
        }


    return(
        <Fragment>
            <div className="mt-5" id="projects">
                <h2>There are some of my projects</h2><br />
                <div class="container">
                    <div class="row">
                        <Tile href={pLink[0]} style={bgImg[0]} pName={pName[0]}/>
                        <Tile href={pLink[1]} style={bgImg[1]} pName={pName[1]}/>    
                        <Tile href={pLink[2]} style={bgImg[2]} pName={pName[2]}/>   
                    </div>
                    <div className="row">
                        <Tile href={pLink[3]} style={bgImg[3]} pName={pName[3]}/>
                        <Tile href={pLink[4]} style={bgImg[4]} pName={pName[4]}/>
                    </div>
                    <div className="row">
                        <Tile href={pLink[5]} style={bgImg[5]} pName={pName[5]}/>
                        <Tile href={pLink[6]} style={bgImg[6]} pName={pName[6]}/>
                        <Tile href={pLink[7]} style={bgImg[7]} pName={pName[7]}/>
                    </div>
                    <div className="row">
                        <Tile href={pLink[8]} style={bgImg[8]} pName={pName[8]}/>
                        <Tile href={pLink[9]} style={bgImg[9]} pName={pName[9]}/>
                    </div>
                </div>
            </div> 

        </Fragment>
    )
}

