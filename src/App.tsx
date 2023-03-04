import { Icon } from "@blueprintjs/core";
import SoraImage from "./home-sora.webp";

function App() {
  return (
    <div
      className="App"
      style={{
        textAlign: "center",
      }}
    >
      <header className="App-header">
        <h1 className="b4-heading">Hi, I'm Tokino Sora!</h1>
        <img src={SoraImage} width={300} height={300} alt="Tokino Sora" />
      </header>
      <body>
        <h2 className="b4-heading">
          <a href="https://www.youtube.com/@TokinoSora">
            <Icon intent="danger" icon="video" iconSize={32} />
          </a>
          <p>Current Livestream</p>
        </h2>
        <iframe
          key="embed-youtube"
          title="Sora Youtube"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/live_stream?channel=UCp6993wxpyDPHUpavwDFqgg"
          allowFullScreen={true}
        ></iframe>
      </body>
      <footer>
        Created by a Tokino Sora Fan
      </footer>
    </div>
  );
}

export default App;
