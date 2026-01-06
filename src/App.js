import React from "react";

export default function App() {
  const [blocks, setBlocks] = React.useState([]);
  const addBlock = () => {
    setBlocks((prev) => [...prev, { id: prev.length + 1 }]);
  };
  const withCircle = (id) => {
    if (id % 5 === 0) {
      return (
        <div
          style={{
            color: "black",
            backgroundColor: "red",
            borderColor: "black",
            borderRadius: "50%",
            height: "20px",
            width: "20px",
            margin: "5px",
            textAlign: "center",
            lineHeight: "20px",
          }}
        >
          {id}
        </div>
      );
    }
    return (
      <div
        style={{
          color: "white",
          backgroundColor: "black",
          height: "20px",
          width: "20px",
          margin: "5px",
          textAlign: "center",
          lineHeight: "20px",
        }}
      >
        {id}
      </div>
    );
  };
  return (
    <div className="App">
      <button onClick={addBlock}>Add square</button>{" "}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {blocks.map((block) => (
          <div key={block.id}>{withCircle(block.id)}</div>
        ))}
      </div>
    </div>
  );
}
