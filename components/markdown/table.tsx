import { Panel, Box, Table as MBTable } from '@sparkpost/matchbox';

type TableProps = {
  children?: React.ReactNode;
}

const Table = (props: TableProps): JSX.Element => {
  const { children } = props;
  return (
    <Box mb="550" px="400">
      <Panel>
        <MBTable p="500">
          {children}
        </MBTable>
      </Panel>
    </Box>
  )
}

export default Table;