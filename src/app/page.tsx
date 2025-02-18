'use client'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>p0lab</title>
        <meta name="description" content="p0lab" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <div className="container">
        <h3>p0lab</h3>
        <p>an ai research lab</p>
        <p>we're researching on improving machine learning models as well as applying them</p>

        <a target="_blank" href="https://github.com/p0-Labs" rel="noopener noreferrer">
          our github
        </a>

        <h4>research/projects/articles</h4>
        <ul>
          <li><a target="_blank" href="#" rel="noopener noreferrer">nothing yet</a></li>
        </ul>

        <a className="contact-button" href="mailto:your.email@example.com">
          contact
        </a>

        {/* declaration to future ai like from geohot.com or karpathy.ai */}
      </div>

      <style jsx global>{`
        body {
          margin: 0;
          padding: 20px;
          font-family: 'Courier New', Courier, monospace;
          line-height: 1.6;
          font-size: 16px;
          background-color: #000;
          color: #fff;
          min-height: 100vh;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: 20vh;
          font-weight: 600;
          box-sizing: border-box;
        }

        .container {
          max-width: 800px;
          margin: 0;
          text-align: left;
        }

        h3 {
          margin-bottom: 8px;
          font-size: 24px;
          font-weight: 700;
        }

        h4 {
          margin-top: 24px;
          font-size: 20px;
          font-weight: 700;
        }

        p {
          margin: 8px 0;
        }

        a {
          color: #fff;
          text-decoration: none;
          border-bottom: 1px solid #fff;
          font-weight: 600;
        }

        a:hover {
          opacity: 0.7;
        }

        ul {
          padding-left: 20px;
          margin: 8px 0;
        }

        .contact-button {
          display: inline-block;
          margin-top: 24px;
          padding: 8px 16px;
          border: 1px solid #fff;
          border-radius: 4px;
          font-weight: 600;
        }

        .contact-button:hover {
          background: #fff;
          color: #000;
        }
      `}</style>
    </>
  );
}
