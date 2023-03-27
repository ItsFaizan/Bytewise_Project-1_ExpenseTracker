

export default function FirstComponent() {
  const person = {
    name: 'Gregorio Y. Zara',
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
  };
  const message = "Welcome to 30 Days Of React";
    return (
      <div style={person.theme}>
      <h2>Writing markup with JSX</h2>
      <h3>{message}</h3>
      <h4>{person.name}</h4>
      </div>
    );
  }