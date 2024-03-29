import React from 'react';
import { useCompoundItem, useForkRef, useId } from '@components/lib';
import { useTabsContext } from '../../tabs';

function tabPanelValueGenerator(otherTabPanelValues) {
  return otherTabPanelValues.size;
}

function useTabPanel(parameters) {
  const { value: valueParam, id: idParam, rootRef: externalRef } = parameters;

  const context = useTabsContext();
  if (context === null) {
    throw new Error('No TabContext provided');
  }

  const { value: selectedTabValue, getTabId } = context;

  const id = useId(idParam);
  const ref = React.useRef(null);
  const handleRef = useForkRef(ref, externalRef);
  const metadata = React.useMemo(() => ({ id, ref }), [id]);

  const { id: value } = useCompoundItem(valueParam ?? tabPanelValueGenerator, metadata);

  const hidden = value !== selectedTabValue;

  const correspondingTabId = value !== undefined ? getTabId(value) : undefined;

  const getRootProps = () => {
    return {
      'aria-labelledby': correspondingTabId ?? undefined,
      hidden,
      id: id ?? undefined,
      ref: handleRef
    };
  };

  return {
    hidden,
    getRootProps,
    rootRef: handleRef
  };
}

export default useTabPanel;
