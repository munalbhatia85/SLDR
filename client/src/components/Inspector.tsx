// components/Inspector.tsx
type Props = {
  selectedCell: joint.dia.Cell | null;
};

export default function Inspector({ selectedCell }: Props) {
  const name = selectedCell?.attr('label/text') ?? '';

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    selectedCell?.attr('label/text', value);
  };

  return (
    <div style={{ padding: 10, width: 200 }}>
      <h4>Inspector</h4>
      {selectedCell ? (
        <>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={onChange}
            style={{ width: '100%' }}
          />
        </>
      ) : (
        <div>No shape selected</div>
      )}
    </div>
  );
}
