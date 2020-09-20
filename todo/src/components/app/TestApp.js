import React, { useState, useEffect, useCallback } from "react";
import useToShow from "../../customHooks/useToShow";
import useMousePosition from "../../customHooks/useMousePosition";

const TestApp = () => {
  const position = useMousePosition();

  return (
    <div>
      {position.x}:{position.y}
    </div>
  );
};

export default TestApp
