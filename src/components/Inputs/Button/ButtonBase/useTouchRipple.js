import * as React from 'react';
import { useEventCallback } from '@component/hooks';

const useTouchRipple = (props) => {
  const { disabled, disableRipple, disableTouchRipple, rippleRef } = props;

  // Function to handle ripple events
  function useRippleHandler(rippleAction, skipRippleAction = disableTouchRipple) {
    return useEventCallback((event) => {
      if (!skipRippleAction && rippleRef.current) {
        rippleRef.current[rippleAction](event);
      }
      return true;
    });
  }

  const handleBlur = useRippleHandler('stop', false);
  const handleMouseDown = useRippleHandler('start');
  const handleContextMenu = useRippleHandler('stop');
  const handleDragLeave = useRippleHandler('stop');
  const handleMouseUp = useRippleHandler('stop');
  const handleMouseLeave = useRippleHandler('stop');
  const handleTouchStart = useRippleHandler('start');
  const handleTouchEnd = useRippleHandler('stop');
  const handleTouchMove = useRippleHandler('stop');

  const [mountedState, setMountedState] = React.useState(false);

  React.useEffect(() => {
    setMountedState(true);
  }, []);

  const enableTouchRipple = mountedState && !disableRipple && !disabled;

  const getRippleHandlers = React.useMemo(() => {
    const rippleHandlers = {
      onBlur: handleBlur,
      onMouseDown: handleMouseDown,
      onMouseUp: handleMouseUp,
      onMouseLeave: handleMouseLeave,
      onContextMenu: handleContextMenu,
      onDragLeave: handleDragLeave,
      onTouchStart: handleTouchStart,
      onTouchEnd: handleTouchEnd,
      onTouchMove: handleTouchMove
    };

    return (otherEvents = {}) => {
      const eventNames = Object.keys(rippleHandlers);
      const wrappedEvents = eventNames.map((eventName) => ({
        name: eventName,
        handler: (ev) => {
          otherEvents[eventName]?.(ev);
          rippleHandlers[eventName](ev);
        }
      }));

      return wrappedEvents.reduce((acc, current) => {
        acc[current.name] = current.handler;
        return acc;
      }, {});
    };
  }, [
    handleBlur,
    handleMouseDown,
    handleMouseUp,
    handleMouseLeave,
    handleContextMenu,
    handleDragLeave,
    handleTouchStart,
    handleTouchEnd,
    handleTouchMove
  ]);

  return {
    enableTouchRipple,
    getRippleHandlers
  };
};

export default useTouchRipple;
