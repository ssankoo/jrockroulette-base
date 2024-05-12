import React from 'react'
import Image from 'next/image'
import WeezerCover from '../imgs/images.jpg'
import AddIcon from '@mui/icons-material/Add';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause'; /*icono de pausa (para reemplazar el de play*/ 
import RestartAltIcon from '@mui/icons-material/RestartAlt';

function page() {
  return (
    <div className='page'>
      <div className='pageTitle'>JROCK ROULETTE</div>
        <div className='songNameContainer'>
          <div id='songTitle'>出町柳パラレルユニバース</div>
          <div id='artistName'>Asian Kung Fu Generation</div>
        </div>
      <div className='albumCoverContainer'>
          <Image
          className='albumCoverArt' 
          src={WeezerCover}
          width={300}
          alt='image'    
          />
      </div>
      <div className='buttons'>
        <button className='addButton'>
          <AddIcon fontSize='large'/>
        </button>      
        <button className='playButton'>
          <PlayArrowIcon fontSize='large'/>
        </button>
        <button className='anotherSongButton'>
          <RestartAltIcon fontSize='large'/>
        </button>
      </div>
      
      <div id='bandInfo'></div>
      <footer>created by snz</footer>
    </div>
    
  )
}

export default page