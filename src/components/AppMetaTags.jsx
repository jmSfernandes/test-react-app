import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet-async'

function AppMetaTags({ title, description, image }) {
  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta property="og:type" content="article" />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta property="url" content={window.location.href} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  )
}

AppMetaTags.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string

}

AppMetaTags.defaultProps = {
  title: 'Framedrop Highlights',
  description: 'Find the best clips from your favorite streamers',
  image: `${window.location.origin}/images/framedrop-logo-o.png`

}
export default AppMetaTags
