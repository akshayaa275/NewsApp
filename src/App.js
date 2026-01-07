
import { useState } from 'react';
import './App.css';
import News from './components/News';
function App() {
// Create a State to store the selected category
const [category, setCategory] = useState("general");
return (
<div className="App">
<h1>News Application</h1>
{/* Buttons to change the category */}
<button onClick={() => setCategory("general") }>General</button>
<button onClick={() => setCategory("technology") }>Technology</button>
<button onClick={() => setCategory("sports") }>Sports</button>
{/* Passing the category to News */}
<News category={category} />
</div>
);
}
export default App;