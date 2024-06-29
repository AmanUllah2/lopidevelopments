import React from "react";
import FluidSimulation from "fluid-simulation-react";

const Pointer = () => {
  return {
    id: -1,
    x: 0,
    y: 0,
    dx: 0,
    dy: 0,
    down: false,
    moved: false,
    // color: [30, 0, 300],
  };
};

const Flash = () => {
  const customConfig = {
    textureDownsample: 2,
    densityDissipation: 0.8,
    densityDissipation: 0.98,
    velocityDissipation: 0.99,
    pressureDissipation: 0.8,
    pressureIterations: 25,
    curl: 1,
    splatRadius: 0.0012,
  };

  const customColors = [[0.3, 0.3, 0.3]];

  const customPointer = Pointer();

  return (
    <div className="h-screen w-screen fixed top-0 left-0 z-0 mix-blend-lighten hidden md:block">
      <FluidSimulation
        config={customConfig}
        color={customColors}
        pointer={customPointer}
      />
    </div>
  );
};

export default Flash;
