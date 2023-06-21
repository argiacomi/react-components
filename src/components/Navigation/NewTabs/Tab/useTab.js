import * as React from 'react';
import { useId, useForkRef } from '@components/lib';
import useButton from '@components/Inputs/ButtonBase/useButton';
import { useCompoundItem } from '@components/lib/useCompoundItem';
import { useListItem } from '../useList';
import { useTabsContext } from '../Tabs';

function tabValueGenerator(otherTabValues) {
  return otherTabValues.size;
}

function useTab(parameters) {
  const { value: valueParam, rootRef: externalRef, disabled = false, id: idParam } = parameters;

  const tabRef = React.useRef(null);
  const id = useId(idParam);

  const { value: selectedValue, selectionFollowsFocus, getTabPanelId } = useTabsContext();

  const tabMetadata = React.useMemo(() => ({ disabled, ref: tabRef, id }), [disabled, tabRef, id]);

  const {
    id: value,
    index,
    totalItemCount: totalTabsCount
  } = useCompoundItem(valueParam ?? tabValueGenerator, tabMetadata);

  const {
    getRootProps: getTabProps,
    rootRef: listItemRefHandler,
    highlighted,
    selected
  } = useListItem({
    item: value
  });

  const {
    getRootProps: getButtonProps,
    rootRef: buttonRefHandler,
    active,
    focusVisible,
    setFocusVisible
  } = useButton({
    disabled,
    focusableWhenDisabled: !selectionFollowsFocus,
    type: 'button'
  });

  const handleRef = useForkRef(tabRef, externalRef, listItemRefHandler, buttonRefHandler);

  const tabPanelId = value !== undefined ? getTabPanelId(value) : undefined;

  const getRootProps = (otherHandlers) => {
    const resolvedTabProps = {
      ...otherHandlers,
      ...getTabProps(otherHandlers)
    };

    const resolvedButtonProps = {
      ...resolvedTabProps,
      ...getButtonProps(resolvedTabProps)
    };

    return {
      ...resolvedButtonProps,
      role: 'tab',
      'aria-controls': tabPanelId,
      'aria-selected': selected,
      id,
      ref: handleRef
    };
  };

  return {
    getRootProps,
    active,
    focusVisible,
    highlighted,
    index,
    rootRef: handleRef,
    selected: selected || value === selectedValue,
    setFocusVisible,
    totalTabsCount
  };
}

export default useTab;
