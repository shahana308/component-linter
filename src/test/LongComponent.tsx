export default function LongComponent() {
  let list = Array.from({ length: 100 }, (_, i) => i);

  return (
    <div>
      {list.map((i) => (
        <div key={i}>Item {i}</div>
      ))}
    </div>
  );
}
