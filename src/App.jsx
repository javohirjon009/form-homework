import React from "react";
import Card from "./Card";

const App = () => {
  return (
    <div className="h-full flex p-12 gap-6">
      {/* <Protected> */}
      <Card
        image="https://picsum.photos/id/704/500/300"
        title="product 1"
        buttonType="primary"
      />
      <Card
        image="https://picsum.photos/id/703/500/300"
        title="product 2"
        buttonType="danger"
      />
      <Card
        image="https://picsum.photos/id/705/500/300"
        title="product 3"
        buttonType="success"
      />

      {/* </Protected> */}
    </div>
  );
};

export default App;
