import { useCallback, useRef, useState } from 'react';
import { Rnd } from 'react-rnd';
import { useWindowStore } from '../../stores/windowStore';

interface WindowProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export default function Window({ id, title, children }: WindowProps) {
  const {
    windows,
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    focusWindow,
    updatePosition,
    updateSize,
  } = useWindowStore();

  const win = windows[id];
  const rndRef = useRef<Rnd | null>(null);
  const [closing, setClosing] = useState(false);
  const [preMaxState, setPreMaxState] = useState<{
    position: { x: number; y: number };
    size: { width: number; height: number };
  } | null>(null);

  const handleClose = useCallback(() => {
    setClosing(true);
    setTimeout(() => {
      closeWindow(id);
      setClosing(false);
    }, 200);
  }, [closeWindow, id]);

  const handleMaximize = useCallback(() => {
    if (!win.isMaximized) {
      setPreMaxState({ position: win.position, size: win.size });
    } else if (preMaxState) {
      updatePosition(id, preMaxState.position);
      updateSize(id, preMaxState.size);
    }
    maximizeWindow(id);
  }, [id, maximizeWindow, updatePosition, updateSize, win?.isMaximized, win?.position, win?.size, preMaxState]);

  if (!win || !win.isOpen) return null;

  const isFocused =
    win.zIndex >=
    Math.max(...Object.values(windows).map((w) => (w.isOpen ? w.zIndex : 0)));

  return (
    <Rnd
      ref={rndRef}
      default={{
        x: win.position.x,
        y: win.position.y,
        width: win.size.width,
        height: win.size.height,
      }}
      minWidth={300}
      minHeight={200}
      bounds="parent"
      dragHandleClassName="window-titlebar"
      style={{ zIndex: win.zIndex, pointerEvents: 'auto' }}
      className={`window-container ${win.isMinimized ? 'window-minimized' : ''}`}
      onDragStop={(_e, d) => {
        updatePosition(id, { x: d.x, y: d.y });
        focusWindow(id);
      }}
      onResizeStop={(_e, _dir, ref, _delta, position) => {
        updateSize(id, {
          width: parseInt(ref.style.width),
          height: parseInt(ref.style.height),
        });
        updatePosition(id, position);
      }}
      enableResizing={!win.isMaximized}
      disableDragging={win.isMaximized}
    >
      <div
        className={`window ${isFocused ? 'focused' : ''} ${closing ? 'window-exit' : 'window-enter'}`}
        onMouseDown={() => focusWindow(id)}
      >
        <div className="window-titlebar">
          <div className="traffic-lights">
            <button
              className="traffic-light red"
              onClick={(e) => {
                e.stopPropagation();
                handleClose();
              }}
            />
            <button
              className="traffic-light yellow"
              onClick={(e) => {
                e.stopPropagation();
                minimizeWindow(id);
              }}
            />
            <button
              className="traffic-light green"
              onClick={(e) => {
                e.stopPropagation();
                handleMaximize();
              }}
            />
          </div>
          <div className="window-title">{title}</div>
        </div>
        <div className="window-body">{children}</div>
      </div>
    </Rnd>
  );
}
