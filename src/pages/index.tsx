import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '../../src/components/HomepageFeatures'
import Heading from '@theme/Heading'

import './index.css'

const HomepageHeader = (): JSX.Element => {
  const { siteConfig } = useDocusaurusContext()

  return (
    <header className={clsx('hero hero--primary', 'heroBanner')}>
      <div className='container'>
        <Heading
          as='h1'
          className='hero__title'>
          {siteConfig.title}
        </Heading>
        <p className='hero__subtitle'>{siteConfig.tagline}</p>
        <div className='buttons'>
          <Link
            className='button button--secondary button--lg'
            to='/blog'>
            ブログを回遊する
          </Link>
        </div>
      </div>
    </header>
  )
}

const Home = (): JSX.Element => {
  const { siteConfig } = useDocusaurusContext()

  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}

export default Home
