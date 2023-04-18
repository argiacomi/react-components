import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react';
import { cn } from '../../../lib/utils';
import useForkRef from '../../utils/useForkRef';
import useEventCallback from '../../utils/useEventCallback';
import useIsFocusVisible from '../../utils/useIsFocusVisible';
import TouchRipple from './TouchRipple';

const DrewButtonBase = forwardRef(function ButtonBase(props, ref) {
  const {
    action,
    centerRipple = false,
    children,
    className,
    component = 'button',
    disabled = false,
    disableRipple = false,
    disableTouchRipple = false,
    focusRipple = false,
    LinkComponent = 'a',
    onBlur,
    onClick,
    onContextMenu,
    onDragLeave,
    onFocus,
    onFocusVisible,
    onKeyDown,
    onKeyUp,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onTouchEnd,
    onTouchMove,
    onTouchStart,
    tabIndex = 0,
    TouchRippleProps,
    touchRippleRef,
    type,
    ...other
  } = props;

  const buttonRef = useRef(null);

  const rippleRef = useRef(null);
  const handleRippleRef = useForkRef(rippleRef, touchRippleRef);

  const {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible();
  const [focusVisible, setFocusVisible] = useState(false);
  if (disabled && focusVisible) {
    setFocusVisible(false);
  }

  useImperativeHandle(
    action,
    () => ({
      focusVisible: () => {
        setFocusVisible(true);
        buttonRef.current.focus();
      }
    }),
    []
  );

  const [mountedState, setMountedState] = useState(false);

  useEffect(() => {
    setMountedState(true);
  }, []);

  const enableTouchRipple = mountedState && !disableRipple && !disabled;

  useEffect(() => {
    if (focusVisible && focusRipple && !disableRipple && mountedState) {
      rippleRef.current.pulsate();
    }
  }, [disableRipple, focusRipple, focusVisible, mountedState]);

  function useRippleHandler(
    rippleAction,
    eventCallback,
    skipRippleAction = disableTouchRipple
  ) {
    return useEventCallback((event) => {
      if (eventCallback) {
        eventCallback(event);
      }

      const ignore = skipRippleAction;
      if (!ignore && rippleRef.current) {
        rippleRef.current[rippleAction](event);
      }

      return true;
    });
  }

  const handleMouseDown = useRippleHandler('start', onMouseDown);
  const handleContextMenu = useRippleHandler('stop', onContextMenu);
  const handleDragLeave = useRippleHandler('stop', onDragLeave);
  const handleMouseUp = useRippleHandler('stop', onMouseUp);
  const handleMouseLeave = useRippleHandler('stop', (event) => {
    if (focusVisible) {
      event.preventDefault();
    }
    if (onMouseLeave) {
      onMouseLeave(event);
    }
  });
  const handleTouchStart = useRippleHandler('start', onTouchStart);
  const handleTouchEnd = useRippleHandler('stop', onTouchEnd);
  const handleTouchMove = useRippleHandler('stop', onTouchMove);

  const handleBlur = useRippleHandler(
    'stop',
    (event) => {
      handleBlurVisible(event);
      if (isFocusVisibleRef.current === false) {
        setFocusVisible(false);
      }
      if (onBlur) {
        onBlur(event);
      }
    },
    false
  );

  const handleFocus = useEventCallback((event) => {
    if (!buttonRef.current) {
      buttonRef.current = event.currentTarget;
    }

    handleFocusVisible(event);
    if (isFocusVisibleRef.current === true) {
      setFocusVisible(true);

      if (onFocusVisible) {
        onFocusVisible(event);
      }
    }

    if (onFocus) {
      onFocus(event);
    }
  });

  const isNonNativeButton = () => {
    const button = buttonRef.current;
    return (
      component &&
      component !== 'button' &&
      !(button.tagName === 'A' && button.href)
    );
  };

  const keydownRef = useRef(false);
  const handleKeyDown = useEventCallback((event) => {
    if (
      focusRipple &&
      !keydownRef.current &&
      focusVisible &&
      rippleRef.current &&
      event.key === ' '
    ) {
      keydownRef.current = true;
      rippleRef.current.stop(event, () => {
        rippleRef.current.start(event);
      });
    }

    if (
      event.target === event.currentTarget &&
      isNonNativeButton() &&
      event.key === ' '
    ) {
      event.preventDefault();
    }

    if (onKeyDown) {
      onKeyDown(event);
    }

    if (
      event.target === event.currentTarget &&
      isNonNativeButton() &&
      event.key === 'Enter' &&
      !disabled
    ) {
      event.preventDefault();
      if (onClick) {
        onClick(event);
      }
    }
  });

  const handleKeyUp = useEventCallback((event) => {
    if (
      focusRipple &&
      event.key === ' ' &&
      rippleRef.current &&
      focusVisible &&
      !event.defaultPrevented
    ) {
      keydownRef.current = false;
      rippleRef.current.stop(event, () => {
        rippleRef.current.pulsate(event);
      });
    }
    if (onKeyUp) {
      onKeyUp(event);
    }

    if (
      onClick &&
      event.target === event.currentTarget &&
      isNonNativeButton() &&
      event.key === ' ' &&
      !event.defaultPrevented
    ) {
      onClick(event);
    }
  });

  const ComponentProp =
    component === 'button' && (other.href || other.to)
      ? LinkComponent
      : component;

  const buttonProps = {};
  if (ComponentProp === 'button') {
    buttonProps.type = type === undefined ? 'button' : type;
    buttonProps.disabled = disabled;
  } else {
    if (!other.href && !other.to) {
      buttonProps.role = 'button';
    }
    if (disabled) {
      buttonProps['aria-disabled'] = disabled;
    }
  }

  const handleRef = useForkRef(ref, focusVisibleRef, buttonRef);

  if (process.env.NODE_ENV !== 'production') {
    useEffect(() => {
      if (enableTouchRipple && !rippleRef.current) {
        console.error(
          [
            'The `component` prop provided to ButtonBase is invalid.',
            'Please make sure the children prop is rendered in this custom component.'
          ].join('\n')
        );
      }
    }, [enableTouchRipple]);
  }

  const classes = {
    root: 'inline-flex items-center justify-center align-middle text-center relative box-border bg-transparent outline-none border-none border-0 rounded-none rounded-0 m-0 p-0 cursor-pointer select-none appearance-none no-underline text-current'
  };

  return (
    <button
      as={ComponentProp}
      className={cn(classes.root, className)}
      onBlur={handleBlur}
      onClick={onClick}
      onContextMenu={handleContextMenu}
      onFocus={handleFocus}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onDragLeave={handleDragLeave}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchStart}
      ref={handleRef}
      tabIndex={disabled ? -1 : tabIndex}
      type={type}
      {...buttonProps}
      {...other}
    >
      {children}
      {enableTouchRipple ? (
        <TouchRipple
          ref={handleRippleRef}
          center={centerRipple}
          {...TouchRippleProps}
        />
      ) : null}
    </button>
  );
});

export default DrewButtonBase;