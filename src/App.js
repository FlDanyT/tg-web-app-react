import './App.css';
import {useTelegram} from "./hooks/useTelegram";
import { useEffect } from 'react';


function App() {
  const {onToggleButton,tg} = useTelegram();
useEffect(() => {
  tg.ready();
}, [])
// 	const onClose = () => {
// f
// }
return (
<div className="App">
 
<button onClick={onToggleButton}>toggle</button>
</div>
);
}
export default App;
