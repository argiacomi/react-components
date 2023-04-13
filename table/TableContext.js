import * as React from 'react';

const TableContext = React.createContext();

if (process.env.NODE_ENV !== 'production') {
	TableContext.displayName = 'TableContext';
}

export default TableContext;
