import Link from 'next/link'
export default function Home() {
  return (
    <div>
      <h1 className="title">Jacky Baltes - Reinforcement Learning</h1>

      <>
      <p>This site includes a set of teaching materials for my artificial intelligence course.</p>
      <p>Lecture material and interactive notebooks are available in the following google drive folder.</p>
      </>

      <h2>Main</h2>

      <>
      <style jsx>{`
        iframe {
          width: 100%;
          height: 20em;
        }
        `}
      </style>
      <iframe src="https://docs.google.com/document/d/e/2PACX-1vTjIiMzyWWZOWbXOmMaHNkAA7rT0CMzul89_JEGSCQxsijM-n3-wpSn__NL0xhPeLWsSOxturoXTbQe/pub?embedded=true"></iframe>
      </>

      <h2>Interactive Notebooks</h2>
      <>
      <style jsx>{`
        iframe {
          width: 100%;
          height: 10em;
        }
        `}
      </style>
      <p>
        The course makes extensive use of <a href="https://jupyter.org/">Jupyter notebooks</a> to allow
        students to experiment with the concepts discussed in class.
      </p>
      <p>        
      <iframe src="https://drive.google.com/embeddedfolderview?id=1nuPIMlPOBy-XFg0jXTTVLvg4p7mFM-fF"></iframe>
      </p>
      </>

      <h2>Discord Server</h2>
      <>
      <p>The course will use the following discord server to support discussions.</p>

      <p>Make sure that you pay attention to the messages on the server. Links to
        additional course material, assignments, and tests will be posted on discord only.
      </p>

      <iframe src="https://discord.com/widget?id=712940141429391392&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
      </>
      
    </div>
  )
}
