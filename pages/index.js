import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Brendon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Hey, I'm Brendon 👋
        </h1>

        <p className="description">
          I'm a fullstack software engineer in Victoria BC.<br/>
          Working&nbsp;
          <a
            href="https://certn.co"
            target="_blank"
            rel="noopener noreferrer"
          >
            @certn
          </a>
          &nbsp;in React &amp; Django/DRF on AWS.
        </p>

        <div className="links">
          <a
            className="link"
            href="https://github.com/bndnio"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="link"
            href="https://twitter.com/bndnio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>

        <h2>Projects</h2>

        <div className="grid">
          <a
            className="card"
            href="https://simbs.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>SIMBS 🚵</h3>
            <p>Static site for my local trails society using Gatsby &amp; Prismic.</p>
          </a>

          <a
            className="card"
            href="https://github.com/bndnio/learn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Learn 📚</h3>
            <p>A collection of problems &amp; challenges I like to play with.</p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://github.com/bndnio/bndnio"
          target="_blank"
          rel="noopener noreferrer"
        >
          Build with ❤️ by me!
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        h1 a, p a {
          color: #0070f3;
        }

        h1 a:hover,
        p a:hover,
        .links a:hover,
        h1 a:focus,
        p a:focus,
        .links a:focus,
        h1 a:active,
        p a:active,
        .links a:active {
          text-decoration: underline;
        }

        h1, h2 {
          margin-bottom: 0;
          line-height: 1.15;
        }

        h1 {
          font-size: 4rem;
        }
        h2 {
          font-size: 3rem;
        }

        h1,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .link {
          margin: 1rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 1rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
