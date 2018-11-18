import React from 'react';
import { Container, Divider } from 'semantic-ui-react'
import Footer from './footer.js'

const ContainerExampleAlignment = () => (
	<div id='aboutcontainer'>
		<Container textAlign='left' />
		<Container textAlign='center'>About Us</Container>
		<Container textAlign='right'></Container>
		<Container textAlign='justified'>
			<Divider />
			<p>
				We like craft breweries and we particularly like those which allow
						dogs, are open during the day, and have WiFi so we can code away
						with our best buddies. While there are other websites and
						resources available, none had an easy-to-use,
						publically-accessible API. The goal of this project is to keep an
						up-to-date, curated, and publically available database of
						breweries for the betterment of the beer community and joy of web
						developers like us.
      </p>
		</Container>
		<div id="empty"></div>

		<div id='footer' >
			<Footer />
		</div>

	</div>
)

export default ContainerExampleAlignment
