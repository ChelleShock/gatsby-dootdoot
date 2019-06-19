import React from 'react'
import PropTypes from 'prop-types'
import Masonry from 'react-masonry-css'

import betrayal from '../images/paint/betrayal.jpg'
import black from '../images/paint/black.jpg'
import boltheartgene from '../images/paint/boltheartgene.jpg'
import electro from '../images/paint/electro.jpg'
import explode from '../images/paint/explode.jpg'
import gene from '../images/paint/gene.jpg'
import ghost from '../images/paint/ghost.jpg'
import mural from '../images/paint/Mural.jpg'
import nobodyDies from '../images/paint/nobodyDies.jpg'
import phoneWoman from '../images/paint/phoneWoman.jpg'
import red from '../images/paint/red.jpg'
import redVampire from '../images/paint/redVampire.jpg'
import space from '../images/paint/space.jpg'
import sun from '../images/paint/sun.jpg'
import ufo from '../images/paint/ufo.jpg'
import yellowWoman from '../images/paint/yellowWoman.jpg'

import NameForm from '../components/contactForm'

import * as emailjs from 'emailjs-com'

class Main extends React.Component {
  render() {
	let close = (
	  <div
		className="close"
		onClick={() => {
		  this.props.onCloseArticle()
		}}
	  />
	)
	const breakpointColumnsObj = {
	  default: 3,
	  1100: 3,
	  700: 2,
	  500: 1,
	}
	;(function() {
	  emailjs.init('<YOUR USER ID>')
	})()

	return (
	  <div
		ref={this.props.setWrapperRef}
		id="main"
		style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
	  >
		<article
		  id="paint"
		  className={`${this.props.article === 'paint' ? 'active' : ''} ${
			this.props.articleTimeout ? 'timeout' : ''
		  }`}
		  style={{ display: 'none' }}
		>
		  <h2 className="major">Paint</h2>

		  <Masonry
			breakpointCols={breakpointColumnsObj}
			className="my-masonry-grid"
			columnClassName="my-masonry-grid_column"
		  >
			<img src={explode} alt="Blue Painting by Doot.Doot" />

			<img src={gene} alt="Blue Painting by Doot.Doot" />
			<img src={mural} alt="Blue Painting by Doot.Doot" />
			<img src={nobodyDies} alt="Blue Painting by Doot.Doot" />
			<img src={electro} alt="Blue Painting by Doot.Doot" />
			<img src={ghost} alt="Blue Painting by Doot.Doot" />
			<img src={phoneWoman} alt="Blue Painting by Doot.Doot" />
			<img src={redVampire} alt="Blue Painting by Doot.Doot" />
			<img src={betrayal} alt="Blue Painting by Doot.Doot" />

			<img src={space} alt="Blue Painting by Doot.Doot" />
			<img src={ufo} alt="Blue Painting by Doot.Doot" />
			<img src={yellowWoman} alt="Blue Painting by Doot.Doot" />
			<img src={boltheartgene} alt="Blue Painting by Doot.Doot" />
			<img src={red} alt="Blue Painting by Doot.Doot" />
			<img src={sun} alt="Blue Painting by Doot.Doot" />
			<img src={black} alt="Blue Painting by Doot.Doot" />
		  </Masonry>

		  {close}
		</article>

		<article
		  id="work"
		  className={`${this.props.article === 'videos' ? 'active' : ''} ${
			this.props.articleTimeout ? 'timeout' : ''
		  }`}
		  style={{ display: 'none' }}
		>
		  <h2 className="major">Videos</h2>
		  <iframe
			width="100%"
			height="315"
			title="Pet Envy"
			src="https://www.youtube.com/embed/Ow8yKBR5Dr8?rel=0"
			frameborder="0"
			allow="autoplay; encrypted-media"
			allowfullscreen
		  />
		  <i className="caption">Directed, shot, and edited. </i>

		  <iframe
			width="100%"
			height="315"
			title="video2"
			src="https://www.youtube.com/embed/jctDeZlXbPU?rel=0"
			frameborder="0"
			allow="autoplay; encrypted-media"
			allowfullscreen
		  />
		  <i className="caption">Captured, shot, and edited. </i>

		  <iframe
			width="100%"
			height="315"
			title="video3"
			src="https://www.youtube.com/embed/GBAOMYSBz9Y?rel=0"
			frameborder="0"
			allow="autoplay; encrypted-media"
			allowfullscreen
		  />
		  <i className="caption">Directed, shot, and edited. </i>

		  <iframe
			width="100%"
			height="315"
			title="video4"
			src="https://www.youtube.com/embed/ZbCY1lprfCU?rel=0"
			frameborder="0"
			allow="autoplay; encrypted-media"
			allowfullscreen
		  />
		  <i className="caption">Directed, shot, and edited. </i>

		  <iframe
			width="100%"
			height="315"
			title="video5"
			src="https://www.youtube.com/embed/90b-AWqD2tU?rel=0"
			frameborder="0"
			allow="autoplay; encrypted-media"
			allowfullscreen
		  />
		  <i className="caption">Directed, shot, and edited. </i>

		  {close}
		</article>
		<article
		  id="print"
		  className={`${this.props.article === 'print' ? 'active' : ''} ${
			this.props.articleTimeout ? 'timeout' : ''
		  }`}
		  style={{ display: 'none' }}
		>
		  <h2 className="major">Print</h2>

		  <p>Print work coming soon.</p>

		  {close}
		</article>

		<article
		  id="contact"
		  className={`${this.props.article === 'contact' ? 'active' : ''} ${
			this.props.articleTimeout ? 'timeout' : ''
		  }`}
		  style={{ display: 'none' }}
		>
		  <h2 className="major">Contact</h2>
		  <NameForm />

		  <ul className="icons">
			<li>
			  <a
				href="https://www.instagram.com/doot.dootmedia/"
				target="_blank"
				className="icon fa-instagram"
				rel="noopener noreferrer"
			  >
				<span className="label">Instagram</span>
			  </a>
			</li>
		  </ul>
		  {close}
		</article>
	  </div>
	)
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
