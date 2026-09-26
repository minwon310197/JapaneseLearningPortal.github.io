/** A per-game-canvas hint. The browser/OS retains final adapter selection. */
export function configureGameCanvas(canvas, {quality='auto',coarsePointer=false,onLost=()=>{}}={}) {
  const preference=quality==='low'||coarsePointer?'low-power':'high-performance';
  const original=canvas.getContext;
  canvas.getContext=function(type,attributes) {
    if(!['webgl','webgl2','experimental-webgl'].includes(type))return original.call(this,type,attributes);
    const context=original.call(this,type,{...attributes,powerPreference:preference});
    return context || original.call(this,type,{...attributes,powerPreference:'default'});
  };
  const lost=event=>{event.preventDefault();onLost();};
  canvas.addEventListener('webglcontextlost',lost);
  return {preference,dispose(){canvas.getContext=original;canvas.removeEventListener('webglcontextlost',lost);}};
}
