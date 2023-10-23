import "./App.css";
import { WebElArtGallery } from "./components";

function App() {
  return (
    <div>
      <WebElArtGallery
        photos={[
          { id: 1, src: "1.jpg", preview: "1.jpg", description: "mich" },
          { id: 2, src: "2.jpg", preview: "2.jpg", description: "mich2" },
          { id: 3, src: "3.jpg", preview: "3.jpg", description: "mich3" },
          { id: 4, src: "4.jpg", preview: "4.jpg", description: "mich4" },
          { id: 5, src: "5.jpg", preview: "5.jpg", description: "mich5" },
          { id: 6, src: "6.jpg", preview: "6.jpg", description: "mich6" },
        ]}
      />
    </div>
  );
}

export default App;
