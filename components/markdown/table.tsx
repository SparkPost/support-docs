import { Panel, Table as MBTable } from '@sparkpost/matchbox';

type TableProps = {
  children?: React.ReactNode;
};

const Table = (props: TableProps): JSX.Element => {
  const { children } = props;
  return (
    <Panel>
      <MBTable p="500">{children}</MBTable>
    </Panel>
  );
};

export default Table;
