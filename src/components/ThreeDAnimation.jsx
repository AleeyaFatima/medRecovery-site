import React from 'react';

export default function ThreeDAnimation() {
  return (
    <div className="scene-3d" aria-hidden="true">
      <div className="stage-3d">
        <div className="grid-floor-3d" />
        
        {/* Bar 1 - Purple (Medical Billing) */}
        <div className="bar-3d bar-3d-1 purple-bar">
          <div className="face face-front" />
          <div className="face face-back" />
          <div className="face face-left" />
          <div className="face face-right" />
          <div className="face face-top" />
        </div>
        
        {/* Bar 2 - Gold (Revenue Cycle) */}
        <div className="bar-3d bar-3d-2 gold-bar">
          <div className="face face-front" />
          <div className="face face-back" />
          <div className="face face-left" />
          <div className="face face-right" />
          <div className="face face-top" />
        </div>
        
        {/* Bar 3 - Teal (Clean Claims) */}
        <div className="bar-3d bar-3d-3 teal-bar">
          <div className="face face-front" />
          <div className="face face-back" />
          <div className="face face-left" />
          <div className="face face-right" />
          <div className="face face-top" />
        </div>

        {/* Rotating 3D Growth Coin */}
        <div className="coin-3d">
          <div className="coin-face coin-front">$</div>
          <div className="coin-face coin-back">$</div>
        </div>
      </div>
    </div>
  );
}
