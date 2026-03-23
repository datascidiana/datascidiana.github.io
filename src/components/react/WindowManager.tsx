import { useEffect, useState } from 'react';
import { useWindowStore } from '../../stores/windowStore';
import type { WindowConfig } from '../../stores/windowStore';
import Window from './Window';
import StickyNote from './windows/StickyNote';
import AboutWindow from './windows/AboutWindow';
import ProjectsWindow from './windows/ProjectsWindow';
import BlogWindow from './windows/BlogWindow';
import BookshelfWindow from './windows/BookshelfWindow';
import ContactWindow from './windows/ContactWindow';
import ResumeWindow from './windows/ResumeWindow';
import TerminalWindow from './windows/TerminalWindow';
import TrashWindow from './windows/TrashWindow';

const windowConfigs: WindowConfig[] = [
  { id: 'about', title: 'About — Diana Morales', icon: '👤', defaultSize: { width: 750, height: 650 } },
  { id: 'projects', title: 'Projects — Finder', icon: '📁', defaultSize: { width: 900, height: 650 } },
  { id: 'blog', title: 'Blog — Safari', icon: '🌐', defaultSize: { width: 750, height: 580 } },
  { id: 'bookshelf', title: 'Bookshelf', icon: '📚', defaultSize: { width: 900, height: 560 } },
  { id: 'contact', title: 'Contact — Mail', icon: '✉️', defaultSize: { width: 880, height: 460 } },
  { id: 'resume', title: 'Resume — Preview', icon: '📄', defaultSize: { width: 900, height: Math.min(window.innerHeight - 60, 900) } },
  { id: 'terminal', title: 'Terminal', icon: '>_', defaultSize: { width: 750, height: 500 } },
  { id: 'trash', title: 'Trash', icon: '🗑️', defaultSize: { width: 750, height: 650 } },
];

const windowComponents: Record<string, React.ComponentType> = {
  about: AboutWindow,
  projects: ProjectsWindow,
  blog: BlogWindow,
  bookshelf: BookshelfWindow,
  contact: ContactWindow,
  resume: ResumeWindow,
  terminal: TerminalWindow,
  trash: TrashWindow,
};

export default function WindowManager() {
  const { windows, registerWindow, openWindow } = useWindowStore();
  const [isMobile, setIsMobile] = useState(false);

  // Register all windows on mount
  useEffect(() => {
    windowConfigs.forEach((config) => registerWindow(config));
  }, [registerWindow]);

  // Listen for custom events from Astro icons
  useEffect(() => {
    const handleOpen = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail?.id) {
        openWindow(detail.id);
      }
    };
    window.addEventListener('open-window', handleOpen);
    return () => window.removeEventListener('open-window', handleOpen);
  }, [openWindow]);

  // Mobile detection
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const openWindowIds = Object.entries(windows)
    .filter(([, w]) => w.isOpen)
    .map(([id]) => id);

  if (isMobile) {
    return (
      <>
        {openWindowIds.map((id) => {
          const Component = windowComponents[id];
          const config = windowConfigs.find((c) => c.id === id);
          if (!Component || !config) return null;
          return (
            <div key={id}>
              <div
                className="mobile-sheet-overlay"
                onClick={() => useWindowStore.getState().closeWindow(id)}
              />
              <div className="mobile-sheet">
                <div className="mobile-sheet-header">
                  <span style={{ fontSize: 15, fontWeight: 600 }}>
                    {config.title}
                  </span>
                  <button
                    className="mobile-sheet-close"
                    onClick={() => useWindowStore.getState().closeWindow(id)}
                  >
                    Done
                  </button>
                </div>
                <div className="mobile-sheet-body">
                  <Component />
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: '25px 0 0 0',
        pointerEvents: 'none',
        zIndex: 10,
      }}
    >
      <div style={{ position: 'relative', width: '100%', height: '100%', pointerEvents: 'none' }}>
        <StickyNote />
        {windowConfigs.map((config) => {
          const Component = windowComponents[config.id];
          if (!Component) return null;
          return (
            <Window key={config.id} id={config.id} title={config.title}>
              <Component />
            </Window>
          );
        })}
      </div>
    </div>
  );
}
