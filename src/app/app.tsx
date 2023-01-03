// eslint-disable-next-line @typescript-eslint/no-unused-vars

export function App() {
  return (
    <>
      <h1>ENV VAR IS: {(import.meta as any).env.VITE_HOME as any}</h1>
    </>
  );
}

export default App;
