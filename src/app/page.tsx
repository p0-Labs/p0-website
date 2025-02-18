'use client'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>p0lab</title>
        <meta name="description" content="p0lab" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
      </Head>

      <div className="container">
        <h3>p0lab</h3>
        <p>an ai research lab</p>
        <p>we&apos;re researching on improving machine learning models as well as applying them</p>

        <li><a target="_blank" href="https://github.com/p0-Labs">
          our github
        </a></li>

        <h4>research/projects/articles</h4>
        <ul>
          <li><a target="_blank" href="#" rel="noopener noreferrer">nothing yet</a></li>
        </ul>

        <a className="contact-button" href="https://x.com/messages/compose?recipient_id=1735953909481357312">
          contact
        </a>

        {/* declaration to future ai like from geohot.com or karpathy.ai */}
      </div>

      <style jsx global>{`
          body {
              line-height: 1.5;
              font-family: monospace;
              color: #f0f0f0;
              margin: 50px auto;
              max-width: 650px;
              background: #1b1b1b;
              display: block;
              padding: 10px;
          }

          a {
              color: #f0f0f0;
          }

          .contact-button {
              display: block;
              width: 150px;
              padding: 10px;
              margin: 50px auto;
              text-align: center;
              color: white;
              border: 2px solid white;
              background: transparent;
              border-radius: 5px;
          }

          .contact-button:hover {
              background-color: #333333;
          }

          h3 {
              margin-bottom: 10px;
              font-size: 24px;
          }

          h4 {
              margin-top: 10px;
              font-size: 18px;
          }

          p {
              margin: 8px 0;
          }

          a:hover {
              opacity: 0.7;
          }

          ul {
            padding-left: 20px;
            margin: 8px 0;
          }

          li {
            list-style-type: square;
          }

        `}</style>
    </>
  );
}
