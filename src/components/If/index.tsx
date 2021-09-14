type Props = {
  condition?: boolean;
  children: any;
};

export const If = ({ condition, children }: Props): any => (condition ? children : null);
