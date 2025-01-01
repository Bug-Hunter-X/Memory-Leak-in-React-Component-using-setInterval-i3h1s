```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setInterval.  The cleanup function is missing.
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Missing cleanup function to clear the interval
    // This will lead to memory leaks and unexpected behavior.
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```