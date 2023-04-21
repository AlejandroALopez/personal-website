import React from 'react';
import './style.scss';

export default function Interests() {
  return (
    <div className="interests-container" id="interests">
      <p className="title">Interests</p>
      <p className="instructions">Place the cursor over the icons to see some details</p>
      <div className="icons-container">
        <div className="icon-info-container">
          <i id="icon1" className="icon fa fa-gamepad fa-10x" />
          <div id="info1" className="info-bubble">
            <p className="info-text">Videogames are my main hooby. I mostly enjoy MMORPGs and single player RPGs.</p>
            <p className="subtitle-text">Favorite games:</p>
            <p className="bullet-text">- World of Warcraft</p>
            <p className="bullet-text">- Elden Ring</p>
            <p className="bullet-text">- Final Fantasy 14</p>
          </div>
        </div>
        <div className="icon-info-container">
          <i id="icon2" className="icon fa fa-music fa-10x" />
          <div id="info2" className="info-bubble">
            <p className="info-text">I like to listen to multiple soundtracks while working or doing any other activity.</p>
            <p className="subtitle-text">Favorite themes come from:</p>
            <p className="bullet-text">- Games (Nier, Witcher 3)</p>
            <p className="bullet-text">- Bands (Feint, Slipknot)</p>
            <p className="bullet-text">- Anime (Vinland Saga)</p>
          </div>
        </div>
        <div className="icon-info-container">
          <i id="icon3" className="icon fa fa-book-open fa-10x" />
          <div id="info3" className="info-bubble">
            <p className="info-text">I enjoy reading some mangas as they release chapters (hopefully) every week.</p>
            <p className="subtitle-text">Favorite mangas:</p>
            <p className="bullet-text">- Berserk</p>
            <p className="bullet-text">- Vinland Saga</p>
            <p className="bullet-text">- Kengan Ashura</p>
          </div>
        </div>
        <div className="icon-info-container">
          <i id="icon4" className="icon fa fa-dumbbell fa-10x" />
          <div id="info4" className="info-bubble">
            <p className="info-text">I am interested in the world of martial arts, and it is new for me as of now.</p>
            <p className="subtitle-text">Styles I find most interesting:</p>
            <p className="bullet-text">- Boxing</p>
            <p className="bullet-text">- Pencak Silat</p>
            <p className="bullet-text">- Tae Kwon Do</p>
          </div>
        </div>
      </div>
    </div>
  );
}
