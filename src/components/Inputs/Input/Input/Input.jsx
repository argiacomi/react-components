import React from 'react';
import styled, { shouldForwardProp } from '@styles';
import { deepmerge } from '@components/lib';
import InputBase, {
  inputBaseClasses,
  InputBaseComponent,
  InputBaseRoot
} from '../InputBase/InputBase';

export const inputClasses = {
  root: 'Input-Root',
  input: 'Input-Input',
  formControl: 'Input-FormControl',
  disabled: inputBaseClasses.disabled,
  error: inputBaseClasses.error,
  focused: inputBaseClasses.focused
};

const InputRoot = styled(InputBaseRoot, {
  shouldForwardProp: (prop) => shouldForwardProp(prop) || prop === 'classes',
  name: 'Input',
  slot: 'Root'
})(({ theme, ownerState }) => {
  return {
    position: 'relative',
    ...(ownerState.formControl && {
      'label + &': {
        marginTop: theme.spacing(2)
      }
    }),
    ...(!ownerState.disableUnderline && {
      '&::after': {
        borderBottom: `2px solid ${theme.color[ownerState.color].body}`,
        left: 0,
        bottom: 0,
        content: '""',
        position: 'absolute',
        right: 0,
        transform: 'scaleX(0)',
        transition: theme.transition.create('transform', {
          duration: theme.transition.duration.shorter,
          easing: theme.transition.easing.easeOut
        }),
        pointerEvents: 'none'
      },
      [`&.${inputClasses.focused}::after`]: {
        transform: 'scaleX(1) translateX(0)'
      },
      [`&.${inputClasses.error}`]: {
        '&::before, &::after': {
          borderBottomColor: theme.color.danger.body
        }
      },
      '&::before': {
        borderBottom: '1px solid rgba(0 0 0 0.42)',
        left: 0,
        bottom: 0,
        content: '"\\00a0"',
        position: 'absolute',
        right: 0,
        transition: theme.transition.create('border-bottom-color', {
          duration: theme.transition.duration.shorter
        }),
        pointerEvents: 'none'
      },
      [`&:hover:not(.${inputClasses.disabled}, .${inputClasses.error}):before`]: {
        borderBottom: `2px solid ${theme.color.text.primary}`,
        '@media (hover: none)': {
          borderBottom: '1px solid rgba(0 0 0 0.42)'
        }
      },
      [`&.${inputClasses.disabled}:before`]: {
        borderBottomStyle: 'dotted'
      },
      '@media (prefers-color-scheme: dark)': {
        '&::before': {
          borderBottom: '1px solid rgba(255, 255, 255, 0.7)'
        },
        [`&:hover:not(.${inputClasses.disabled}, .${inputClasses.error}):before`]: {
          '@media (hover: none)': {
            borderBottom: '1px solid rgba(255 255 255 0.7)'
          }
        }
      }
    })
  };
});

const InputInput = styled(InputBaseComponent)({});

const Input = React.forwardRef((props, ref) => {
  const {
    disableUnderline,
    fullWidth = false,
    inputComponent = 'input',
    multiline = false,
    slotProps,
    slots = {},
    type = 'text',
    ...other
  } = props;

  const ownerState = { ...props, disableUnderline };
  const inputComponentsProps = { root: { ownerState } };

  const componentsProps = slotProps
    ? deepmerge(slotProps, inputComponentsProps)
    : inputComponentsProps;

  const RootSlot = slots.root ?? InputRoot;
  const InputSlot = slots.input ?? InputInput;

  const classes = {
    root: [
      inputClasses.root,
      ownerState.disabled && inputClasses.disabled,
      ownerState.error && inputClasses.error,
      ownerState.focused && inputClasses.focused
    ],
    input: inputClasses.input
  };

  return (
    <InputBase
      slots={{ root: RootSlot, input: InputSlot }}
      slotProps={componentsProps}
      fullWidth={fullWidth}
      inputComponent={inputComponent}
      multiline={multiline}
      ref={ref}
      type={type}
      {...other}
      classes={classes}
    />
  );
});

Input.displayName = 'Input';

export default Input;
