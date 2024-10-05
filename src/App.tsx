import { BellRing } from "lucide-react";
import "./App.css";
import Alert from "./components/ui/Alert/Alert";

function App() {
  return (
    <>
      <Alert
        type="danger"
        icon={<BellRing />}
        title="Error"
        
      >
        <div> Something bad happened! <a href="/">Retry</a></div>
      </Alert>
      <Alert type="success" icon={<BellRing />} title="Success" description="All good!" />
      <Alert type="warning" icon={<BellRing />} title="Warning" description="Be careful!" />
      <Alert type="info" icon={<BellRing />} title="Info" description="This is an info message!" />
      <Alert type="default" icon={<BellRing />} title="Default" description="This is a default message!" />
    </>
  );
}

export default App;
