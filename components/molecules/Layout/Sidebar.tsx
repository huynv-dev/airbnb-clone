import React, { JSX, ReactNode, useState, useRef, useEffect } from 'react';
import { ChevronRight, ChevronDown, Menu, Home, Settings, User, FileText, Database, BarChart } from 'lucide-react';

export interface MenuItem {
  key: string;
  label: string;
  icon?: ReactNode;
  children?: MenuItem[];
}

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  collapsed?: boolean;
  onCollapse?: (collapsed: boolean) => void;
  width?: number;
  collapsedWidth?: number;
  className?: string;
  menu?: MenuItem[];
}

const MenuItemComponent: React.FC<{
  item: MenuItem;
  depth: number;
  collapsed: boolean;
}> = ({ item, depth, collapsed }) => {
  const [open, setOpen] = useState(false);
  const [showFlyout, setShowFlyout] = useState(false);
  const itemRef = useRef<HTMLLIElement>(null);
  const flyoutRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hasChildren = !!item.children?.length;

  // Handle click để mở/đóng menu
  const handleClick = () => {
    if (hasChildren) {
      if (collapsed) {
        // Clear timeout khi click để giữ flyout
        if (hoverTimeoutRef.current) {
          clearTimeout(hoverTimeoutRef.current);
          hoverTimeoutRef.current = null;
        }
        setShowFlyout(!showFlyout);
      } else {
        setOpen(!open);
      }
    }
  };

  // Handle mouse events cho flyout khi collapsed với delay
  const handleMouseEnter = () => {
    if (collapsed && hasChildren) {
      // Clear timeout nếu có
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
        hoverTimeoutRef.current = null;
      }
      setShowFlyout(true);
    }
  };

  const handleMouseLeave = () => {
    if (collapsed && hasChildren) {
      // Thêm delay 30ms trước khi ẩn
      hoverTimeoutRef.current = setTimeout(() => {
        setShowFlyout(false);
      }, 30);
    }
  };

  // Handle mouse enter cho flyout để giữ nó hiện
  const handleFlyoutMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  const handleFlyoutMouseLeave = () => {
    if (collapsed && hasChildren) {
      hoverTimeoutRef.current = setTimeout(() => {
        setShowFlyout(false);
      }, 30);
    }
  };

  // Close flyout khi click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        collapsed &&
        showFlyout &&
        flyoutRef.current &&
        itemRef.current &&
        !flyoutRef.current.contains(event.target as Node) &&
        !itemRef.current.contains(event.target as Node)
      ) {
        setShowFlyout(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [collapsed, showFlyout]);

  // Cleanup timeout khi component unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  // Reset states khi collapsed thay đổi
  useEffect(() => {
    if (collapsed) {
      setOpen(false);
    } else {
      setShowFlyout(false);
      // Clear timeout khi chuyển sang expanded
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
        hoverTimeoutRef.current = null;
      }
    }
  }, [collapsed]);

  const renderSubMenu = (items: MenuItem[], isCollapsed: boolean) => (
    <ul className="space-y-1 py-2">
      {items.map((subItem) => (
        <MenuItemComponent
          key={subItem.key}
          item={subItem}
          depth={depth + 1}
          collapsed={false}
        />
      ))}
    </ul>
  );

  return (
    <li
      ref={itemRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        onClick={handleClick}
        className={`
          flex items-center px-3 py-2 rounded hover:bg-blue-600 transition-all cursor-pointer
          ${collapsed ? 'justify-center' : 'justify-between'}
        `}
      >
        <div className={`flex items-center gap-2 ${collapsed ? 'justify-center w-full' : ''}`}>
          {item.icon && (
            <span className="text-blue-300 w-5 flex justify-center flex-shrink-0">
              {item.icon}
            </span>
          )}
          {!collapsed && <span className="truncate">{item.label}</span>}
        </div>

        {!collapsed && hasChildren && (
          <span className="flex-shrink-0">
            {open ? (
              <ChevronDown className="w-4 h-4 text-blue-200" />
            ) : (
              <ChevronRight className="w-4 h-4 text-blue-200" />
            )}
          </span>
        )}
      </div>

      {/* Hiển thị sub menu */}
      {hasChildren && (
        <>
          {collapsed ? (
            // Flyout menu khi collapsed
            showFlyout && (
              <div
                ref={flyoutRef}
                className="absolute top-0 left-full ml-2 min-w-[200px] bg-gray-800 text-white rounded-lg shadow-xl border border-gray-600 z-50"
                style={{
                  marginTop: '0px',
                }}
                onMouseEnter={handleFlyoutMouseEnter}
                onMouseLeave={handleFlyoutMouseLeave}
              >
                <div className="px-3 py-2 border-b border-gray-600 font-medium text-blue-300">
                  {item.label}
                </div>
                {renderSubMenu(item.children!, false)}
              </div>
            )
          ) : (
            // Menu bình thường khi không collapse
            open && (
              <div className="ml-4 border-l border-gray-600 pl-2 mt-1">
                {renderSubMenu(item.children!, false)}
              </div>
            )
          )}
        </>
      )}
    </li>
  );
};

const renderMenu = (items: MenuItem[], depth = 0, collapsed = false): JSX.Element => {
  return (
    <ul className={depth === 0 ? 'space-y-1 p-2' : 'space-y-1'}>
      {items.map((item) => (
        <MenuItemComponent
          key={item.key}
          item={item}
          depth={depth}
          collapsed={collapsed}
        />
      ))}
    </ul>
  );
};

export const Sidebar: React.FC<SidebarProps> = ({
  collapsed = false,
  onCollapse,
  width = 250,
  collapsedWidth = 60,
  className,
  children,
  menu,
  ...props
}) => {
  const currentWidth = collapsed ? collapsedWidth : width;

  return (
    <div
      data-testid="sidebar"
      className={`transition-all duration-300  text-white h-full relative ${className || ''}`}
      style={{ width: currentWidth, minWidth: currentWidth }}
      {...props}
    >
      {menu ? renderMenu(menu, 0, collapsed) : children}
    </div>
  );
};

