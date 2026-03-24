export interface DesktopIconData {
  id: string;
  label: string;
  icon: string;
  position: { top: string; left: string };
  dockOrder?: number;
}

export const desktopIcons: DesktopIconData[] = [
  {
    id: 'about',
    label: 'About Me',
    icon: '👩‍💻',
    position: { top: '20px', left: '40px' },
    dockOrder: 1,
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: '📁',
    position: { top: '20px', left: '170px' },
    dockOrder: 2,
  },
  {
    id: 'blog',
    label: 'Blog',
    icon: '🌐',
    position: { top: '20px', left: '300px' },
    dockOrder: 3,
  },
  {
    id: 'bookshelf',
    label: 'Bookshelf',
    icon: '📚',
    position: { top: '160px', left: '40px' },
    dockOrder: 4,
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: '✉️',
    position: { top: '160px', left: '170px' },
    dockOrder: 5,
  },
  {
    id: 'resume',
    label: 'Resume',
    icon: '📄',
    position: { top: '160px', left: '300px' },
    dockOrder: 6,
  },
  {
    id: 'terminal',
    label: 'Terminal',
    icon: '>_',
    position: { top: '300px', left: '40px' },
    dockOrder: 7,
  },
  {
    id: 'trash',
    label: 'Trash',
    icon: '🗑️',
    position: { top: '300px', left: '170px' },
  },
];

export const dockIcons = desktopIcons
  .filter((i) => i.dockOrder !== undefined)
  .sort((a, b) => (a.dockOrder ?? 0) - (b.dockOrder ?? 0));
