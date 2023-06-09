import { Box, NoSsr } from '@components';
import React from 'react';

function LargeTree() {
  return Array.from(new Array(5000)).map((_, index) => <span key={index}>.</span>);
}

export default function NoSsrDemo() {
  const [state, setState] = React.useState({
    open: false,
    defer: false
  });

  return (
    <div>
      <button
        type='button'
        onClick={() =>
          setState({
            open: !state.open,
            defer: false
          })
        }
      >
        {'Render NoSsr defer="false"'}
      </button>
      <br />
      <button
        type='button'
        onClick={() =>
          setState({
            open: !state.open,
            defer: true
          })
        }
      >
        {'Render NoSsr defer="true"'}
      </button>
      <br />
      <br />
      <Box css={{ width: 300, display: 'flex', flexWrap: 'wrap' }}>
        {state.open ? (
          <React.Fragment>
            <div>Outside NoSsr</div>
            <NoSsr defer={state.defer}>
              .....Inside NoSsr
              <LargeTree />
            </NoSsr>
          </React.Fragment>
        ) : null}
      </Box>
    </div>
  );
}
