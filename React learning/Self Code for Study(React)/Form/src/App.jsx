// import "./App.css";
// import Form from "./Form";
// import CommentsForm from "./CommentsForm";
// import Counter from "./Counter";
// import Joker from "./Joker";

// function App() {
//   return (
//     <>
//       <Form />
//       <CommentsForm />
//       <Counter />
//       <Joker />
//     </>
//   );
// }

// export default App;

import "./App.css";

import Form from "./Form";
import CommentsForm from "./CommentsForm";
import Counter from "./Counter";
import Joker from "./Joker";

function App() {
  return (
    <div className="app">
      <header className="project-header">
        <h1>React Practice Dashboard</h1>

        <p>Forms • State • Events • useEffect • API</p>
      </header>

      <main className="components-grid">
        {/* Form */}
        <section className="component-card">
          <div className="card-title">
            <h2>📝 User Form</h2>
          </div>

          <Form />
        </section>

        {/* Comments */}
        <section className="component-card">
          <div className="card-title">
            <h2>💬 Comments</h2>
          </div>

          <CommentsForm />
        </section>

        {/* Counter */}
        <section className="component-card">
          <div className="card-title">
            <h2>🔢 Counter</h2>
          </div>

          <Counter />
        </section>

        {/* Joker */}
        <section className="component-card">
          <div className="card-title">
            <h2>😂 Joke API</h2>
          </div>

          <Joker />
        </section>
      </main>
    </div>
  );
}

export default App;
